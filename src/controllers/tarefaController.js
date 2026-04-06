import Tarefa from "../models/TarefaModel.js";

const get = async (req, res) => {
    try{

        const dados  = await Tarefa.findAll();

        return res.status(200).send({
            type: 'success',
            message: 'Tarefas listadas com sucesso!',
            data: dados,
        });

    }catch(error){
        console.error(error.message);

        res.status(500).send({
            type: 'error',
            message: 'Ops! Ocorreu um erro ao buscar as tarefas.',
            data: error.message,
        });
    }
}

const getById = async (req, res) => {
    try {

        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).send({
                type: 'error',
                message: 'O id deve ser um número!',
                data: null,
            });
        }

        const tarefa = await Tarefa.findByPk(id);

        if (!tarefa) {
            return res.status(404).send({
                type: 'error',
                message: 'Tarefa não encontrada!',
                data: null,
            });
        }

        return res.status(200).send({
            type: 'success',
            message: 'Tarefa encontrada com sucesso!',
            data: tarefa,
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).send({
            type: 'error',
            message: 'Ops! Ocorreu um erro interno ao buscar a tarefa.',
            data: error.message,
        });
    }
};

const create = async (req, res) => {
    try{
        const {
            descricao,
            finalizado,
        } = req.body;

        if(!descricao){
            return res.status(400).send({
                type: 'error',
                message: 'A descrição é obrigatória!',
                data: null,
            });
        }

        const retorno = await Tarefa.create({
            descricao,
            finalizado,
        });

        return res.status(201).send({
            type: 'success',
            message: 'Tarefa criada com sucesso!',
            data: retorno,
        });

    } catch(error){
    console.error(error.message);

        res.status(500).send({
            type: 'error',
            message: 'Ops! Ocorreu um erro ao buscar as tarefas.',
            data: error.message,

        });
    }
}

const update = async (req, res) => {
    try {

        const { id } = req.params;
        const {
            descricao,
            finalizado,
        } = req.body;

        if(isNaN(id)){
            return res.status(400).send({
                type: 'error',
                message: 'O id deve ser um número!',
                data: null,
            });
        }

        const tarefa = await Tarefa.findByPk(id);

        if(!tarefa){
            return res.status(404).send({
                type: 'error',
                message: 'Tarefa não encontrada!',
                data: null,
            });
        }

        Object.keys(req.body).forEach(key => {
            if (['descricao', 'finalizado'].includes(key)) {
                tarefa[key] = req.body[key];
            }
        });

        await tarefa.save();

        return res.status(200).send({
            type: 'success',
            message: 'Tarefa atualizada com sucesso!',
            data: tarefa,
        });

    } catch (error) {
        console.error(error.message);

        res.status(500).send({
            type: 'error',
            message: 'Ops! Ocorreu um erro ao buscar as tarefas, revise o id e tente novamente.',
            data: error.message,
        });
    }
}

const destroy = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).send({
                type: 'error',
                message: 'O id deve ser um número!',
                data: null,
            });
        }

        const tarefa = await Tarefa.findByPk(id);

        if (!tarefa) {
            return res.status(404).send({
                type: 'error',
                message: 'Tarefa não encontrada!',
                data: null,
            });
        }

        await tarefa.destroy();

        return res.status(200).send({
            type: 'success',
            message: 'Tarefa deletada com sucesso!',
            data: null,
        });

    } catch (error) {
        console.error("Erro no destroy:", error.message);

        return res.status(500).send({
            type: 'error',
            message: 'Ops! Ocorreu um erro interno ao excluir a tarefa.',
            data: process.env.NODE_ENV === 'development' ? error.message : null,
        });
    }
}


export default {
    get,
    getById,
    create,
    update,
    destroy
};
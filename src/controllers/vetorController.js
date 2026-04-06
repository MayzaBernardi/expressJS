let vetor = [
    { id: 0, tarefa: "teste", date: new Date(), finalizado: true },
    { id: 1, tarefa: "teste2", date: new Date(), finalizado: false },
];

let idCount = vetor.length;

const getAll = (req, res) => {
    res.send(vetor);
};

const create = (req, res) => {
    const { tarefa, finalizado } = req.body;

    if (!tarefa || finalizado === undefined) {
        return res.status(400).send('Tarefa ou finalizado não informado');
    }

    const novaTarefa = {
        id: idCount++,
        tarefa,
        date: new Date(),
        finalizado,
    };

    vetor.push(novaTarefa);
    res.status(201).send(novaTarefa);
};

const update = (req, res) => {
    const id = parseInt(req.params.id);
    const index = vetor.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).send('Tarefa não encontrada');
    }

    vetor[index] = {
        ...vetor[index],
        tarefa: req.body.tarefa || vetor[index].tarefa,
        finalizado: req.body.finalizado !== undefined ? req.body.finalizado : vetor[index].finalizado,
        date: new Date()
    };

    res.send(vetor[index]);
};

const remove = (req, res) => {
    const id = parseInt(req.params.id);
    const index = vetor.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).send('Tarefa não encontrada');
    }

    vetor.splice(index, 1);
    res.send('Tarefa excluída com sucesso');
};

export default { getAll, create, update, remove };
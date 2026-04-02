import express from "express";
const app = express();
app.use(express.json());

let vetor = [
    {
        id: 0,
        tarefa: "teste",
        date: new Date(Date.now()),
        finalizado: true,
    },
    {
        id: 1,
        tarefa: "teste2",
        date: new Date(Date.now()),
        finalizado: false,
    },
];

let id = vetor.length;

app.get("/tarefas", (req, res) => {
    console.log("rota de tarefas acessada");
    res.send(vetor);
});

app.post("/tarefas", (req, res) => {
    const novaTarefa = [
        {
        id: id,
        tarefa: req.body.tarefa,
        date: new Date(Date.now()),
        finalizado: req.body.finalizado,
        },
    ];
    if(!novaTarefa[0].tarefa || novaTarefa[0].finalizado === undefined){
        res.status(400).send('tarefa ou finalizado não informado');
        return;
    }else{
        id++;
        vetor.push(novaTarefa);
    }
    
    console.log("rota de criar tarefas acessada");
    res.status(201).send(novaTarefa);
});


app.put("/tarefas/:id", (req, res) => {
    const id = req.params.id;
    const tarefaAtualizada = {
        id: id,
        tarefa: req.body.tarefa,
        date: new Date(Date.now()),
        finalizado: req.body.finalizado,
    };
    if(!vetor[id]){
        res.status(404).send('tarefa não encontrada');
        return;
    }else{
        vetor[id] = tarefaAtualizada;
        res.send(tarefaAtualizada);
    }
    console.log("rota de atualizar tarefas acessada");
    res.send(tarefaAtualizada);
});

app.delete("/tarefas/:id", (req, res) => {
    const id = req.params.id;
    const tarefaExcluida = vetor[id];
    if (!tarefaExcluida) {
        res.status(404).send('tarefa não encontrada');
        return;
    }else{
        vetor.splice(id, 1);
        res.send('tarefa excluida com sucesso');
    }
    console.log("rota de excluir tarefas acessada");
    res.status(204).send();
});

app.listen(3333, () => {
    console.log("sistema rodando na porta 3333");
});

export default {
    vetor,
    id,
};
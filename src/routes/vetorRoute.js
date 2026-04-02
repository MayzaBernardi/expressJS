import vetorControler from "../controller/vetorControler.js";          


export default (app) =>{
    app.get("/tarefas", vetorControler.vetor);
    app.post("/tarefas", vetorControler.id);
    app.put("/tarefas/:id", vetorControler.id); 
    app.delete("/tarefas/:id", vetorControler.id);
}
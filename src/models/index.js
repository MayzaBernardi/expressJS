import Tarefa from './TarefaModel.js';
import TarefaUsuario from './TarefaUsuario.js';
import UsuarioModel from './UsuarioModel.js';

(async () => {
    // await Tarefa.sync({force: true});
    await TarefaUsuario.sync({force: true});
    await UsuarioModel.sync({force: true});
})();
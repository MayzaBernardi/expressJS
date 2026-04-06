import { sequelize } from "../config/index.js";
import { DataTypes } from "sequelize";
import Tarefa from "./TarefaModel.js";


const TarefaUsuario = sequelize.define(
    'tarefa_usuario',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

TarefaUsuario.belongsTo(Tarefa, {
    as: 'tarefa',
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name: 'tarefa_id',
        allowNull: false,
        field: 'tarefa_id'
    }
});

export default TarefaUsuario;
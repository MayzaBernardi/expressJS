import { sequelize } from "../config/index.js";
import { DataTypes } from "sequelize";

const Tarefa = sequelize.define(
    'tarefas',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        finalizado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

export default Tarefa;
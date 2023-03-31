const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Tie extends Model {}

Tie.init(
    {
        sku: {
            type: DataTypes.STRING,
            allownull: false,
            primaryKey: true,
            validate: {
                isAlphanumeric: true,
            }
        },
        color: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                isAlpha: true,
            }
        },
        type: {
            type: DataTypes.STRING,
            allownull: false,
       
        },
        brand: {
            type: DataTypes.STRING,
            allownull: false,
        },
        description: {
            type: DataTypes.STRING,
            allownull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allownull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezTableName: true,
        underscored: true,
        modelName: 'tie',
    }
);

module.exports = Tie;

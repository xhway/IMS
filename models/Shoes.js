const { Model, DataTypes } = require('sequelize')
const { DataTypes } = require('sequelize/types')
const sequelize = require('../config/connection')

class Shoes extends Model {}

Shoes.init(
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
        size: {
            type: DataTypes.INTEGER,
            allownull: false,
            validate: {
                isNumerc: true,
            }
        },
        brand: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                isAlpha: true,
            }
        },
        description: {
            type: DataTypes.STRING,
            allownull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezTableName: true,
        underscored: true,
        modelName: 'shoes',
    }
);

module.exports = Shoes;
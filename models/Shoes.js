const { Model, DataTypes } = require('sequelize')
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
                isNumeric: true,
            }
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
        modelName: 'shoes',
    }
);

module.exports = Shoes;
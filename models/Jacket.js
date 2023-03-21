const { Model, DataTypes } = require('sequelize')
const { DataTypes } = require('sequelize/types')
const sequelize = require('../config/connection')

class Jacket extends Model {}

Jacket.init(
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
        fit: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                isAlpha: true,
            }
        },
        chest_size: {
            type: DataTypes.INTEGER,
            allownull: false,
            validate: {
                isNumerc: true,
            }
        },
        arm_length: {
            type: DataTypes.INTEGER,
            allownull: false,
            validate: {
                isNumeric: true,
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
        modelName: 'jacket',
    }
);

module.exports = Jacket;
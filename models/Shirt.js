const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shirt extends Model {}

Shirt.init(
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
        neck_size: {
            type: DataTypes.INTEGER,
            allownull: false,
            validate: {
                isNumeric: true,
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
        modelName: 'shirt',
    }
);

module.exports = Shirt;

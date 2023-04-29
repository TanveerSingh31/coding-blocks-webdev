const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: "mysql",
    database: "shoppingdb",
    username: "root",
    password: "sector7m%%%%%"
});


// creating models i.e tables

// creating customer table

const Customer = db.define('customer', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

// creating products table

const Product = db.define('product', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false, 
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(140),
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING(400),
        allowNull: false,
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.00
    },

    manufacturer: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// db.authenticate();

// module.exports concept 

// whenever, a module is to be imported or a module is required using require('')
// the object module.exports is returned after the complete module file is executed
// exports = module.exports
// so doing, exports.User = User || exports.Product = Product
// will affect the same module.exports object
// but doing exports = { User, Product} will now make a reference to a new object 
// and module.exports object is not modified at all and is {} empty object
// and when the module is required , then module.exports which is an empty object is returned, which doesnot contain anything!

// article ==> 

// db.sync();




module.exports = {
    Customer,
    Product
}
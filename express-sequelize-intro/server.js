const express = require('express');

const app = express();

const { Sequelize, DataTypes } = require('sequelize');
// import datatypes from sequelize



const db = new Sequelize({
    // mysql config's
    dialect: 'mysql',
    database: 'sampledb22',
    username: 'root',
    password: 'sector7m%%%%%',
})

// generating models i.e Classes 

// "models" are "tables" that are going to be created inside the databases
// including the datatype of columns it will contain

// Task is my model, (Tasks will be the table name inside the db)
// Task will contain the reference to the model created

const Task = db.define('Task', {

    // here I will define attributes of the table i.e columns

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING(140),
        allowNull: false,

    },

    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})


// method to authenticate connection between database
try {
    db.authenticate();
    console.log("connection success!");
} catch (err) {
    console.log(`db connection failed with ${err}`);
}


// create tables in the database using db.sync()

// additional --> all db operations will be async. in nature , use Async-Await keywords
// Async keyword--> tells javascript, that this function that if "Await" is encountered then proceed with code outside the function
// Await keyword--> tells js, that donot move with the successive code until the following has completed.

async function task() {
    await db.sync();           // creates the above tables/ models defined in the database
    const task1 = await Task.create({         // inserts 1 row to the table , the reference to that row is returned and is saved in Task1
        title: "go to gym",
        done: true,
    });

    console.log(task1.id);
    console.log(task1.title);
    console.log(task1.done);
}

// task();



async function bulkTasks() {
    await db.sync();
    // bulkCreate takes array of objects that need to be inserted as rows in db
    const tasks2 = await Task.bulkCreate([
        { title: "eat eggs", done: false},
        { title: "do grocerry", done: true},
        { title: "go to office", done: true}
    ]);

    for(let i=0; i<tasks2.length; i++){
        console.log(tasks2[i].title);
    }
}
// bulkTasks();


async function readAllTasks() {
    // .findAll() return array of objects, where each object is 1 row in the db ==> SELECT * FROM Tasks
    const allTasks = await Task.findAll();
    allTasks.forEach((task)=>{
        console.log(`${task.id} \t ${task.title} \t ${task.done}`);
    })
    
}

// readAllTasks();


// select conditional statements like WHERE in db

async function selectConditional(taskId) {
    const task = await Task.findAll({
        where: {
            id: taskId
        }
    });

    console.log(task[0].title);
}

// selectConditional(2);


// update particular row

async function update() {
    await Task.update({done: true}, {
        where: {
            done: false
        }
    });
    
}
update();


// delete a row
async function del() {
    await Task.destroy({
        where: {
            title: "go to office"
        }
    })
}
del();

app.listen(3000, () => {
    console.log("server started on http://localhost:3000");
})
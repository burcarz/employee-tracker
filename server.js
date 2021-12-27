// TODO: Include packages needed for this application
const express = require('express')
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./config/connection');
const res = require('express/lib/response');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const promptUser = responseData => {
    if (!responseData)  {
        responseData = [];
    return inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do',
            choices: ['View all departments', 
                      'View all roles',
                      'View all employees',
                      'Add a department',
                      'Add a role',
                      'Add an employee',
                      'Update an employee role'],
            validate: optionInput => {
                if (optionInput) {
                    return true
                } else {
                    console.log('Please select an Option')
                    return false;
                }
            }
        }])
    }
}

// a function that checks user responses
let writeSQL = function(response) {
    if (response = 'View all departments') {
        app.get('/departments', (res, req) => {
            sql = `SELECT * FROM departments`

            db.query(sql, (err, rows) => {
                if (err) {
                    res.statusCode(500).json({ err: err.message });
                    return;
                }
                console.table({ rows })
            })
        })
    } else if (response = 'View all roles') {
        app.get('/roles', (res, req) => {
            sql = `SELECT * FROM roles`

            db.query(sql, (err, rows) => {
                if (err) {
                    res.statusCode(500).json({ err: err.message });
                    return;
                }
                console.table({ rows })
            })
        })
    } else if (response = 'View all employees') {
        app.get('/employees', (res, req) => {
            sql = `SELECT * FROM employees`

            db.query(sql, (err, rows) => {
                if (err) {
                    res.statusCode(500).json({ err: err.message });
                    return;
                }
                console.table({ rows })
            })
        })
    } else if (response = 'Add a department') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the department',
                validate: optionInput => {
                    if (optionInput) {
                        return true
                    } else {
                        console.log('Please enter a department name')
                        return false;
                    }
            }
        }]).then(answer => {
            app.post('/departments', ({ answer }, res) => {
                const sql = `INSERT INTO deparments (name) VALUES (?)`;
                const params = [body.name];

                db.query(sql, params, (err, result) => {
                    if (err) {
                        res.status(400).json({ error: err.message });
                        return;
                    }
                    res.json({
                        message: 'success',
                        data: body,
                        changes: result.affectedRows
                    });
            })
    })
})

function init() {
    promptUser()
    .then(response => {
        console.log(response)
        return writeSQL(response)
    })
}

init();

db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

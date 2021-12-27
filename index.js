// TODO: Include packages needed for this application
const express = require('express')
const inquirer = require('inquirer');
const mysql2 = require('mysql2')

const app = express();


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
                    updateSQL(optionInput);
                    return true
                } else {
                    console.log('Please select an Optionj')
                    return false;
                }
            }
        }])
    }
}

let updateSQL = function(inqData) {
    
}

promptUser();

'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Admins", deps: []
 * addColumn "AdminId" to table "Users"
 * changeColumn "foto" on table "Users"
 * changeColumn "tel" on table "Users"
 * changeColumn "cpf" on table "Users"
 * changeColumn "dt_nasc" on table "Users"
 *
 **/

var info = {
    "revision": 1585517554,
    "name": "allowNull_adminCreated",
    "created": "2020-03-29T21:32:35.086Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Admins",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Users",
            "AdminId",
            {
                "type": Sequelize.INTEGER,
                "field": "AdminId",
                "onUpdate": "CASCADE",
                "onDelete": "RESTRICT",
                "references": {
                    "model": "Admins",
                    "key": "id"
                },
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "foto",
            {
                "type": Sequelize.BLOB,
                "field": "foto",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "tel",
            {
                "type": Sequelize.STRING,
                "field": "tel",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "cpf",
            {
                "type": Sequelize.STRING,
                "field": "cpf",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "dt_nasc",
            {
                "type": Sequelize.DATEONLY,
                "field": "dt_nasc",
                "allowNull": true
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};

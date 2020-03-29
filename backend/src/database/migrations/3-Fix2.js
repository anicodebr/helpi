'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "ClienteId" to table "Users"
 * addColumn "EntregadorId" to table "Users"
 *
 **/

var info = {
    "revision": 3,
    "name": "Fix2",
    "created": "2020-03-29T00:06:25.419Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "Users",
            "ClienteId",
            {
                "type": Sequelize.INTEGER,
                "field": "ClienteId",
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "Clientes",
                    "key": "id"
                },
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Users",
            "EntregadorId",
            {
                "type": Sequelize.INTEGER,
                "field": "EntregadorId",
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "Entregadors",
                    "key": "id"
                },
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

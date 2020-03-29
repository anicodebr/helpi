'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "ClienteId" on table "Users"
 * changeColumn "EntregadorId" on table "Users"
 *
 **/

var info = {
    "revision": 4,
    "name": "noname",
    "created": "2020-03-29T00:48:04.161Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "Users",
            "ClienteId",
            {
                "type": Sequelize.INTEGER,
                "field": "ClienteId",
                "onUpdate": "CASCADE",
                "onDelete": "RESTRICT",
                "references": {
                    "model": "Clientes",
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
            "EntregadorId",
            {
                "type": Sequelize.INTEGER,
                "field": "EntregadorId",
                "onUpdate": "CASCADE",
                "onDelete": "RESTRICT",
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

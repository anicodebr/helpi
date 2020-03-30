'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "UserId" to table "Admins"
 * changeColumn "autorizado" on table "Entregadors"
 *
 **/

var info = {
    "revision": 1585546719,
    "name": "userIdFK2Admin",
    "created": "2020-03-30T05:38:39.587Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "Admins",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "onUpdate": "CASCADE",
                "onDelete": "RESTRICT",
                "references": {
                    "model": "Users",
                    "key": "id"
                },
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Entregadors",
            "autorizado",
            {
                "type": Sequelize.BOOLEAN,
                "field": "autorizado",
                "defaultValue": false
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

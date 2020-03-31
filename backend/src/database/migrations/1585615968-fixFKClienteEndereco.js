'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "UserId" from table "Admins"
 * removeColumn "end_id" from table "Clientes"
 *
 **/

var info = {
    "revision": 1585615968,
    "name": "fixFKClienteEndereco",
    "created": "2020-03-31T00:52:48.201Z",
    "comment": ""
};

var migrationCommands = [
    {
        fn: "removeColumn",
        params: ["Clientes", "end_id"]
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

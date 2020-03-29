'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "autorizado" to table "Entregadors"
 *
 **/

var info = {
    "revision": 3,
    "name": "addautorizadotoentregador",
    "created": "2020-03-29T01:23:24.287Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Entregadors",
        "autorizado",
        {
            "type": Sequelize.BOOLEAN,
            "field": "autorizado"
        }
    ]
}];

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

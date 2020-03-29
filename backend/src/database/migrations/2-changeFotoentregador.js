'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "foto" from table "Entregadors"
 * addColumn "rg_frente" to table "Entregadors"
 * addColumn "rg_tras" to table "Entregadors"
 *
 **/

var info = {
    "revision": 2,
    "name": "changeFotoentregador",
    "created": "2020-03-29T01:21:01.903Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["Entregadors", "foto"]
    },
    {
        fn: "addColumn",
        params: [
            "Entregadors",
            "rg_frente",
            {
                "type": Sequelize.BLOB,
                "field": "rg_frente"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Entregadors",
            "rg_tras",
            {
                "type": Sequelize.BLOB,
                "field": "rg_tras"
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

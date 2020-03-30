'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "UserId" from table "Admins"
 * addColumn "userRefused" to table "Admins"
 * addColumn "userApproved" to table "Admins"
 * addColumn "AdminId" to table "Users"
 *
 **/

var info = {
    "revision": 1585520703,
    "name": "undoLastFixMerda",
    "created": "2020-03-29T22:25:03.674Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["Admins", "UserId"]
    },
    {
        fn: "addColumn",
        params: [
            "Admins",
            "userRefused",
            {
                "type": Sequelize.INTEGER,
                "field": "userRefused",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Admins",
            "userApproved",
            {
                "type": Sequelize.INTEGER,
                "field": "userApproved",
                "allowNull": true
            }
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

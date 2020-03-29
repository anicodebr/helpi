'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Enderecos", deps: []
 * createTable "Entregadors", deps: []
 * createTable "Feedbacks", deps: []
 * createTable "Clientes", deps: [Enderecos]
 * createTable "Pedidos", deps: [Enderecos, Feedbacks, Entregadors, Clientes]
 * createTable "Users", deps: [Entregadors, Clientes, Feedbacks]
 *
 **/

var info = {
    "revision": 1,
    "name": "InitialMigration",
    "created": "2020-03-29T02:09:54.226Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Enderecos",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "endereco": {
                    "type": Sequelize.STRING,
                    "field": "endereco"
                },
                "numero": {
                    "type": Sequelize.INTEGER,
                    "field": "numero"
                },
                "cep": {
                    "type": Sequelize.STRING,
                    "field": "cep"
                },
                "referencia": {
                    "type": Sequelize.STRING,
                    "field": "referencia"
                },
                "complemento": {
                    "type": Sequelize.STRING,
                    "field": "complemento"
                },
                "uf": {
                    "type": Sequelize.STRING,
                    "field": "uf"
                },
                "bairro": {
                    "type": Sequelize.STRING,
                    "field": "bairro"
                },
                "cidade": {
                    "type": Sequelize.STRING,
                    "field": "cidade"
                },
                "pais": {
                    "type": Sequelize.STRING,
                    "field": "pais"
                },
                "ativo": {
                    "type": Sequelize.BOOLEAN,
                    "field": "ativo"
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
        fn: "createTable",
        params: [
            "Entregadors",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "autorizado": {
                    "type": Sequelize.BOOLEAN,
                    "field": "autorizado"
                },
                "rg_frente": {
                    "type": Sequelize.BLOB,
                    "field": "rg_frente"
                },
                "rg_tras": {
                    "type": Sequelize.BLOB,
                    "field": "rg_tras"
                },
                "descricao": {
                    "type": Sequelize.TEXT,
                    "field": "descricao"
                },
                "raio": {
                    "type": Sequelize.FLOAT,
                    "field": "raio"
                },
                "itemlimit": {
                    "type": Sequelize.INTEGER,
                    "field": "itemlimit"
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
        fn: "createTable",
        params: [
            "Feedbacks",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "text": {
                    "type": Sequelize.TEXT,
                    "field": "text"
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
        fn: "createTable",
        params: [
            "Clientes",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "end_id": {
                    "type": Sequelize.INTEGER,
                    "field": "end_id"
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
                },
                "EnderecoId": {
                    "type": Sequelize.INTEGER,
                    "field": "EnderecoId",
                    "onUpdate": "CASCADE",
                    "onDelete": "RESTRICT",
                    "references": {
                        "model": "Enderecos",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Pedidos",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "itens": {
                    "type": Sequelize.JSON,
                    "field": "itens",
                    "allowNull": true
                },
                "data_abertura": {
                    "type": Sequelize.DATE,
                    "field": "data_abertura"
                },
                "views": {
                    "type": Sequelize.INTEGER,
                    "field": "views"
                },
                "status": {
                    "type": Sequelize.INTEGER,
                    "field": "status"
                },
                "rating_c": {
                    "type": Sequelize.INTEGER,
                    "field": "rating_c"
                },
                "rating_e": {
                    "type": Sequelize.INTEGER,
                    "field": "rating_e"
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
                },
                "EnderecoId": {
                    "type": Sequelize.INTEGER,
                    "field": "EnderecoId",
                    "onUpdate": "CASCADE",
                    "onDelete": "RESTRICT",
                    "references": {
                        "model": "Enderecos",
                        "key": "id"
                    },
                    "allowNull": true
                },
                "FeedbackId": {
                    "type": Sequelize.INTEGER,
                    "field": "FeedbackId",
                    "onUpdate": "CASCADE",
                    "onDelete": "RESTRICT",
                    "references": {
                        "model": "Feedbacks",
                        "key": "id"
                    },
                    "allowNull": true
                },
                "EntregadorId": {
                    "type": Sequelize.INTEGER,
                    "field": "EntregadorId",
                    "onUpdate": "CASCADE",
                    "onDelete": "RESTRICT",
                    "references": {
                        "model": "Entregadors",
                        "key": "id"
                    },
                    "allowNull": true
                },
                "ClienteId": {
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
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name",
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email",
                    "unique": true,
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING,
                    "field": "password",
                    "allowNull": false
                },
                "dt_nasc": {
                    "type": Sequelize.DATEONLY,
                    "field": "dt_nasc",
                    "allowNull": false
                },
                "cpf": {
                    "type": Sequelize.STRING,
                    "field": "cpf",
                    "allowNull": false
                },
                "tel": {
                    "type": Sequelize.STRING,
                    "field": "tel",
                    "allowNull": false
                },
                "foto": {
                    "type": Sequelize.BLOB,
                    "field": "foto",
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
                },
                "EntregadorId": {
                    "type": Sequelize.INTEGER,
                    "field": "EntregadorId",
                    "onUpdate": "CASCADE",
                    "onDelete": "RESTRICT",
                    "references": {
                        "model": "Entregadors",
                        "key": "id"
                    },
                    "allowNull": true
                },
                "ClienteId": {
                    "type": Sequelize.INTEGER,
                    "field": "ClienteId",
                    "onUpdate": "CASCADE",
                    "onDelete": "RESTRICT",
                    "references": {
                        "model": "Clientes",
                        "key": "id"
                    },
                    "allowNull": true
                },
                "FeedbackId": {
                    "type": Sequelize.INTEGER,
                    "field": "FeedbackId",
                    "onUpdate": "CASCADE",
                    "onDelete": "RESTRICT",
                    "references": {
                        "model": "Feedbacks",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
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

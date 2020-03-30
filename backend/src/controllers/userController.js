const { 
    User, Entregador, Cliente, Endereco, Acessos, Admin
} = require('../models');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = async (id) => {                                                                               // função para gerar token baseado no id do usuário que fez o login
    return jwt.sign({ id: id }, process.env.SECRET,{
        expiresIn: '1h'                                                                                             //Funcionamento com string especificando hora ou cada int um segundo. 
    });
}

const compareHash = async (pass, hash) => {                                                                         // Função para verificar as senhas usando o bcrypt
    return bcrypt.compareSync(pass, hash);
}

module.exports = {
    async auth(req,res){                                                                                            //Rota para login de usuário comum
        User.findOne({where:{email: req.body.email}})                                                               // Procura o usuário por email
        .then(async user => {
            if(!user)
                return res.status(404).json(null);                                                                  //Caso não ache, retorna 'not found'
            if(!(await compareHash(req.body.password, user.dataValues.password))) 
                return res.status(401).json(null);                                                                  //Caso ache mas a senha esteja inválida, retorna não autorizado
            let _user = user.get({plain: true})                                                                     //Pega dados do usuário 
            await Acessos.create({ UserId: _user.id })                                                              //Gera um contador de acesso no banco de dados
            return res.status(200).json({                                                                           // Caso tudo esteja ok, retorna "ok" e os dados a seguir. 
                id: user.dataValues.id,
                name: user.dataValues.name,
                token: await generateToken(user.dataValues.id)
            })
        }).catch(err => { console.error(err); return res.status(500).json(null); })                                 //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
    },
    async authAdmin(req,res){                                                                                       // Rota para login de Administradores
        User.findOne({where: {email: req.body.email}})                                                              // Procurando o usuário pelo email
        .then(async user => {
            if(!user)
                return res.status(404).json(null);                                                                  // Caso não exista, retorna 'not found'
            if(!(await compareHash(req.body.password, user.dataValues.password))) 
                return res.status(401).json(null);                                                                  // Caso a senha não bata, retorna não autorizado
            let _user = user.get({plain: true})
            await Acessos.create({ UserId: _user.id })                                                              // Gera contador de acesso no banco de dados
            Admin.findOne({where: { id: _user.AdminId }})                                                           // Verifica se o usuário tentando fazer login é admin mesmo
            .then(async admin => {
                if(!admin)
                    return res.status(401).json(null);                                                              //Caso não encontre, significa que não é admin e retorna não autorizado
                return res.status(200).json({                                                                       // Caso esteja tudo ok, retorna 'ok' com os dados a seguir
                    id: user.dataValues.id,
                    name: user.dataValues.name,
                    token: await generateToken(user.dataValues.id)
                })  
            }).catch(err => { console.error(err); return res.status(500).json(null); })                             //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
        }).catch(err => { console.error(err); return res.status(500).json(null); })                                 //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
    },
    async index(req,res){                                                                                           // Rota para retornar todos os usuários.
        User.findAll({ 
            attributes: [ 'id', 'name', 'email', "dt_nasc", "cpf", "tel", 'foto','createdAt'],                      //campos requeridos
            include: [Entregador, Cliente]                                                                          //Inclue as dependencias de tabela
        }) 
        .then(users => {
            return res.status(200).json(users);                                                                     //Caso ok, retorna 'ok'
        }).catch(err => { console.error(err); return res.status(500).json(null); })                                 //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
    },
    async show(req,res){                                                                                            // Rota para retornar todos os dados de um único usuário representado por <id>
        User.findByPk(req.params.id, { 
            attributes: [ 'id', 'name', 'email', "dt_nasc", "cpf", "tel", 'foto','createdAt'],                      //campos requeridos
            include: [Entregador, Cliente]                                                                          //Inclue as dependencias de tabela
        })
        .then(user => {
            if(!user)
                return res.status(404).json(null);                                                                  //Caso usuário não seja encontrado, retorna 'not found'
            return res.status(200).json(user);                                                                      //Caso ok, retorna 'ok'
        }).catch(err => { console.error(err); return res.status(500).json(null); })                                 //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
    },
    async storeAdmin(req,res){                                                                                      // Rota para Criação de Administradores
        let password = await bcrypt.hash(req.body.password,10);                                                     // Criptografa a senha
        Admin.create().then(admin => {                                                                              //Cria um registro novo de admin
            let _admin = admin.get({plain: true});                                                                  //pega os dados de admin
            User.findOrCreate({where: {email: req.body.email}, defaults: {
                password: password, name: req.body.name, AdminId: _admin.id 
            }}).then(([user, created]) => {                                                                         // Cria um novo usuário administrador setando o AdminId ao novo registro de Admin criado acima
                if(created){                                                                                        // Caso o usuário não exista, ele foi criado com sucesso!
                    return res.status(200).json(null);                                                              //Retorna 'ok'
                }
                if(user)                                                                                            // Caso o usuário já exista, consequentemente não foi criado um novo:
                    return res.status(409).json(null);                                                              //Retorna não autorizado
            }).catch(err => { console.error(err); res.status(500).json(null); })                                    //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
        }).catch(err => { console.error(err); res.status(500).json(null); })                                        //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
    },
    async store(req,res){
        let password = await bcrypt.hash(req.body.password,10);                                                     // Criptografa a senha
        User.findOrCreate({where: {email: req.body.email}, defaults: {
            password: password, name: req.body.name, dt_nasc: new Date(req.body.dt_nasc), 
            cpf: req.body.cpf, tel: req.body.tel, foto: req.body.foto                                               // Cria um novo usuário caso ele não exista
        }})
        .then(([user, created]) => {
            if(created){                                                                                            // Se o usuário foi criado
                let _user = user.get({plain: true})                                                                 // pega os dados do usuário
                if(req.body.cliente){                                                                               // Caso o parametro 'cliente' completamente ficticio do front end que só virá com 'true' ou 
                    Endereco.create({                                                                               // 'false' seja enviado como true, então será criado um novo cliente
                        endereco: req.body.endereco, numero: req.body.numero, cep: req.body.cep,
                        referencia: req.body.referencia, complemento: req.body.complemento,
                        uf: req.body.uf, bairro: req.body.bairro, cidade: req.body.cidade, pais: req.body.pais
                    }).then(async (endereco) => {                                                                   //Registra o endereço do cliente
                        let _endereco = endereco.get({plain: true});                                                //pega os dados do endereço
                        let _cliente = await Cliente.create({ EnderecoId: _endereco.id});                           //Seta no cliente o id do endereço
                        User.findOne({where: {id: _user.id}}, {attributes: ['ClienteId']})                          //procura o usuário criado anteriormente
                        .then(async () => {                                               
                            user.ClienteId = _cliente.dataValues.id;                                                //adiciona o cliente ao usuário
                            await user.save().then(() => {                                                          //salva o id adicionado acima e caso seja positivo
                                return res.status(200).json(null)                                                   //retorna 'ok'
                            }).catch(err => { console.error(err); return res.status(500).json(null); })             //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
                        }).catch(err => { console.error(err); return res.status(500).json(null); })                 //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
                    }).catch(err => { console.error(err); return res.status(500).json(null); })                     //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
                }else{
                    Entregador.create({
                        rg_frente: req.body.rg_frente, rg_tras: req.body.rg_tras, descricao: req.body.descricao
                    }).then(async (entregador) => {                                                                 // Registra o usuário como entregador
                        let _entregador = entregador.get({plain: true});                                            //seta dados do entregador
                        User.findOne({where: {id: _user.id}}, {attributes: ['EntregadorId']})                       //procura o usuário criado anteriormente
                        .then(async () => {
                            user.EntregadorId = _entregador.id;                                                     //adicona o entregador ao usuário
                            await user.save().then(() => {                                                          //salva o id acima e caso seja positivo
                                return res.status(200).json(null)                                                   //retorna 'ok'
                            }).catch(err => { console.error(err); return res.status(500).json(null); })             //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
                        }).catch(err => { console.error(err); return res.status(500).json(null); })                 //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
                    }).catch(err => { console.error(err); return res.status(500).json(null); })                     //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
                }
            }else{
                return res.status(409).json(null)                                                                   // Retorna para o front 'conflito' pois já existe usuário  
            }
        }).catch(err => { console.error(err); return res.status(500).json(null); })                                 //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
    },
    async update(req,res){                                                                                          // Rota para update no usuário dono de respectivo <id>, apenas atualiza o que for enviado. Ainda não se encontra atualizado mas deve ser feito em base ao código do destroy() de verificar existencia e autorizar mudanças.
        User.findOne({where: {id: req.params.id}}, { attributes: ['name', 'email', 'password', 'dt_nasc', 'cpf', 'tel']})
        .then(async user => {
            user.name       = req.body.name                             || user.name;
            user.email      = req.body.email                            || user.email;
            user.dt_nasc    = req.body.dt_nasc                          || user.dt_nasc;
            user.cpf        = req.body.cpf                              || user.cpf;
            user.tel        = req.body.tel                              || user.tel;
            user.password   = req.body.password? await bcrypt.hash(req.body.password,10):user.password
            await user.save().then(user => user?
                res.status(200).json(null):
                res.status(401).json(null))
        })
    },
    async destroy(req,res){                                                                                         // Rota para destruir todos os dados relacionados a determinado usuário
        let del = false;
        User.findByPk(req.params.id)                                                                                //Pega o usuário pelo <id> vindo como parametro
        .then(async user => {
            let _user = user.get({plain: true});                                                                    //pega os dados dele pq a gnt n é burro e tu já ver
            await user.destroy();                                                                                   //MATO O USUÁRIO MANO MEU DEUS SOCORRO
            if(_user.ClienteId){
                del = await Cliente.findByPk(_user.ClienteId)                                                                   //caso seja cliente, procura o endereço pra diminuir espaço no banco, foda-se
                .then(async cliente => {
                    cliente.destroy();                                                                              //MATOU O CLIENTE MANO MEU DEUS CADE O DINHEIRO VELHO
                    let _cliente = cliente.get({plain: true})                                                       //pega dados do cliente
                    return del = await Endereco.findByPk(_cliente.EnderecoId)                                                          //Buscando endereco
                    .then(async endereco => {
                        await endereco.destroy()                                                                    //MATO O ENDERECO MANO MEU DEUS
                        return true;
                    }).catch(err => { console.error(err); return res.status(500).json(null); })                     //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
                }).catch(err => { console.error(err); return res.status(500).json(null); })                         //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
            }
            if(_user.EntregadorId){
                del = await Entregador.findByPk(_user.EntregadorId)                                                 //caso seja entregador, deleta ele e passa pra próxima
                .then(async entregador => {
                    await entregador.destroy()                                                                      //MATO O ENTREGADOR MANO MEU DEUS
                    return true;
                }).catch(err => { console.error(err); return res.status(500).json(null); })                         //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
            }
            if(_user.AdminId){
                del = await Admin.findByPk(_user.AdminId)                                                           // caso seja admin, deleta ele e passa pra saída da função
                .then(async admin => {
                    await admin.destroy()                                                                           //MATO O ADMIN MANO MEU DEUS
                    return true;
                }).catch(err => { console.error(err); return res.status(500).json(null); })                         //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
            }
            if(del)
                return res.status(200).json(null)                                                                   //retorna ok por que vc acabou de destruir todas as relações possíveis e existentes
        }).catch(err => { console.error(err); return res.status(500).json(null); })                                 //Catch para dar console no error e retornar um status de erro no servidor sem vazar dados
    },
}
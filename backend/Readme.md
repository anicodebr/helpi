# BackEnd
Esta pasta contém o backend, com a API e a comunicação que o aplicativo precisa.

## Estrutura
- `.env` Arquivo de ambiente usado na máquina de cada desenvolvedor
- `.gitignore` Arquivos que são ignorados pelo versionamento do GIT
- `package.json` Ambiente dos main packages usados no projeto
- `readme.md` Este arquivo :)
- `src\database\` - Arquivos de configuração do banco de dados
- `src\controllers\` - Controladores dos models que são chamados pelas rotas
- `src\middleware\` - Middleware, utils que ficam entre a banco e os controllers
- `src\models\` - Modelos do projeto, as entidades relacionais.
- `src\routes\` - Rotas da aplicação importadas pelo index
- `src\index.js` - Inicializador do servidor


## Alteração de Models para gerar migrations
Após alterar o model use o comando `yarn mkm nomeDaSuaMigration`  
Quando estiver gerada, use `yarn migrate`  
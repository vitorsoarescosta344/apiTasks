const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')
const PORT = process.env.PORT || 5000


class App {
    constructor() {
        this.express = express();
        this.consign = consign()
        .include('./config/passport')
        .then('./config/middlewares')
        .then('./api')
        .then('./config/routes')
        .into(app)

        app.db = db

        this.express.listen(PORT, () =>
            console.log(`Sua API REST está funcionando na porta ${PORT} `)
        );
    }


    consign(){
        
    }

}
module.exports = new App().app;
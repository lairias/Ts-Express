import express, {Application} from "express";
import UserRouter from "./routes/user.routes";
import cors from "cors";
class Server {
    private app: Application;
    private port: string;
    private apiRouter = {
        usuarios: "/api/usuarios",
        inicio: "/"
    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
    }
    Routes(){
        this.app.use(this.apiRouter.usuarios,UserRouter
        );
    }
    Listen(){
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        });
    }
    Middlewares(){
        // TODO: Implementar middlewares
        this.app.use(express.json());
    }


}

export default Server;
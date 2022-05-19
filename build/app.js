"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
class Server {
    constructor() {
        this.apiRouter = {
            usuarios: "/api/usuarios"
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
    }
    Routes() {
        this.app.use(this.apiRouter.usuarios, user_routes_1.default);
    }
    Listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        });
    }
}
exports.default = Server;

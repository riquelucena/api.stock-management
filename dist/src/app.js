"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DrugRoutes_1 = __importDefault(require("./routes/DrugRoutes"));
const database_1 = require("../database");
const app = (0, express_1.default)();
// Middleware para parsear o corpo das requisições como JSON
app.use(express_1.default.json());
// Configura as rotas
app.use('/api', DrugRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.pool.connect();
        console.log(`Server is running on port ${PORT}`);
        console.log('Connected to the database');
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
    }
}));
//# sourceMappingURL=app.js.map
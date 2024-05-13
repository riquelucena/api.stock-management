"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DrugController_1 = require("../controllers/DrugController");
const DrugCreateService_1 = require("../services/drug-services/DrugCreateService");
const DrugDeleteService_1 = require("../services/drug-services/DrugDeleteService");
const DrugGetAllService_1 = require("../services/drug-services/DrugGetAllService");
const DrugGetByIdService_1 = require("../services/drug-services/DrugGetByIdService");
const DrugUpdateService_1 = require("../services/drug-services/DrugUpdateService");
const DrugRepository_1 = require("../repositories/drug-repository/DrugRepository");
const router = express_1.default.Router();
const drugRepository = new DrugRepository_1.DrugRepository();
const drugCreateService = new DrugCreateService_1.DrugCreateService(drugRepository);
const drugDeleteService = new DrugDeleteService_1.DrugDeleteService(drugRepository);
const drugGetAllService = new DrugGetAllService_1.DrugGetAllService(drugRepository);
const drugGetByIdService = new DrugGetByIdService_1.DrugGetByIdService(drugRepository);
const drugUpdateService = new DrugUpdateService_1.DrugUpdateService(drugRepository);
const drugController = new DrugController_1.DrugController(drugCreateService, drugDeleteService, drugGetAllService, drugGetByIdService, drugUpdateService);
router.post('/drugs', drugController.createDrug.bind(drugController));
router.delete('/drugs/:id', drugController.deleteDrug.bind(drugController));
router.get('/drugs', drugController.getAllDrugs.bind(drugController));
router.get('/drugs/:id', drugController.getDrugById.bind(drugController));
router.put('/drugs/:id', drugController.updateDrug.bind(drugController));
exports.default = router;
//# sourceMappingURL=DrugRoutes.js.map
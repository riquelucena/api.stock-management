"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SupplierController_1 = require("../controllers/SupplierController");
const SupplierCreateService_1 = require("../services/supplier-services/SupplierCreateService");
const SupplierDeleteService_1 = require("../services/supplier-services/SupplierDeleteService");
const SupplierGetAllService_1 = require("../services/supplier-services/SupplierGetAllService");
const SupplierGetByIdService_1 = require("../services/supplier-services/SupplierGetByIdService");
const SupplierUpdateService_1 = require("../services/supplier-services/SupplierUpdateService");
const SupplierRepository_1 = require("../repositories/supplier-repository/SupplierRepository");
const router = express_1.default.Router();
const supplierRepository = new SupplierRepository_1.SupplierRepository();
const supplierCreateService = new SupplierCreateService_1.SupplierCreateService(supplierRepository);
const supplierDeleteService = new SupplierDeleteService_1.SupplierDeleteService(supplierRepository);
const supplierGetAllService = new SupplierGetAllService_1.SupplierGetAllService(supplierRepository);
const supplierGetByIdService = new SupplierGetByIdService_1.SupplierGetByIdService(supplierRepository);
const supplierUpdateService = new SupplierUpdateService_1.SupplierUpdateService(supplierRepository);
const supplierController = new SupplierController_1.SupplierController(supplierCreateService, supplierDeleteService, supplierGetAllService, supplierUpdateService, supplierGetByIdService);
router.post('/suppliers', supplierController.createSupplier.bind(supplierController));
router.delete('/suppliers/:id', supplierController.deleteSupplier.bind(supplierController));
router.get('/suppliers', supplierController.getAllSuppliers.bind(supplierController));
router.get('/suppliers/:id', supplierController.getSupplierById.bind(supplierController));
router.put('/suppliers/:id', supplierController.updateSupplier.bind(supplierController));
exports.default = router;
//# sourceMappingURL=SupplierRoutes.js.map
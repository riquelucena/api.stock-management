import express from 'express';
import { SupplierController } from '../controllers/SupplierController';
import { SupplierCreateService } from '../services/supplier-services/SupplierCreateService';
import { SupplierDeleteService } from '../services/supplier-services/SupplierDeleteService';
import { SupplierGetAllService } from '../services/supplier-services/SupplierGetAllService';
import { SupplierGetByIdService } from '../services/supplier-services/SupplierGetByIdService';
import { SupplierUpdateService } from '../services/supplier-services/SupplierUpdateService';
import { SupplierRepository } from '../repositories/supplier-repository/SupplierRepository';

const router = express.Router();
const supplierRepository = new SupplierRepository();
const supplierCreateService = new SupplierCreateService(supplierRepository);
const supplierDeleteService = new SupplierDeleteService(supplierRepository);
const supplierGetAllService = new SupplierGetAllService(supplierRepository);
const supplierGetByIdService = new SupplierGetByIdService(supplierRepository);
const supplierUpdateService = new SupplierUpdateService(supplierRepository);
const supplierController = new SupplierController(
    supplierCreateService,
    supplierDeleteService,
    supplierGetAllService,
    supplierUpdateService,
    supplierGetByIdService
);

router.post('/suppliers', supplierController.createSupplier.bind(supplierController));
router.delete('/suppliers/:id', supplierController.deleteSupplier.bind(supplierController));
router.get('/suppliers', supplierController.getAllSuppliers.bind(supplierController));
router.get('/suppliers/:id', supplierController.getSupplierById.bind(supplierController));
router.put('/suppliers/:id', supplierController.updateSupplier.bind(supplierController));

export default router;
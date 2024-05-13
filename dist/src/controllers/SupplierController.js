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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierController = void 0;
class SupplierController {
    constructor(supplierCreateService, supplierDeleteService, supplierGetAllService, supplierUpdateService, supplierGetByIdService) {
        this.supplierCreateService = supplierCreateService;
        this.supplierDeleteService = supplierDeleteService;
        this.supplierGetAllService = supplierGetAllService;
        this.supplierGetByIdService = supplierGetByIdService;
        this.supplierUpdateService = supplierUpdateService;
    }
    createSupplier(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const supplierData = req.body;
                const createdSupplier = yield this.supplierCreateService.create(supplierData);
                res.status(201).json(createdSupplier);
            }
            catch (error) {
                console.error('Error creating supplier:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    deleteSupplier(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const supplierId = parseInt(req.params.id);
                yield this.supplierDeleteService.delete(supplierId);
                res.sendStatus(204);
            }
            catch (error) {
                console.error('Error deleting supplier:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getAllSuppliers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const suppliers = yield this.supplierGetAllService.getAll();
                res.status(200).json(suppliers);
            }
            catch (error) {
                console.error('Error getting all suppliers:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getSupplierById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const supplierId = parseInt(req.params.id);
                const supplier = yield this.supplierGetByIdService.getById(supplierId);
                if (!supplier) {
                    res.status(404).json({ error: 'Supplier not found' });
                }
                else {
                    res.status(200).json(supplier);
                }
            }
            catch (error) {
                console.error('Error getting supplier by ID:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    updateSupplier(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const supplierId = parseInt(req.params.id);
                const updatedSupplierData = req.body;
                const updatedSupplier = yield this.supplierUpdateService.update(supplierId, updatedSupplierData);
                if (!updatedSupplier) {
                    res.status(404).json({ error: 'Supplier not found' });
                }
                else {
                    res.status(200).json(updatedSupplier);
                }
            }
            catch (error) {
                console.error('Error updating supplier:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.SupplierController = SupplierController;
//# sourceMappingURL=SupplierController.js.map
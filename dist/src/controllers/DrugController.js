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
exports.DrugController = void 0;
class DrugController {
    constructor(drugCreateService, drugDeleteService, drugGetAllService, drugGetByIdService, drugUpdateService) {
        this.drugCreateService = drugCreateService;
        this.drugDeleteService = drugDeleteService;
        this.drugGetAllService = drugGetAllService;
        this.drugGetByIdService = drugGetByIdService;
        this.drugUpdateService = drugUpdateService;
    }
    createDrug(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const drugData = req.body;
                const createdDrug = yield this.drugCreateService.create(drugData);
                res.status(201).json(createdDrug);
            }
            catch (error) {
                console.error('Error creating drug:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    deleteDrug(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const drugId = parseInt(req.params.id);
                yield this.drugDeleteService.delete(drugId);
                res.sendStatus(204);
            }
            catch (error) {
                console.error('Error deleting drug:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getAllDrugs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const drugs = yield this.drugGetAllService.getAll();
                res.status(200).json(drugs);
            }
            catch (error) {
                console.error('Error getting all drugs:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getDrugById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const drugId = parseInt(req.params.id);
                const drug = yield this.drugGetByIdService.getById(drugId);
                if (!drug) {
                    res.status(404).json({ error: 'Drug not found' });
                }
                else {
                    res.status(200).json(drug);
                }
            }
            catch (error) {
                console.error('Error getting drug by ID:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    updateDrug(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const drugId = parseInt(req.params.id);
                const updatedDrugData = req.body;
                const updatedDrug = yield this.drugUpdateService.update(drugId, updatedDrugData);
                if (!updatedDrug) {
                    res.status(404).json({ error: 'Drug not found' });
                }
                else {
                    res.status(200).json(updatedDrug);
                }
            }
            catch (error) {
                console.error('Error updating drug:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.DrugController = DrugController;
//# sourceMappingURL=DrugController.js.map
import express from 'express';
import { DrugController } from '../controllers/DrugController';
import { DrugCreateService } from '../services/drug-services/DrugCreateService';
import { DrugDeleteService } from '../services/drug-services/DrugDeleteService';
import { DrugGetAllService } from '../services/drug-services/DrugGetAllService';
import { DrugGetByIdService } from '../services/drug-services/DrugGetByIdService';
import { DrugUpdateService } from '../services/drug-services/DrugUpdateService';
import { DrugRepository } from '../repositories/drug-repository/DrugRepository';

const router = express.Router();
const drugRepository = new DrugRepository();
const drugCreateService = new DrugCreateService(drugRepository);
const drugDeleteService = new DrugDeleteService(drugRepository);
const drugGetAllService = new DrugGetAllService(drugRepository);
const drugGetByIdService = new DrugGetByIdService(drugRepository);
const drugUpdateService = new DrugUpdateService(drugRepository);
const drugController = new DrugController(
    drugCreateService,
    drugDeleteService,
    drugGetAllService,
    drugGetByIdService,
    drugUpdateService
);

router.post('/drugs', drugController.createDrug.bind(drugController));
router.delete('/drugs/:id', drugController.deleteDrug.bind(drugController));
router.get('/drugs', drugController.getAllDrugs.bind(drugController));
router.get('/drugs/:id', drugController.getDrugById.bind(drugController));
router.put('/drugs/:id', drugController.updateDrug.bind(drugController));

export default router;

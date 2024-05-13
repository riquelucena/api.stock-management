import { Request, Response } from 'express';
import { DrugModel } from '../models/drug-model/DrugModel';
import { IDrugCreateService } from '../interfacies/drug-interfacies/IDrugCreateService';
import { IDrugDeleteService } from '../interfacies/drug-interfacies/IDrugDeleteService';
import { IDrugGetAllService } from '../interfacies/drug-interfacies/IDrugGetAllService';
import { IDrugGetByIdService } from '../interfacies/drug-interfacies/IDrugGetByIdService';
import { IDrugUpdateService } from '../interfacies/drug-interfacies/IDrugUpdateService';

export class DrugController {
    private drugCreateService: IDrugCreateService;
    private drugDeleteService: IDrugDeleteService;
    private drugGetAllService: IDrugGetAllService;
    private drugGetByIdService: IDrugGetByIdService;
    private drugUpdateService: IDrugUpdateService;

    constructor(
        drugCreateService: IDrugCreateService,
        drugDeleteService: IDrugDeleteService,
        drugGetAllService: IDrugGetAllService,
        drugGetByIdService: IDrugGetByIdService,
        drugUpdateService: IDrugUpdateService
    ) {
        this.drugCreateService = drugCreateService;
        this.drugDeleteService = drugDeleteService;
        this.drugGetAllService = drugGetAllService;
        this.drugGetByIdService = drugGetByIdService;
        this.drugUpdateService = drugUpdateService;
    }

    async createDrug(req: Request, res: Response) {
        try {
            const drugData: DrugModel = req.body;
            const createdDrug = await this.drugCreateService.create(drugData);
            res.status(201).json(createdDrug);
        } catch (error) {
            console.error('Error creating drug:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteDrug(req: Request, res: Response) {
        try {
            const drugId: number = parseInt(req.params.id);
            await this.drugDeleteService.delete(drugId);
            res.sendStatus(204);
        } catch (error) {
            console.error('Error deleting drug:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllDrugs(req: Request, res: Response) {
        try {
            const drugs = await this.drugGetAllService.getAll();
            res.status(200).json(drugs);
        } catch (error) {
            console.error('Error getting all drugs:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getDrugById(req: Request, res: Response) {
        try {
            const drugId: number = parseInt(req.params.id);
            const drug = await this.drugGetByIdService.getById(drugId);
            if (!drug) {
                res.status(404).json({ error: 'Drug not found' });
            } else {
                res.status(200).json(drug);
            }
        } catch (error) {
            console.error('Error getting drug by ID:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateDrug(req: Request, res: Response) {
        try {
            const drugId: number = parseInt(req.params.id);
            const updatedDrugData: DrugModel = req.body;
            const updatedDrug = await this.drugUpdateService.update(drugId, updatedDrugData);
            if (!updatedDrug) {
                res.status(404).json({ error: 'Drug not found' });
            } else {
                res.status(200).json(updatedDrug);
            }
        } catch (error) {
            console.error('Error updating drug:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
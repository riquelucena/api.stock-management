import { Request, Response } from 'express';
import { SupplierModel } from '../models/supplier-model/SupplierModel';
import { ISupplierCreateService } from '../interfacies/supplier-interfacies/ISupplierCreateService';
import { ISupplierDeleteService } from '../interfacies/supplier-interfacies/ISupplierDeleteService';
import { ISupplierGetAllService } from '../interfacies/supplier-interfacies/ISupplierGetAllService';
import { ISupplierUpdateService } from '../interfacies/supplier-interfacies/ISupplierUpdateService';
import { ISupplierGetByIdService } from '../interfacies/supplier-interfacies/ISupplierGetByIdService';

export class SupplierController {
    private supplierCreateService: ISupplierCreateService;
    private supplierDeleteService: ISupplierDeleteService;
    private supplierGetAllService: ISupplierGetAllService;
    private supplierUpdateService: ISupplierUpdateService;
    private supplierGetByIdService: ISupplierGetByIdService;

    constructor(
        supplierCreateService: ISupplierCreateService,
        supplierDeleteService: ISupplierDeleteService,
        supplierGetAllService: ISupplierGetAllService,
        supplierUpdateService: ISupplierUpdateService,
        supplierGetByIdService: ISupplierGetByIdService
    ) {
        this.supplierCreateService = supplierCreateService;
        this.supplierDeleteService = supplierDeleteService;
        this.supplierGetAllService = supplierGetAllService;
        this.supplierGetByIdService = supplierGetByIdService;
        this.supplierUpdateService = supplierUpdateService;
    }

    async createSupplier(req: Request, res: Response) {
        try {
            const supplierData: SupplierModel = req.body;
            const createdSupplier = await this.supplierCreateService.create(supplierData);
            res.status(201).json(createdSupplier);
        } catch (error) {
            console.error('Error creating supplier:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteSupplier(req: Request, res: Response) {
        try {
            const supplierId: number = parseInt(req.params.id);
            await this.supplierDeleteService.delete(supplierId);
            res.sendStatus(204);
        } catch (error) {
            console.error('Error deleting supplier:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllSuppliers(req: Request, res: Response) {
        try {
            const suppliers = await this.supplierGetAllService.getAll();
            res.status(200).json(suppliers);
        } catch (error) {
            console.error('Error getting all suppliers:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getSupplierById(req: Request, res: Response) {
        try {
            const supplierId: number = parseInt(req.params.id);
            const supplier = await this.supplierGetByIdService.getById(supplierId);
            if (!supplier) {
                res.status(404).json({ error: 'Supplier not found' });
            } else {
                res.status(200).json(supplier);
            }
        } catch (error) {
            console.error('Error getting supplier by ID:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateSupplier(req: Request, res: Response) {
        try {
            const supplierId: number = parseInt(req.params.id);
            const updatedSupplierData: SupplierModel = req.body;
            const updatedSupplier = await this.supplierUpdateService.update(supplierId, updatedSupplierData);
            if (!updatedSupplier) {
                res.status(404).json({ error: 'Supplier not found' });
            } else {
                res.status(200).json(updatedSupplier);
            }
        } catch (error) {
            console.error('Error updating supplier:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
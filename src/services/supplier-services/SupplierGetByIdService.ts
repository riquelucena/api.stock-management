import { SupplierModel } from "../../models/supplier-model/SupplierModel";
import { ISupplierRepository } from "../../repositories/supplier-repository/ISupplierRepository";
import { ISupplierGetByIdService } from "../../interfacies/supplier-interfacies/ISupplierGetByIdService";

export class SupplierGetByIdService implements ISupplierGetByIdService {
    private supplierRepository: ISupplierRepository;

    constructor(supplierRepository: ISupplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    
    async getById(id: number): Promise<SupplierModel | undefined> {
        return await this.supplierRepository.getById(id);
    }
}
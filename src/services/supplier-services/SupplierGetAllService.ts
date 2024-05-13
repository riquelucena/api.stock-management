import { SupplierModel } from "../../models/supplier-model/SupplierModel";
import { ISupplierRepository } from "../../repositories/supplier-repository/ISupplierRepository";
import { ISupplierGetAllService } from "../../interfacies/supplier-interfacies/ISupplierGetAllService";

export class SupplierGetAllService implements ISupplierGetAllService {
    private supplierRepository: ISupplierRepository;

    constructor(supplierRepository: ISupplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    async getAll(): Promise<SupplierModel[]> {
        return await this.supplierRepository.getAll();
    }
}
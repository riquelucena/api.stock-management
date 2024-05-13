import { SupplierModel } from "../../models/supplier-model/SupplierModel";
import { ISupplierRepository } from "../../repositories/supplier-repository/ISupplierRepository";
import { ISupplierCreateService } from "../../interfacies/supplier-interfacies/ISupplierCreateService";

export class SupplierCreateService implements ISupplierCreateService {
    private supplierRepository: ISupplierRepository;

    constructor(supplierRepository: ISupplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    async create(supplier: SupplierModel): Promise<SupplierModel> {
        return await this.supplierRepository.create(supplier);
    }
}
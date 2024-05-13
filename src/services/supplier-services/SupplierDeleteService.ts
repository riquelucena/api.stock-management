import { ISupplierRepository } from "../../repositories/supplier-repository/ISupplierRepository";
import { ISupplierDeleteService } from "../../interfacies/supplier-interfacies/ISupplierDeleteService";

export class SupplierDeleteService implements ISupplierDeleteService {
    private supplierRepository: ISupplierRepository;

    constructor(supplierRepository: ISupplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    async delete(id: number): Promise<void> {
        return await this.supplierRepository.delete(id);
    }
}
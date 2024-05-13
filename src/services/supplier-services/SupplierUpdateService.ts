import { SupplierModel } from '../../models/supplier-model/SupplierModel';
import { ISupplierRepository } from '../../repositories/supplier-repository/ISupplierRepository';
import { ISupplierUpdateService } from '../../interfacies/supplier-interfacies/ISupplierUpdateService';

export class SupplierUpdateService implements ISupplierUpdateService {
    private supplierRepository: ISupplierRepository;

    constructor(supplierRepository: ISupplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    async update(id: number, updatedSupplier: SupplierModel): Promise<SupplierModel | undefined> {
        return await this.supplierRepository.update(id, updatedSupplier);
    }
}
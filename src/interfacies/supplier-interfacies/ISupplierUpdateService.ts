import { SupplierModel } from '../../models/supplier-model/SupplierModel';

export interface ISupplierUpdateService {
    update(id: number, updatedSupplier: SupplierModel): Promise<SupplierModel | undefined>;
}
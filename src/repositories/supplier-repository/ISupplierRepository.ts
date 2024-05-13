import { SupplierModel } from '../../models/supplier-model/SupplierModel';

export interface ISupplierRepository {
    create(supplier: SupplierModel): Promise<SupplierModel>;
    getAll(): Promise<SupplierModel[]>;
    getById(id: number): Promise<SupplierModel | undefined>;
    update(id: number, updatedSupplier: SupplierModel): Promise<SupplierModel | undefined>;
    delete(id: number): Promise<void>;
}
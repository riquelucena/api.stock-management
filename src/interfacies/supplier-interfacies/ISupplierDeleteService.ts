import { SupplierModel } from "../../models/supplier-model/SupplierModel";

export interface ISupplierDeleteService {
    delete(id: number): Promise<void>;
}
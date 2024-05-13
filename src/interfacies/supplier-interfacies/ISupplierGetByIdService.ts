import { SupplierModel } from "../../models/supplier-model/SupplierModel";

export interface ISupplierGetByIdService {
    getById(id: number): Promise<SupplierModel | undefined>;
}
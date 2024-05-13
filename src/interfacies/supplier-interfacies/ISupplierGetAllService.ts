import { SupplierModel } from "../../models/supplier-model/SupplierModel";

export interface ISupplierGetAllService {
    getAll(): Promise<SupplierModel[]>;
}
import { SupplierModel } from "../../models/supplier-model/SupplierModel";

export interface ISupplierCreateService {
    create(supplier: SupplierModel): Promise<SupplierModel>;
}
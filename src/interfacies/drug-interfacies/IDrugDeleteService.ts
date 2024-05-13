import { DrugModel } from "../../models/drug-model/DrugModel";

export interface IDrugDeleteService {
    delete(id: number): Promise<void>;
}
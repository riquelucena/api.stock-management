import { DrugModel } from "../../models/drug-model/DrugModel";

export interface IDrugUpdateService {
    update(id: number, updatedDrug: DrugModel): Promise<DrugModel | undefined>;
}
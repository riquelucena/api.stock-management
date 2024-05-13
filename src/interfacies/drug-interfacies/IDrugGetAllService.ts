import { DrugModel } from '../../models/drug-model/DrugModel';

export interface IDrugGetAllService {
    getAll(): Promise<DrugModel[]>;
}
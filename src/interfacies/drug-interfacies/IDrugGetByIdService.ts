import { DrugModel } from '../../models/drug-model/DrugModel';

export interface IDrugGetByIdService {
    getById(id: number): Promise<DrugModel | undefined>;
}
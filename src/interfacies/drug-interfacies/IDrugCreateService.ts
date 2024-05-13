import { DrugModel } from '../../models/drug-model/DrugModel';

export interface IDrugCreateService {
    create(drug: DrugModel): Promise<DrugModel>;
}
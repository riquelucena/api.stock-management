import { DrugModel } from '../../models/drug-model/DrugModel';

export interface IDrugRepository {
    create(drug: DrugModel): Promise<DrugModel>;
    getAll(): Promise<DrugModel[]>;
    getById(id: number): Promise<DrugModel | undefined>;
    update(id: number, updatedDrug: DrugModel): Promise<DrugModel | undefined>;
    delete(id: number): Promise<void>;
}

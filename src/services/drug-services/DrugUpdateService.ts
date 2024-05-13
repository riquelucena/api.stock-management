import { DrugModel } from '../../models/drug-model/DrugModel';
import { IDrugRepository } from '../../repositories/drug-repository/IDrugRepository';
import { IDrugUpdateService } from '../../interfacies/drug-interfacies/IDrugUpdateService';

export class DrugUpdateService implements IDrugUpdateService {
    private drugRepository: IDrugRepository;

    constructor(drugRepository: IDrugRepository) {
        this.drugRepository = drugRepository;
    }

    async update(id: number, updatedDrug: DrugModel): Promise<DrugModel | undefined> {
        return await this.drugRepository.update(id, updatedDrug);
    }
}
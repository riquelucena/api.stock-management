import { DrugModel } from '../../models/drug-model/DrugModel';
import { IDrugRepository } from '../../repositories/drug-repository/IDrugRepository';
import { IDrugCreateService } from '../../interfacies/drug-interfacies/IDrugCreateService'

export class DrugCreateService implements IDrugCreateService {
    private drugRepository: IDrugRepository;

    constructor(drugRepository: IDrugRepository) {
        this.drugRepository = drugRepository;
    }

    async create(drug: DrugModel): Promise<DrugModel> {
        return await this.drugRepository.create(drug);
    }
}

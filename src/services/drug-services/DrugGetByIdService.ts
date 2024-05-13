import { DrugModel } from '../../models/drug-model/DrugModel';
import { IDrugRepository } from '../../repositories/drug-repository/IDrugRepository';
import { IDrugGetByIdService } from '../../interfacies/drug-interfacies/IDrugGetByIdService';

export class DrugGetByIdService implements IDrugGetByIdService {
    private drugRepository: IDrugRepository;

    constructor(drugRepository: IDrugRepository) {
        this.drugRepository = drugRepository;
    }

    async getById(id: number): Promise<DrugModel | undefined> {
        return await this.drugRepository.getById(id);
    }
}
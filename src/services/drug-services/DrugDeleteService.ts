import { IDrugRepository } from '../../repositories/drug-repository/IDrugRepository';
import { IDrugDeleteService } from '../../interfacies/drug-interfacies/IDrugDeleteService'

export class DrugDeleteService implements IDrugDeleteService {
    private drugRepository: IDrugRepository;

    constructor(drugRepository: IDrugRepository) {
        this.drugRepository = drugRepository;
    }

    async delete(id: number): Promise<void> {
        return await this.drugRepository.delete(id);
    }
}

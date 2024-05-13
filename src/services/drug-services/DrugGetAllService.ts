import { DrugModel } from "../../models/drug-model/DrugModel";
import { IDrugRepository } from "../../repositories/drug-repository/IDrugRepository";
import { IDrugGetAllService } from "../../interfacies/drug-interfacies/IDrugGetAllService";

export class DrugGetAllService implements IDrugGetAllService {
    private drugRepository: IDrugRepository

    constructor(drugRepository: IDrugRepository) {
        this.drugRepository = drugRepository;
    }

    async getAll(): Promise<DrugModel[]> {
        return await this.drugRepository.getAll();
    }
}
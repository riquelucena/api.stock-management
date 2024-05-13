"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrugRepository = void 0;
const database_1 = require("../../../database");
class DrugRepository {
    create(drug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.pool.request()
                    .input('drugName', drug.drugName)
                    .input('inStock', drug.inStock)
                    .input('price', drug.price)
                    .input('expirationDate', drug.expirationDate)
                    .input('laboratory', drug.laboratory)
                    .query('INSERT INTO Drugs (drugName, inStock, price, expirationDate, laboratory) OUTPUT INSERTED.id, INSERTED.drugName, INSERTED.inStock, INSERTED.price, INSERTED.expirationDate, INSERTED.laboratory VALUES (@drugName, @inStock, @price, @expirationDate, @laboratory)');
                return result.recordset[0];
            }
            catch (error) {
                console.error('Error creating drug:', error);
                throw error;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.pool.request().query('SELECT * FROM Drugs');
                return result.recordset;
            }
            catch (error) {
                console.error('Error getting all drugs:', error);
                throw error;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.pool.request()
                    .input('id', id)
                    .query('SELECT * FROM Drugs WHERE id = @id');
                return result.recordset[0];
            }
            catch (error) {
                console.error('Error getting drug by ID:', error);
                throw error;
            }
        });
    }
    update(id, updatedDrug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.pool.request()
                    .input('id', id)
                    .input('drugName', updatedDrug.drugName)
                    .input('inStock', updatedDrug.inStock)
                    .input('price', updatedDrug.price)
                    .input('expirationDate', updatedDrug.expirationDate)
                    .input('laboratory', updatedDrug.laboratory)
                    .query('UPDATE Drugs SET drugName = @drugName, inStock = @inStock, price = @price, expirationDate = @expirationDate, laboratory = @laboratory WHERE id = @id');
                if (result.rowsAffected[0] > 0) {
                    return updatedDrug;
                }
                return undefined;
            }
            catch (error) {
                console.error('Error updating drug:', error);
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.pool.request()
                    .input('id', id)
                    .query('DELETE FROM Drugs WHERE id = @id');
            }
            catch (error) {
                console.error('Error deleting drug:', error);
                throw error;
            }
        });
    }
}
exports.DrugRepository = DrugRepository;
//# sourceMappingURL=DrugRepository.js.map
import { DrugModel } from '../../models/drug-model/DrugModel';
import { IDrugRepository } from './IDrugRepository';
import { pool } from '../../../database';

export class DrugRepository implements IDrugRepository {
    async create(drug: DrugModel): Promise<DrugModel> {
        try {
            const result = await pool.request()
                .input('drugName', drug.drugName)
                .input('inStock', drug.inStock)
                .input('price', drug.price)
                .input('expirationDate', drug.expirationDate)
                .input('laboratory', drug.laboratory)
                .query('INSERT INTO Drugs (drugName, inStock, price, expirationDate, laboratory) OUTPUT INSERTED.id, INSERTED.drugName, INSERTED.inStock, INSERTED.price, INSERTED.expirationDate, INSERTED.laboratory VALUES (@drugName, @inStock, @price, @expirationDate, @laboratory)');

            return result.recordset[0];
        } catch (error) {
            console.error('Error creating drug:', error);
            throw error;
        }
    }
    
    async getAll(): Promise<DrugModel[]> {
        try {
            const result = await pool.request().query('SELECT * FROM Drugs');
            return result.recordset;
        } catch (error) {
            console.error('Error getting all drugs:', error);
            throw error;
        }
    }

    async getById(id: number): Promise<DrugModel | undefined> {
        try {
            const result = await pool.request()
                .input('id', id)
                .query('SELECT * FROM Drugs WHERE id = @id');

            return result.recordset[0];
        } catch (error) {
            console.error('Error getting drug by ID:', error);
            throw error;
        }
    }

    async update(id: number, updatedDrug: DrugModel): Promise<DrugModel | undefined> {
        try {
            const result = await pool.request()
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
        } catch (error) {
            console.error('Error updating drug:', error);
            throw error;
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await pool.request()
                .input('id', id)
                .query('DELETE FROM Drugs WHERE id = @id');
        } catch (error) {
            console.error('Error deleting drug:', error);
            throw error;
        }
    }
}
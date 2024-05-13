import { SupplierModel } from "../../models/supplier-model/SupplierModel";
import { ISupplierRepository } from "./ISupplierRepository";
import { pool } from '../../../database';

export class SupplierRepository implements ISupplierRepository {
    async create(supplier: SupplierModel): Promise<SupplierModel> {
        const result = await pool.request()
            .input('supplierName', supplier.supplierName)
            .input('address', supplier.address)
            .input('UF', supplier.UF)
            .input('phoneNumber', supplier.phoneNumber)
            .input('email', supplier.email)
            .query('INSERT INTO Suppliers (supplierName, address, UF, phoneNumber, email) OUTPUT INSERTED.id, INSERTED.supplierName, INSERTED.address, INSERTED.UF, INSERTED.phoneNumber, INSERTED.email VALUES (@supplierName, @address, @UF, @phoneNumber, @email)');

        return result.recordset[0];
    }

    async getAll(): Promise<SupplierModel[]> {
        const result = await pool.request().query('SELECT * FROM Suppliers');
        return result.recordset;
    }

    async getById(id: number): Promise<SupplierModel | undefined> {
        const result = await pool.request()
        .input('id', id)
        .query('SELECT * FROM Suppliers WHERE id = @id');

        return result.recordset[0];
    }

    async update(id: number, updatedSupplier: SupplierModel): Promise<SupplierModel | undefined> {
        const result = await pool.request()
            .input('id', id)
            .input('supplierName', updatedSupplier.supplierName)
            .input('address', updatedSupplier.address)
            .input('UF', updatedSupplier.UF)
            .input('phoneNumber', updatedSupplier.phoneNumber)
            .input('email', updatedSupplier.email)
            .query('UPDATE Suppliers SET supplierName = @supplierName, address = @address, UF = @UF, phoneNumber = @phoneNumber, email = @email WHERE id = @id');

        if (result.rowsAffected[0] > 0) {
            return updatedSupplier;
        }
        return undefined;
    }

    async delete(id: number): Promise<void> {
        await pool.request()
            .input('id', id)
            .query('DELETE FROM Suppliers WHERE id = @id');
    }
}
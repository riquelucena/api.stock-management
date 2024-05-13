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
exports.SupplierRepository = void 0;
const database_1 = require("../../../database");
class SupplierRepository {
    create(supplier) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.request()
                .input('supplierName', supplier.supplierName)
                .input('address', supplier.address)
                .input('UF', supplier.UF)
                .input('phoneNumber', supplier.phoneNumber)
                .input('email', supplier.email)
                .query('INSERT INTO Suppliers (supplierName, address, UF, phoneNumber, email) OUTPUT INSERTED.id, INSERTED.supplierName, INSERTED.address, INSERTED.UF, INSERTED.phoneNumber, INSERTED.email VALUES (@supplierName, @address, @UF, @phoneNumber, @email)');
            return result.recordset[0];
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.request().query('SELECT * FROM Suppliers');
            return result.recordset;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.request()
                .input('id', id)
                .query('SELECT * FROM Suppliers WHERE id = @id');
            return result.recordset[0];
        });
    }
    update(id, updatedSupplier) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.request()
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
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.request()
                .input('id', id)
                .query('DELETE FROM Suppliers WHERE id = @id');
        });
    }
}
exports.SupplierRepository = SupplierRepository;
//# sourceMappingURL=SupplierRepository.js.map
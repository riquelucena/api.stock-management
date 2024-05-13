export class DrugModel {
    id: number = 0;
    drugName: string = '';
    inStock: number = 0;
    price: number = 0;
    expirationDate: Date = new Date();
    laboratory?: string;
}
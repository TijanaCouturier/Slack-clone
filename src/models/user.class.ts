export class User {
    firstName: string;
    lastName: string;
    message: string;
    date: number;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName: '';
        this.lastName = obj ? obj.lastName: '';
        this.message = obj ? obj.email: '';
        this.date = obj ? obj.birthDate: '';
       
    }
}
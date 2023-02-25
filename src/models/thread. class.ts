export class User {
    firstName: string;
    lastName: string;
    message: string;
    date: number;


    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName: '';
        this.lastName = obj ? obj.lastName: '';
        this.message = obj ? obj.messaage: '';
        this.date = obj ? obj.date: '';
 

       
    }

    public toJSON(){
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            messaage: this.message,
            date: this.date,
       

        }; 
    }
}
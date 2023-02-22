export class User {
    UserId: string; //id
    name: string;
    message: string;
   

    constructor(obj?: any) {
        this.UserId = obj ? obj.UserId: '';
        this.name = obj ? obj.name: '';
        this.message = obj ? obj.messaage: '';
    }

    public toJSON(){
        return {
            UserId: this.UserId,
            name: this.name,
            messaage: this.message,
        }; 
    }
}
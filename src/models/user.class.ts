export class User {
    userId: string; //id
    name: string;
    email: string;
    message: string;
    category: string;
    
    
    constructor(obj?: any) {
        this.userId = obj ? obj.UserId: '';
        this.name = obj ? obj.name: '';
        this.email = obj ? obj.email: '';
        this.message = obj ? obj.messaage: '';
        this.category = obj ? obj.string: 'users';
    }
    
    public toJSON(){
        return {
            userId: this.userId,
            name: this.name,
            email: this.email,
            message: this.message,
            category: this.category
        }; 
    }
}
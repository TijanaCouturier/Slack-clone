export class User {
    toLowerCase(): string {
      throw new Error('Method not implemented.');
    }
    userId: string; //id
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    category: string;
    
    
    constructor(obj?: any) {
        this.userId = obj ? obj.UserId: '';
        this.firstName = obj ? obj.name: '';
        this.lastName = obj ? obj.name: '';
        this.email = obj ? obj.email: '';
        this.message = obj ? obj.messaage: '';
        this.category = obj ? obj.string: 'users';
    }
    
    public toJSON(){
        return {
            userId: this.userId,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            message: this.message,
            category: this.category
        }; 
    }
}
export class User {
    firstName: string;
    lastName: string;
    message: string;
    date: number;
    description: string;
    channelName: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName: '';
        this.lastName = obj ? obj.lastName: '';
        this.message = obj ? obj.messaage: '';
        this.date = obj ? obj.date: '';
        this.description = obj ? obj.description: '';
        this.channelName = obj ? obj.channelName: '';

       
    }

    public toJSON(){
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            messaage: this.message,
            date: this.date,
            description: this.description,
            channelName: this.channelName

        }; 
    }
}
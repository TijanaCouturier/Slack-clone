export class Channel {
    users: string[];
    channelName: string;
    channelId: string;
    description: string;
    date: number;
    category: string;
  //  creator: string;

    constructor(obj?: any) {
        this.users = obj ? obj.users : [];
        this.channelId= obj ? obj.channelId: '';
        this.channelName = obj ? obj.channelName: '';
        this.description = obj ? obj.description: '';
        this.date = obj ? obj.date : new Date();
        this.category = obj ? obj.category: 'channel';
      //  this.creator = obj ? obj.creator: '';
    }

    public toJSON(){
        return {
            users: this.users,
            channelId: this.channelId,
            channelName: this.channelName,
            description: this.description,
            date: this.date,
            category: this.category,
          //  creator: this.creator
        }; 
    }
}
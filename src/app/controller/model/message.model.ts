import {EtatMessage} from './etat-message.model';
import {MessageDetail} from './message-detail.model';
import {User} from './user.model';

export class Message {
    public id: number;
    public objet: string;
    public corps: string;
    public dateEnvoi: Date;
    public source: User = new User();
    public etatMessage: EtatMessage = new EtatMessage();
    public messageDetails = new Array<MessageDetail>();


}

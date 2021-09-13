import {EtatMessage} from './etat-message.model';
import {Message} from './message.model';
import {User} from './user.model';

export class MessageDetail {
    public id: number;
    public dateLecture: Date;
    public destinataire: User = new User();
    public etatMessage: EtatMessage = new EtatMessage();
    public message: Message;
    public loginDestinataire: String;
}

import {User} from "../../model/user.model";

export class SignupRequest extends User{
    public registerAs: string;
    public agenceCode: string;
}

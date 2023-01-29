import { IDataForm } from "./IDataForm";

export class UserData {
    public Title : string;
    public Phane : string;
    public email : string;
    public password : string;

    constructor(item : IDataForm) {
        this.Title  = item.Title;
        this.Phane  = item.Phane;
        this.email  = item.email;
        this.password  = item.password;
    }
}


export class alert{
    "status" : boolean;
    "class": string;
    "message": string;
    constructor(){
        this.status=false;
        this.message = "";
        this.class = "";
    }
    public setAlert(message: string, className: string){
        this.message = message;
        this.class = className;
        this.status = true;
    }
    public close(){
        this.status = false;
    }

}
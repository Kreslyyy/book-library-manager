export class Book{
    private static lastId:number = 0;
    public id:number;
    public isRead:boolean = false;

    constructor(public title:string, public author:string){
        this.id = ++Book.lastId;
    }
}
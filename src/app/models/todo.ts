import {TodoStatus} from './todoStatusEnum';

export class Todo{
    public title : string;
    public status : TodoStatus

    /**
     *
     */
    constructor(private pTitle: string) {
        this.title = pTitle;
        this.status = TodoStatus.New;
    }

    isDone():boolean{
        return this.status === TodoStatus.Done;
    }
}
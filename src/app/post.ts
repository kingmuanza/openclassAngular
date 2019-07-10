export class Post {

    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    constructor() {
        this.createdAt = new Date();
        this.loveIts = 0 ;
    }

    onLoveIt() {
        this.loveIts++;
    }

    onDontLoveIt() {
        this.loveIts--;
    }

}

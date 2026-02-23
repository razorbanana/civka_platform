interface GameInterface {
    getId(): string,
    getResult(): Record<string, number>
}

export default class Game implements GameInterface{

    private id
    private result

    constructor(id: string, result: Record<string, number> = {}){
        this.id = id
        this.result = result
    }

    getId(){
        return this.id
    }

    getResult(){
        return this.result
    }
}
interface PlayerInterface {
    getName(): string
}

export default class Player implements PlayerInterface{
    private name
    constructor(name: string = ""){
        this.name = name
    }

    getName(){
        return this.name
    }
}
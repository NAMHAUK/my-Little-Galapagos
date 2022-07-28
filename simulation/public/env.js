class env{
    constructor(){
        this.hot = 1
        this.cold = 1
        this.foodSpawn = 10
        this.isDamaged = 0
    }
}

export class Grass extends env{
    constructor(){
        super()
        this.textureIdx = 0
    }
}

export class Jungle extends env{
    constructor(){
        super()
        this.foodSpawn = 20
        this.textureIdx = 1
        this.hot = 3
        this.cold = 3
    }
}

export class Desert extends env{
    constructor(){
        super()
        this.textureIdx = 2
        this.hot = 5
        this.foodSpawn = 3
    }
}

export class Glacier extends env{
    constructor(){
        super()
        this.textureIdx = 3
        this.cold = 5
        this.foodSpawn = 3
    }
}







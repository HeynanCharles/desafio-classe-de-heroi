class Hero{
    constructor (name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    atacar(){
        let ataque

        switch(this.type){
            case "mago":
                ataque = "magia"
                break
            
            case "guerreiro":
                ataque = "espada"
                break

            case "monge":
                ataque = "artes marciais"
                break

            case "ninja":
                ataque = "shuriken"
                break

            default:
                ataque = "um ataque desconhecido"
        }

        console.log(`O ${this.type} atacou usando ${ataque}`)
    }
}

new Hero("Mancy", 22, "ninja").atacar()
class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    
    isLucky() {
      return  Math.random() < this.luck
    }
    attackPokemon(defenseur) {
        if (this.isLucky()) {
            let dmg = this.attack - defenseur.defense
            defenseur.hp -= dmg
            console.log(dmg + " degats ont ete infliges")
            console.log("Il reste " + defenseur.hp + " hp a " + defenseur )
        }else{
            console.log("L'attaque est echoue")
        }
    }
}

let moustillon = new Pokemon("moustillon", 50, 25, 120, 0.7)
let poussifeu = new Pokemon("poussifeu", 60, 20, 120, 1)

while(moustillon.hp > 0 && poussifeu.hp > 0) {
    moustillon.attackPokemon(poussifeu)

    if(poussifeu.hp <= 0){
        console.log("poussifeu est KO")
        break;
    }
    poussifeu.attackPokemon(moustillon)
    if(moustillon.hp <= 0){
        console.log("moustillon est KO")
        break;
    }
}
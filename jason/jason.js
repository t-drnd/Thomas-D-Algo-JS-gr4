let survivants = []
let survivantsMorts = []
let prenoms = ["Albert", "Alex", "Alexis", "Alice", "Arthur", "Charles", "Charlot", "Chris", "Christophe", "Clemence", "Clement", "Clide", "Ellie", "Elza", "Emmy", "Eric", "Eva", "Iris", "Jade", "Jessi", "John", "Jonathan", "Julia", "Julie", "June", "Kevin", "Laura", "Leo", "Leon", "Marcus", "Mark", "Max", "Mickael", "Mike", "Olivia", "Rachel", "Rick", "Robin", "Rose", "Sophie", "Stephane", "Ted", "Tess", "Thomas", "Tom", "Tony", "Victor", "Victoria"]
let caracteristiques = [
    nerd = {
        probaMort : 0.7, 
        probaAtt : 0.3,
        probaMortAtt : 0.5,
    },
    sportif = {
        probaMort : 0.4, 
        probaAtt : 0.8,
        probaMortAtt : 0.3,
    },
    blonde = {
        probaMort : 0.9, 
        probaAtt : 0.1,
        probaMortAtt : 1,
    },
    lumiere = {
        probaMort : 0.5, 
        probaAtt : 0.5,
        probaMortAtt : 0.5,
    },
    blender = {
        probaMort : 1, 
        probaAtt : 0,
        probaMortAtt : 1,
    },
    
]
class Survivant{
    constructor(prenom, caracteristiques, pv){
        this.prenom = prenom
        this.caracteristiques = caracteristiques
        this.pv = pv
    }
}

class Tueur{
    constructor(prenom, pv){
        this.prenom = prenom
        this.pv = pv
    }
    attack(cible){
        if(Math.random()< 0.5){
            console.log("Jason attaque "+ cible.prenom)
            if(Math.random()> cible.caracteristiques.probaMort){
                console.log("Jason a tue "+ cible.prenom)
                cible.pv = 0 
            }else{
                if(Math.random() < cible.caracteristiques.probaMortAtt){
                    console.log("Jason a perdu 15 pv mais il a tue "+ cible.prenom)
                    cible.pv = 0;
                    jason.pv -= 15
                }
            }
        }else{
            console.log("Jason rate son attaque sur "+ cible.prenom)
            if(Math.random() < cible.caracteristiques.probaAtt){
                console.log(cible.prenom +" a esquive l'attaque de Jason et lui inflige 10 points de degats")
                jason.pv -= 10
            }
        }
    }
}

let jason = new Tueur("jason", 100)

for(i = 0; i < 5; i++){
    let survivant = prenoms [Math.floor(Math.random() * prenoms.length)];
    let nombresAleatoiresCarac = Math.floor(Math.random() * caracteristiques.length);
    let caracAleatoire = caracteristiques[nombresAleatoiresCarac]
    let pers = new Survivant(survivant, caracAleatoire, 100)
    survivants.push(pers)
    caracteristiques.splice(nombresAleatoiresCarac, 1)
}

while(jason.pv > 0 && survivants.length > 0){
    let nombresAleatoiresSurvivants = Math.floor(Math.random() * survivants.length);
    let survivantAleatoire = survivants[nombresAleatoiresSurvivants]
    jason.attack(survivantAleatoire)
    if(survivantAleatoire.pv == 0){
        survivantsMorts.push(survivantAleatoire.prenom)
        survivants.splice(nombresAleatoiresSurvivants, 1)
    }
    if(jason.pv <= 0 && survivantsMorts.length == 5){
        console.log("Tout le monde est mort")
        break
    }
    if(survivants.length == 0){
        console.log("Jason a tue tous les survivants")
        break
    }
    if(jason.pv <= 0){
        console.log("Les survivants ont tue Jason")
        if(survivantsMorts.length == 0){
            console.log("Tous les survivants sont en vie")
            break
        }else{
            console.log("mais repose en paix: "+ survivantsMorts.join(", "))
            break
        }
    }
}
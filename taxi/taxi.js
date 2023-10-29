const musique = ["Anissa-Wejdene", "copine-PLK", "Voldemort-Freeze Corleone", "Hyrule-Luv Resval", "Daylight-David Kushner"]

class Personnage {
    constructor(name, santementale) {
        this.name = name
        this.santementale = santementale
    }
}
class Trajet {
    constructor(radio, feuxrouges, changementtaxi) {
        this.radio = radio
        this.feuxrouges = feuxrouges
        this.changementtaxi = changementtaxi
    }
}

const john = new Personnage ("John", 10)
const trajet = new Trajet (null, 30, 0)


while (john.santementale > 0 && trajet.feuxrouges > 0 ){
    trajet.radio = musique [Math.floor(Math.random() * musique.length)];
    if(trajet.radio == "Anissa-Wejdene") {
        john.santementale -- ; trajet.feuxrouges -- ; trajet.changementtaxi ++ ;
        console.log("John va mal et perd 1 de sante mentale et change de taxi")
    }
    else{
        trajet.feuxrouges -- ;
        console.log("Tout va bien, John continue son trajet")
    }
    if(john.santementale == 0){
       console.log("John explose dans le taxi")
       break
    }
    if(trajet.feuxrouges == 0){
        console.log("John est bien arrive")
        break
    }
}
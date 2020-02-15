//HP-Zufallsgenerator


//Startwert initialisieren:
let jetzt=new Date();
var zufzahl=jetzt.getMilliseconds()/1000; //globale Variable

//console.log(zufzahl);

//neue Zufallszahl aus der alten:
function HPrandom()
{
    let help=Math.pow(zufzahl+Math.PI,8);
    zufzahl=help-Math.floor(help); //Stellen vor dem Komma streichen
    return zufzahl;
}

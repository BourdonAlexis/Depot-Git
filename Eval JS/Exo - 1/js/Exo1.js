var jeune = 0;
var moyen = 0;
var vieux = 0;

function saisie(){

    do
    {  
        //fenêtre demande age
        var age = window.prompt("saisir un age"); 
        //compteur age en dessous 20 ans
        if (age<=20){
            jeune++;
        }
        //compteur age entre 20 et 40 ans
        else if (age>20 && age<=40){
            moyen++;
        }
        //compteur age au dessus 40 ans
        else if (age>40 && age<=99){
            vieux++;
        }
        //ajoute 1 si age + ou =100ans et casse la boucle
        else{
            vieux++;
            break;
        }  
    }while(age) 
}
//affiche les résultat (relié au bouton résultat)
function resultat(){
    console.log(jeune + " personnes en dessous de 20 ans ");
    console.log(moyen + " personnes entre 20 et 40 ans ");
    console.log(vieux + " personne au dessus de 40 ans ");
    document.write("personnes en dessous de 20 ans : "+jeune+" / ");
    document.write("personnes entre 20 et 40 ans : "+moyen+" / ");
    document.write("personne au dessus de 40 ans : "+vieux);
}
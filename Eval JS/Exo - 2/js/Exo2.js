//saisie de n

function ChiffreAMultiplier(){
    n = prompt("saisir le chiffre que vous souhaitez multiplier")
}

//saisie de x

function Quelmultiple(){
    x = prompt("saisir la valeur par laquel vous souhaitez multiplier "+n)
}

//affiche le resultat de N multiple de X

function resultat(){
    for (i=1; i<=x; i++)
    {
        resultat =  n* i;

        console.log(n+" * "+i+" = "+resultat);
    }
}
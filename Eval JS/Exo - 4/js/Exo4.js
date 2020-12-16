//Prix unitaire
var PU;

//Quantité commandé 
var QTECOM;

//prix à afficher
var PAP;

//remise 
var REM;

//port 
var PORT;

//fonction du prix unitaire ----------------------------------------------
function prixUnitaire()
{
    PU=prompt("Saisir le prix unitaire");
}
//fonction de la quantitée ---------------------------------------------------
function Quantité()
{
    QTECOM=prompt("Saisir la quantitée voulue");
}
//fonction du prix à payer ---------------------------------------------------------
function prixApayer() 
{
    TOT=PU*QTECOM;
    //Réduc 5% entre 100 et 200€
    if (TOT>=100 && TOT<=200)
    {
        
        REM = TOT*0.95;
        PORT=REM*0.02;
        PORTMAX = Math.max(PORT, 6);
        PAP=REM+PORTMAX;
        SOUSTOT=TOT-REM;
        console.log(TOT+"€ donc remise 5% (-"+(Math.round((SOUSTOT) * 100) / 100)+"€) soit "+(Math.round((REM) * 100) / 100)+" et frais port 2% soit "+(Math.round((PORT) * 100) / 100)+" € mini 6 €; à payer : "+(Math.round((REM) * 100) / 100)+"+"+(Math.round((PORTMAX) * 100) / 100)+" = "+(Math.round((PAP) * 100) / 100)+" €");
    }
    //reduc au dessus 200€ 10%
    else if (TOT>200&&TOT<500)
    {
   
        REM=TOT*0.90;
        PORT=REM*0.02;
        PORTMAX = Math.max(PORT, 6);
        PAP=REM+PORTMAX;
        SOUSTOT=TOT-REM;
        console.log("remise 10% ("+(Math.round((SOUSTOT) * 100) / 100)+"€) soit "+(Math.round((REM) * 100) / 100)+"€ et frais port 2% soit "+(Math.round((PORT) * 100) / 100)+" € mini 6 €; à payer : "+(Math.round((REM) * 100) / 100)+"+"+(Math.round((PORTMAX) * 100) / 100)+" = "+(Math.round((PAP) * 100) / 100)+" €");
        
      
    }
      //reduc 10% et PORT gratuit au dessus de 500€
    else if (TOT>=500)
    {
        REM=TOT*0.90;
        if (REM>=500)
        {
            PORT = 0;
            PAP=REM+PORT;
            SOUSTOT=REM-TOT;
            console.log(" remise 10% ("+(Math.round((SOUSTOT) * 100) / 100)+"€) soit "+(Math.round((REM) * 100) / 100)+"€ et frais port = 0; à payer : "+(Math.round((PAP) * 100) / 100)+" €");
        }
        else 
        {
            PORT=REM*0.02;
            PORTMAX = Math.max(PORT, 6);
            PAP=REM+PORTMAX;
            SOUSTOT=TOT-REM;
            console.log(Math.round((PAP) * 10) / 10);
            console.log("remise 10% ("+(Math.round((SOUSTOT) * 100)/100)+" €) soit "+(Math.round((REM) * 100) / 100)+" et frais port 2% (de "+(Math.round((REM) * 10) / 10)+" €) soit +"+(Math.round((PORTMAX) * 100) / 100)+" € ; à payer : "+(Math.round((REM) * 100) / 100)+"+"+(Math.round((PORTMAX) * 100) / 100)+" = "+Math.round((PAP) * 100) / 100+" €.");
        }
    }
    //prix en dessous de 100€
    else if (TOT<=99)
    {
        PORT=TOT*0.02;
        PORTMAX = Math.max(PORT, 6);
        PAP=TOT+PORTMAX;
        console.log("remise 0, frais de port 2% soit "+(Math.round((TOT) * 100) / 100)+" € donc le minimum de 6 € s'applique; à payer : "+(Math.round((TOT) * 100) / 100)+"+"+(Math.round((PORTMAX) * 100) / 100)+" = "+(Math.round((PAP) * 100) / 100)+" €");
    }
}

function checkForm(f) 
{
    var formulaire = true

    //nom 
    if (form1.nom.value=="")
    {
        formulaire=false;
        alert("Vous n'avez pas saisie votre nom !");

    }


    //prénom
    if (form1.prénom.value=="")
    {
        formulaire=false;
        alert("Vous n'avez pas saisie votre prénom !");
    }

    //selection du sexe
    if (form1.selectionsexe.value==false)
    {
        formulaire=false;
        alert("Vous n'avez pas saisie votre sexe !");
    }
    //date naissance
    if (form1.date.value.charAt(7)=="")
    {
        formulaire=false;
        alert("Date de naissance incorrect!");
    }
    //code postal 
    if (form1.codepostal.value.charAt(4)=="")
    {
        formulaire=false;
        alert("Code postal incorrect!");
    }


    //email
    var email = document.getElementById('email').value;
    var H = "@";
    var cherche = email.indexOf(H);
    if(cherche==-1)
    {
         alert('Veuillez entrer un email valide!');
        document.getElementById('email').focus;
        formulaire=false;
             
    }
    //sujet
    var sujet = document.getElementsByName('choix').value;
    if(sujet=="0")
    {
         alert('Veuillez choisir un sujet!');
        document.getElementById('sujet').focus;
        formulaire=false;
             
    }
    

    
    //question
    var question = document.getElementById('question').value;
    if(question=="")
    {
         alert('Veuillez entrer une question valide!');
        document.getElementById('question').focus;
        formulaire=false;
             
    }
    //accepte formulaire
    var validation = document.getElementById('traitementinformatique').checked;
    if(validation==false)
    {
         alert('Veuillez accepter le traitement informatique! ');
        document.getElementById('traitementinformatique').focus;
        formulaire=false;
             
    }
    

    //alert fin de check
    if (formulaire==true)
    {
        return true
    }
    else 
    {
        alert("Le formulaire ne c'est pas envoyé correctement")
        return false
    }
}
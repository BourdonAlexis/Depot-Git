var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];



function suppPrenom(){
    supp=prompt("prénom à supprimer")
}



function resultat(){
    switch (supp)
        {   
        //retrouve Audrey -------------------------------------------------------------
        case "Audrey" :
            //Si la valeur est autre que -1 remplace audray par ""
            var A = tab.indexOf("Audrey");
                if (A !== -1) {
                    tab[A] = "";           
                
                    //Décalle "" de 1 vers la droite 
                        
                    for(var i=A; i < tab.length-1; i++)
                    {
                        if(tab[i] < tab[i+1]) 
                        {
                            var save = tab[i];
                            tab[i] = tab[i+1];
                            tab[i+1] = save;
                        }
                    }
                    console.log(tab);    
                }    
        break; 
            //retrouve Aurélien -------------------------------------------------------------
        case "Aurélien" :
            //Si la valeur est autre que -1 remplace Aurélien par ""
            var A = tab.indexOf("Aurélien");
                if (A !== -1) 
                {
                    tab[A] = "";           
                   
                    //Décalle "" de 1 vers la droite 
                        
                    for(var i=A; i < tab.length-1; i++)
                    {
                        if(tab[i] < tab[i+1]) 
                        {
                            var save = tab[i];
                            tab[i] = tab[i+1];
                            tab[i+1] = save;
                        }
                    }
                    console.log(tab);    
                }    
        break;  
        //retrouve Flavien -------------------------------------------------------------
        case "Flavien" :
            //Si la valeur est autre que -1 remplace Flavien par ""
            var A = tab.indexOf("Flavien");
                if (A !== -1) {
                    tab[A] = "";                               
                    //Décalle "" de 1 vers la droite 
                        
                    for(var i=A; i < tab.length-1; i++)
                    {
                        if(tab[i] < tab[i+1]) 
                        {
                            var save = tab[i];
                            tab[i] = tab[i+1];
                            tab[i+1] = save;
                        }
                    }
                    console.log(tab);    
                }    
        break; 
        //retrouve Jérémy -------------------------------------------------------------
        case "Jérémy" :
            //Si la valeur est autre que -1 remplace Jérémy par ""
            var A = tab.indexOf("Jérémy");
                if (A !== -1) {
                    tab[A] = "";           
                
                    //Décalle "" de 1 vers la droite 
                        
                    for(var i=A; i < tab.length-1; i++)
                    {
                        if(tab[i] < tab[i+1]) 
                        {
                            var save = tab[i];
                            tab[i] = tab[i+1];
                            tab[i+1] = save;
                        }
                    }
                    console.log(tab);    
                }    
        break;
        //retrouve Laurent -------------------------------------------------------------
        case "Laurent" :
            //Si la valeur est autre que -1 remplace Laurent par ""
            var A = tab.indexOf("Laurent");
                if (A !== -1) {
                    tab[A] = "";           
                
                    //Décalle "" de 1 vers la droite 
                            
                    for(var i=A; i < tab.length-1; i++)
                    {
                        if(tab[i] < tab[i+1]) 
                        {
                            var save = tab[i];
                            tab[i] = tab[i+1];
                            tab[i+1] = save;
                        }
                    }
                    console.log(tab);    
                }    
        break;
        //retrouve Melik -------------------------------------------------------------
        case "Melik" :
            //Si la valeur est autre que -1 remplace Melik par ""
            var A = tab.indexOf("Melik");
                if (A !== -1) {
                    tab[A] = "";           
                
                    //Décalle "" de 1 vers la droite 
                            
                    for(var i=A; i < tab.length-1; i++)
                    {
                        if(tab[i] < tab[i+1]) 
                        {
                            var save = tab[i];
                            tab[i] = tab[i+1];
                            tab[i+1] = save;
                        }
                    }
                    console.log(tab);    
                }    
        break;
        //retrouve Nouara -------------------------------------------------------------
        case "Nouara" :
            //Si la valeur est autre que -1 remplace Nouara par ""
            var A = tab.indexOf("Nouara");
                if (A !== -1) {
                    tab[A] = "";           
                    
                    //Décalle "" de 1 vers la droite 
                            
                    for(var i=A; i < tab.length-1; i++)
                    {
                        if(tab[i] < tab[i+1]) 
                        {
                            var save = tab[i];
                            tab[i] = tab[i+1];
                            tab[i+1] = save;
                        }
                    }
                    console.log(tab);    
                }    
        break;
        //retrouve Salem -------------------------------------------------------------
        case "Salem" :
            //Si la valeur est autre que -1 remplace Salem par ""
            var A = tab.indexOf("Salem");
                if (A !== -1) {
                    tab[A] = "";           
                    
                    //Décalle "" de 1 vers la droite 
                            
                    for(var i=A; i < tab.length-1; i++)
                    {
                        if(tab[i] < tab[i+1]) 
                        {
                            var save = tab[i];
                            tab[i] = tab[i+1];
                            tab[i+1] = save;
                        }
                    }
                    console.log(tab);    
                }    
        break;
        //retrouve Samuel -------------------------------------------------------------
        case "Samuel" :
            //Si la valeur est autre que -1 remplace Samuel par ""
            var A = tab.indexOf("Samuel");
                if (A !== -1) {
                    tab[A] = "";           
                
                    //Décalle "" de 1 vers la droite 
                            
                    for(var i=A; i < tab.length-1; i++)
                    {
                        if(tab[i] < tab[i+1]) 
                        {
                            var save = tab[i];
                            tab[i] = tab[i+1];
                            tab[i+1] = save;
                        }
                    }
                    console.log(tab);    
                }    
        break;
        //retrouve Stéphane -------------------------------------------------------------
        case "Stéphane" :
            //Si la valeur est autre que -1 remplace Stéphane par ""
            var A = tab.indexOf("Stéphane");
                if (A !== -1) {
                    tab[A] = "";           
                    
                    //Décalle "" de 1 vers la droite 
                            
                    for(var i=A; i < tab.length-1; i++)
                    {
                        if(tab[i] < tab[i+1]) 
                        {
                            var save = tab[i];
                            tab[i] = tab[i+1];
                            tab[i+1] = save;
                        }
                    }
                    console.log(tab);    
                }    
        break;
        //Message d'erreur    
        default: 
            alert("Veulliez saisir un nom dans la liste ci-dessous")
        } 

}
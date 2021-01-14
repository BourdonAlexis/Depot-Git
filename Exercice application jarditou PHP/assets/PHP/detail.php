<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<!--Connexion base de données--->
    <title>Détail</title>
</head>
<body class="mx-5">
    <!--------------------------------------- PHP -------------------------------------------->
    <?php
    // connexion vers le ficher BDD
    require "connexion_bdd.php"; 
    try {
        // Récupération de l'identifiant concerné, passé en GET
        $pro_id=$_GET['pro_id'];

        $requete = "SELECT * FROM produits WHERE pro_id=".$pro_id;
        $result = $db->query($requete);

        // Récupération du résultat de la requête

        $row = $result->fetch(PDO::FETCH_OBJ);

        // Libération de la connexion au serveur de BDD
        $result->closeCursor();
    }
    catch (Exception $e) {

        echo "La connexion à la base de données a échoué ! <br>";
        echo "Merci de bien vérifier vos paramètres de connexion ...<br>";
        echo "Erreur : " . $e->getMessage() . "<br>";
        echo "N° : " . $e->getCode();
        die("Fin du script");
    }

    ?>
<!------------------------------------------ HTML ------------------------------------------------------>
 <!--Entête-->
    
    <header>
        <div class="container-fluid">
                <div class="row align-items-end align-items-center">
                    <div class="col-lg-6">
                        <img class="mw-100 mt-2" style="width: 30%" src="../../src/img/jarditou_logo.jpg" height="auto" title="jarditou" alt="jarditou" >  
                    </div>
                    <div class="col-lg-6 text-right ">
                        <span class="h3 d-none d-lg-block">Tout le jardin </span>
                        <span class="h5 d-lg-none">Tout le jardin </span>
                    </div>
                </div>
        </div>
    </header>
       <!--redirection sur la page-->
    <nav class="navbar navbar-expand-lg bg-light navbar-light">
        <a class="align-items-center mr-2 navbar-brand" href="index.html#accueil">
               Jarditou.com
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
        </button>   
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="../../index.html">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active a" href="../../tableau.php">Tableau</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../contact.html">Contact</a>
                </li>
            </ul>
        </div>
        <form class="form-inline d-none d-lg-block">
            <input class="form-control mr-2" type="search" placeholder="votre promotion" aria-label="recherche"> 
            <button type="button" class="btn btn-outline-success mr-2"><span>Recherche</span></button>
        </form>
    </nav>
    <!--image promotion lame terrasse-->
    <div>
        <img src="../../src/img/promotion.jpg" title="promotion sur lames de terrasse" alt="jarditou" class="mw-100" style="width: 200%;"> 
    </div>
    <!-- bouton détail -->
    <div>
        <!-- ref -->
        <label for="ref">Références :  </label>
        <input class="form-control" type="text" name="ref" id="ref" readonly>
        <br>
        <!-- Catégorie -->
        <label for="categorie">Catégorie :  </label>
        <input class="form-control" type="text" name="categorie" id="categorie" readonly>
        <br>
        <!-- Libéllé -->
        <label for="libelle">Libéllé :  </label>
        <input class="form-control" type="text" name="libelle" id="libelle" readonly>
        <br>
        <!-- Description -->
        <label for="description">Description :  </label>
        <textarea class="form-control" type="text" name="description" id="description" readonly></textarea>
        <br>
        <!-- Prix -->
        <label for="prix">Prix :  </label>
        <input class="form-control" type="text" name="prix" id="prix" readonly>
        <br>
        <!-- Stock -->
        <label for="stock">Stock :  </label>
        <input class="form-control" type="text" name="stock" id="stock" readonly>
        <br>
         <!-- Couleur -->
         <label for="couleur">Couleur :  </label>
        <input class="form-control" type="text" name="couleur" id="couleur" readonly>
        <br>
         <!--balise selection type de sexe--> 
        <label for="non">Produit bloqué ? :  </label>  
        <br>                     
        <input type="radio" name="bloque" id="oui" required>
        <label for="oui">Oui </label> 
        <input type="radio" name="bloque" id="non" required> 
        <label for="non">Non </label> 
        <br>
         <!-- Date d'ajout -->
         <label for="dateajout">Date d'ajout :  </label>
        <input class="form-control" type="text" name="dateajout" id="dateajout" readonly>
        <br>
         <!-- Date de modification -->
         <label for="datemdf">Date de modification :  </label>
        <input class="form-control" type="text" name="datemdf" id="datemdf" readonly>
        <br>
    </div>


    <footer>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark rounded mt-2">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar2">
            <span class="navbar-toggler-icon"></span>
            </button>   
            <div class="collapse navbar-collapse" id="collapsibleNavbar2">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#mentionlégales" title="Allez aux mentions légales">Mentions légales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#horaires" title="Consulter nos horaires">Horaires</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#plan" title="Consulter le plan du site">Plan du site</a>
                    </li>
                </ul>
            </div> 
        </nav>  
    </footer>
</body>
</html>



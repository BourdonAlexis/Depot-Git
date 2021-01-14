<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">   
    <title>Tableau</title>
    <!-- <link rel="stylesheet" href="assets/css/style.css"> -->
    <!-- <link rel="stylesheet" media="screen and (max-width: 768px)" href="assets/css/media.css"> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body class="mx-5">

<!----------------------------------------------PHP------------------------------------>
<!--Connexion base de données--->
<?php
require "assets/PHP/connexion_bdd.php"; 

// selection de la table produit

try {

    $requete = "SELECT * FROM produits";
    $result = $db->query($requete);
    $row = $result->fetch(PDO::FETCH_OBJ);
    }
    catch (Exception $e) {

        echo "La connexion à la base de données a échoué ! <br>";
        echo "Merci de bien vérifier vos paramètres de connexion ...<br>";
        echo "Erreur : " . $e->getMessage() . "<br>";
        echo "N° : " . $e->getCode();
        die("Fin du script");
}


?>

<!----------------------------------------------HTML------------------------------------>


     <!--Entête-->
    
     <header>
        <div class="container-fluid">
                <div class="row align-items-end align-items-center">
                    <div class="col-lg-6">
                        <img class="mw-100 mt-2" style="width: 30%" src="src/img/jarditou_logo.jpg" height="auto" title="jarditou" alt="jarditou" >  
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
                    <a class="nav-link" href="index.html">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active a" href="#tableau">Tableau</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
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
        <img src="src/img/promotion.jpg" title="promotion sur lames de terrasse" alt="jarditou" class="mw-100" style="width: 200%;"> 
    </div>
        <!--Tableu BBC-->       
    
    <div class="table-responsive overflow-auto" id="tableau">
        <table class="table table-striped table-hover table-bordered">
            <tbody>
                <tr class="table-secondary">
                    <th>Photo</th>
                    <th>ID</th>
                    <th>Référence</th>
                    <th>Libellé</th>
                    <th>Prix</th>
                    <th>Stock</th>
                    <th>Couleur</th>
                    <th>Ajout</th>
                    <th>Modif</th>
                    <th>Bloqué</th>
                </tr>
                
        <!--Boucle pour tableau-->        
                
                <?php  
                    while ( $row = $result->fetch(PDO::FETCH_OBJ))
                    {

                        echo '</tr>';
                        echo   '<td class="table-warning">'.$row->pro_photo.'</td>';
                        echo   '<td>'.$row->pro_id.'</td>';
                        echo   '<td>'.$row->pro_ref.'</td>';?>
                        <td class="table-warning"><a href="assets/PHP/detail.php?pro_id=<?php echo $row->pro_id; ?>" title="Modifier"><b class="text-danger"> <?php echo $row->pro_libelle?></b></a></td>
                        <?php 
                        echo   '<td>'.$row->pro_prix.'</td>';
                        echo   '<td>'.$row->pro_stock.'</td>';
                        echo   '<td>'.$row->pro_couleur.'</td>';
                        echo   '<td>'.$row->pro_d_ajout.'</td>';
                        echo   '<td>'.$row->pro_d_modif.'</td>';
                        echo   '<td>'.$row->pro_bloque.'</td>';
                        echo '</tr>';
                    }
                ?>
            </tbody>    
        </table> 
    </div>
      <!--bas de page-->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
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
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>

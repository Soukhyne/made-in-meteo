<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="meteo meteorologie météo météorologie" />
        <meta name="description" content="Ma météo">
        <title>Ma météo</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/weather-icons.min.css">
        <link rel="stylesheet" href="css/style.css">
        <script defer type="module" src="js/app.js"></script>
    </head>
    <body class="wraper">
        <header class="header wraper">
            <form id="searchForm" class="searchForm">
                <input type="text" placeholder="Rechercher une ville..." id="inputSearch">
                <button id="buttonSearch" type="submit"><i class="fas fa-search"></i></button>
            </form>
        </header>
        <main class="hide"> 
            <section class="flex wraper meteoVille title blue">
                <i class="fas fa-chevron-circle-left invisible" title="précédént"></i>
                <h1>Votre ville</h1>
                <i id="favoris" class="far fa-bookmark" title="ajouter aux favoris"></i>
                <i id="supprFavoris" class="fas fa-bookmark hide" title="supprimer des favoris"></i>
                <i class="fas fa-chevron-circle-right invisible" title="suivant"></i>
            </section>
            <section>
                <h2 id="dateDuJour" class="blue title">Lundi 7 juin 2021 à 15h55</h2>
            </section>
            <section>
                <div>
                    <div class="flex meteoJour blue">
                        <div id="imgMeteoActu" class="tiers">
                            <i class="wi wi-day-sunny"></i>
                        </div>
                        <div class="title tiers meteoJourTitle">
                            <p id="heureMeteoActu">Matin</p>
                            <p id="degreMeteoActu">25°C</p>
                        </div>
                        <div class="detail tiersplus text">
                            <p id="descriptionMeteoActu">Ciel dégagé</p>
                            <p id="nuageMeteoActu">Nuage : 0%</p>
                            <p id="ventMeteoActu">Vent : 25km/h N</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex meteoJour blue">
                        <div id="imgMeteoNext" class="tiers">
                            <i class="wi wi-day-sunny"></i>
                        </div>
                        <div class="title tiers meteoJourTitle">
                            <p id="heureMeteoNext">Matin</p>
                            <p id="degreMeteoNext">25°C</p>
                        </div>
                        <div class="detail tiersplus text">
                            <p id="descriptionMeteoNext">Ciel dégagé</p>
                            <p id="nuageMeteoNext">Nuage : 0%</p>
                            <p id="ventMeteoNext">Vent : 25km/h N</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex meteoJour blue">
                        <div id="imgMeteoSuperNext" class="tiers">
                            <i class="wi wi-day-sunny"></i>
                        </div>
                        <div class="title tiers meteoJourTitle">
                            <p id="heureMeteoSuperNext">Matin</p>
                            <p id="degreMeteoSuperNext">25°C</p>
                        </div>
                        <div class="detail tiersplus text">
                            <p id="descriptionMeteoSuperNext">Ciel dégagé</p>
                            <p id="nuageMeteoSuperNext">Nuage : 0%</p>
                            <p id="ventMeteoSuperNext">Vent : 25km/h N</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="blue">
            <section>
                <h3 class="blue title">Les trois prochains jours</h3>
                <div class="flex meteo3Jours text">
                    <!--<div class="flex meteoTroisJours">
                        <p>Jour</p>
                        <p><i class="wi wi-day-sunny"></i></p>
                        <p>20°C</p>
                    </div>
                    <div class="flex meteoTroisJours">
                        <p>Jour</p>
                        <p><i class="wi wi-day-sunny"></i></p>
                        <p>20°C</p>
                    </div>
                    <div class="flex meteoTroisJours">
                        <p>Jour</p>
                        <p><i class="wi wi-day-sunny"></i></p>
                        <p>20°C</p>
                    </div>-->
                </div>
                
                <h3 id="weekend" class="darkblue title">Le weekend prochain</h3>
                <div class="flex meteoWeekend text darkblue">
                    <!--<div class="flex meteoWE darkblue">
                        <p>Jour</p>
                        <p><i class="wi wi-day-sunny"></i></p>
                        <p>20°C</p>
                    </div>
                    <div class="flex meteoWE darkblue">
                        <p>Jour</p>
                        <p><i class="wi wi-day-sunny"></i></p>
                        <p>20°C</p>
                    </div>-->
                </div>
            </section>   
        
        </main>
        <footer class="darkblue title">
            <div class="search hide">
                <p>La géolocalisation n'est pas activée.<br>Veuillez rechercher une ville</p>
            </div>
            <p>Madeline LAFONT © 2021</p>
        </footer>
    </body>
</html>
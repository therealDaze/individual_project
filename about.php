<!DOCTYPE html>
<html lang="sv-SE">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Om mig</title>
  <link rel="stylesheet" href="font/css/font-awesome.min.css">
  <link rel="stylesheet" href="CSS/myStyle.css">
</head>

<body>
  <span class="hamburger fa fa-navicon" id="openNav"></span>
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" id="closeNav" class="closebtn">&times;</a>
    <a class="page-links" href="index.html">HEM <hr class="hr"></a>
    <a class="page-links" href="résumé.html">CV <hr class="hr"></a>
    <a class="page-links" href="about.html">OM MIG <hr class="hr"></a>
  </div>
  <div class="layer"></div>
  <div class="flex-container">
    <div class="flex-col-img">
      <img src="img/brick wall copy.jpg" alt="daniel dahlman">
      <div class="h1-header-class">
        <h1 class="h1-flex-class">Daniel Dahlman</h1>
      </div>
      <div class="like-block">
        <button class="like-button share s_twitter"><span class="nr2 fa fa-twitter-square"></span></button>
        <button class="like-button share s_facebook"><span class="nr2 fa fa-facebook-square"></span></button>
        <button class="like-button share s_plus"><span class="nr2 fa fa-google-plus-official"></span></button>
        <button class="like-button share s_linkedin"><span class="nr2 fa fa-linkedin-square"></span></button>
      </div>
    </div>
    <div class="flex-row">
      <div class="flex-col">
        <h1>Lite om vem jag är</h1>
        <p>Mitt namn är Daniel Dahlman och jag studerar på utbildningen Front End Developer, som är en 2 årig yrkeshögskoleutbildning
          på KYH i Stockholm. Den 15:e januari 2018 påbörjas en praktikperiod som ingår i utbildningen. Denna praktikperiod
          kallas för LIA som står för ”Lärande I Arbete”. Förutom att jag lär mig hur det går till på en arbetsplats ska
          jag bidra med mina kunskaper om webbapplikationer, design, grundläggande databasadministration inom mySQL-server
          och utveckling av dynamiska webbplatser.</p>
        <div class="flex-col expand">
          <a href="#" data-toggle="expand">mer info...<i class="fa fa-plus-circle"></i></a>
          <div class="myInfo">
            <p> Min omgivning ger mig ofta återkoppling på att jag är en utåtriktad, social person som gillar att arbeta med
              människor. Jag har stor erfarenhet i att hantera stressiga situationer på ett smidigt och effektivt sätt. Mitt
              modersmål är svenska men jag talar och skriver flytande engelska. Under min tid ute i arbetslivet har jag främst
              arbetat med dans och kultur men har även jobbat inom försäljning och som kassapersonal. Anledningen varför
              jag tog steget in i programmeringsvärlden är för att jag älskar skapandet av nya projekt och att få nå målet
              tillsammans med ett bra team.</p>
            <p> Ute i arbetslivet som dansare och koreograf har jag fått tagit mycket ansvar. Innan en show eller produktion
              så har vi alltid haft en deadline som man förhållit sig till för att göra klart danserna och det administrativa
              arbetet. Jag har haft ansvarstagande roller som har varit betydande i både produktioner och jobb.</p>
            <p> Jag är Världsmästare i dansen Lindy Hop (2003 och 2004) och vunnit ett flertal svenska mästerskap i olika dansgrenar.</p>
            <p> har alltid varit intresserad av att skapa och att bygga lösningar till svåra problem. Att bli programmerare är
              någonting jag riktigt fastnade för, just för att det innehåller så många moment där man får utveckla sin skicklighet
              inom design och utveckling av applikationer.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <ul>
      <li>Daniel Dahlman</li>
      <li><a href="mailto:danieldahlman@outlook.com">danieldahlman@outlook.com</a></li>
      <li>
        <a href="https://se.linkedin.com/in/daniel-dahlman-6bb9438a"><span class="fa fa-linkedin-square"> linkedin</span></a>
      </li>
      <li>0739-18 22 16</li>
    </ul>
  </footer>
  <script src="JS/jquery-3.1.1.min.js"></script>
  <script src="JS/SocialShare.js"></script>
  <script src="JS/myScript.js"></script>
</body>

</html>
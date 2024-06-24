// Geschreven door luuk hiep, Noordwijk, januari 2024.
// Voltooit op 24 Juni 2024
//todo: resultatenpagina, optimalizatie, onnodige code weghalen.


//variabelen
var score = 0; //startscore
var juistsfx = new Audio("juist.mp3");
var foutsfx = new Audio("fout.mp3");
const q = 11; //hoeveelheid vragen
var quizpage = 1; //startpagina quiz
var ca; //correct antwoordt, gebruikt in quiz() en check()
var cas; //array met juiste antwoorden, gebruikt in quiz() en check()
var ql; // array met geselecteerde antwoorden, gebruikt in radioselected() en check()
var qt = "radio"; //type vraag, "question type"
var selection; //huidig geselecteerd antwoord, gebruikt in radioselected() en check()
var nocheck; //een boolean die ervoor zorgt dat je niet de antwoordknop kan spammen
var button = document.getElementById("but"); //knop in het html document
var acount = 0 // Hoeveelheid antwoorden voor vraag
//funtie gecalled wanneer een van de inputs geklikt is, geen arguments.
//zet huidig antwoord, "selection" string voor radio. "ql" array voor checkboxes
function inputselected() { 
    if(qt == "radio") { //radiobox
        button.style.display = "block"; //maak invulknop zichtbaar
        elements = document.getElementsByClassName('rads'); //pak alle radioboxes in een klasse
        for(x = 0; x < elements.length; x++) { //check elke radiobox voor .checked, 
            if(elements[x].checked) {
                selection = elements[x].value; //zet huidige radiobox value naar selectie
            }
        }
    } else {
        ql = []; //array met ingevulde antwoorden
        elements = document.getElementsByClassName('rads'); //pak alle checkboxes
        for(x = 0; x < elements.length; x++) { //ga door elke checkbox 
            if(elements[x].checked) {
                ql.push(elements[x].value); //push de value van die checkbox in een array
            } //potentieel probleem: omgekeerde array als meerdere antwoorden geselecteerd worden achter elkaar
        }
        if(ql.length == acount) { //laat antwoordknop alleen zien als er twee checkboxes geselecteerd zijn
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
}
//Hoofdfunctie gecalled op start en door check() nadat er een antwoord ingevoerd is. 1 argument: boolean ¨isright¨.
//hoofdfunctie, verandert vragen, verhoogt score, verstopt antwoordknop, zet knoppen naar juiste type en uncheck alle checkboxes
function quiz(isright) { 
    if(isright == true) {
        score += 1;
    }
    nocheck = false;
    selection = "none";
    button.style.display = "none";
    switch(quizpage) {
        case 1: //cases zijn vragen. elke quizpage is een pagina
            qt = "radio";
            document.getElementById("vraag").innerHTML = "Wat is het thema van onze website?"; //vraag
            document.getElementById('r1t').innerHTML = 'Maatschappijleer'; //antwoord 1 
            document.getElementById('r2t').innerHTML = 'Geshiedenis'; // antwoord 2
            document.getElementById('r3t').innerHTML = 'Informatica'; //antwoord 3
            document.getElementById('r4t').innerHTML = 'Wiskunde'; //antwoord 4
            ca = 2; //Juist antwoord
            break;//ik gebruikte eerst een form maar de pagina herlaadde met de submit knop
        case 2:
            qt = "checkbox";
            acount = 3
            document.getElementById("vraag").innerHTML = "Welke drie belangerijke gebeurtenissen staan op de hooftpagina";
            document.getElementById('r1t').innerHTML = 'De val van het west-romeinse rijk';
            document.getElementById('r2t').innerHTML = 'De tweede wereldoorlog';
            document.getElementById('r3t').innerHTML = 'De ontdekking van amerika';
            document.getElementById('r4t').innerHTML = 'De franse revolutie';
            cas = [1, 3, 4];
            break;
        case 3:
            qt = "radio";
            document.getElementById("vraag").innerHTML = "Wat was de laatste periode in de geschiedenis van griekeland die op onze site staat?";
            document.getElementById('r1t').innerHTML = 'De Archaïsche Periode';
            document.getElementById('r2t').innerHTML = 'De Minoïsche Beschaving';
            document.getElementById('r3t').innerHTML = 'De Hellenistische Periode';
            document.getElementById('r4t').innerHTML = 'De Klassieke Periode';
            ca = 3;
            break;
        case 4:
            document.getElementById("vraag").innerHTML = "Welk van de onderstaande landen staat niet op onze website?";
            document.getElementById('r1t').innerHTML = 'Rome';
            document.getElementById('r2t').innerHTML = 'Frankrijk';
            document.getElementById('r3t').innerHTML = 'Griekeland';
            document.getElementById('r4t').innerHTML = 'De verenigde staten';
            ca = 4;
            break;
        case 5:
            document.getElementById("vraag").innerHTML = "Met welke gebeurtenis eindigde de romeinse republiek?";
            document.getElementById('r1t').innerHTML = 'Met de benoeming van Octavianus';
            document.getElementById('r2t').innerHTML = 'Met de aanval van de persen';
            document.getElementById('r3t').innerHTML = 'Door de verdrijving van de laatste koning, Tarquinius Superbus';
            document.getElementById('r4t').innerHTML = 'Door het ontstaan van het griekse rijk';
            ca = 1;
            break;
        case 6:
            qt = "radio";
            document.getElementById("vraag").innerHTML = "Wanneer was de franse revolutie?";
            document.getElementById('r1t').innerHTML = '1939-1945';
            document.getElementById('r2t').innerHTML = '1843-1870';
            document.getElementById('r3t').innerHTML = '1789-1799';
            document.getElementById('r4t').innerHTML = '439 V.C';
            ca = 3;
            break;
        case 7:
            qt = "checkbox"; //checkbox type
            acount = 3
            document.getElementById("vraag").innerHTML = "Welk van de onderstaande gebouwen staan in rome?";
            document.getElementById('r1t').innerHTML = 'Het colluseum';
            document.getElementById('r2t').innerHTML = 'De eifeltoren';
            document.getElementById('r3t').innerHTML = 'Het pantheon';
            document.getElementById('r4t').innerHTML = 'Het Forum Romanum';
            cas = [1, 3, 4]; 
            break;
        case 8:
            acount = 2
            document.getElementById("vraag").innerHTML = "Welke twee landen hebben een eigen pagina op deze site?";
            document.getElementById('r1t').innerHTML = 'Rome';
            document.getElementById('r2t').innerHTML = 'Frankrijk';
            document.getElementById('r3t').innerHTML = 'Griekeland';
            document.getElementById('r4t').innerHTML = 'De Verenigde Staten';
            cas = [1, 3];
            break;
        case 9:
            qt = "radio";
            document.getElementById("vraag").innerHTML = "Welk van de onderstaanden gebouwen staat niet in griekeland";
            document.getElementById('r1t').innerHTML = 'Het Theater van Epidaurus';
            document.getElementById('r2t').innerHTML = 'De Akropolis van Athene';
            document.getElementById('r3t').innerHTML = 'Het witte huis';
            document.getElementById('r4t').innerHTML = 'De Tempel van Zeus';
            ca = 3
            break;
        case 10:
            qt = "radio";
            document.getElementById("vraag").innerHTML = "Op welk eiland begon het griekse rijk?";
            document.getElementById('r1t').innerHTML = 'Ijsland';
            document.getElementById('r2t').innerHTML = 'Kreta';
            document.getElementById('r3t').innerHTML = 'Madagascar';
            document.getElementById('r4t').innerHTML = 'Cuba';
            ca = 2;
            break;
        case 11:
            if (score == 0) {
                cijfer = 0
            }
            else {
                cijfer = ((score / 10) * 9) + 1
            }
            document.getElementById('quiz').innerHTML = "<h3>De quiz is voltooit.</h3> <br> Uw eindcijfer is: <br> " + score + " / 10 * 9 + 1 = " + cijfer + ". <br><br> Bedankt voor het maken van onze quiz"
    }
    document.getElementById('r1').type = qt; //zet inputs naar vraagsoort
    document.getElementById('r2').type = qt;
    document.getElementById('r3').type = qt;
    document.getElementById('r4').type = qt;
    elements = document.getElementsByClassName('rads'); //unchecked alle boxes
    for (var x = 0; x < elements.length; x++) {
        if (elements[x].checked) {
            elements[x].checked = false;
        }
    }
}   
//check functie, gecalled door invoerknop. controleerd antwoord en calls quiz voor volgende vraag
function check() { //controleerd antwoord
    if(nocheck != false) {
        return;
    } else {
        if(qt == "radio") { //voor radiobox vragen
            if (selection == ca) {
                nocheck = true; //goed
                let tempscore = score + 1;//score wordt pas verhoogt in quiz() zodat het niet gespammed kan worden
                juistsfx.play();
                document.getElementById("vraag").innerHTML = "Dat is correct! Uw totaalscore is " + tempscore + "!";
                if (quizpage <= q) {
                    quizpage += 1;
                    setTimeout(quiz, 3000, true);
                    return;
                }
            } else {
                nocheck = true; //fout
                foutsfx.play();
                document.getElementById("vraag").innerHTML = "Dat is incorrect! Uw totaalscore is " + score + "!";
                if (quizpage <= q) {
                    quizpage += 1;
                    setTimeout(quiz, 3000, false);
                    return;
                }  
            }
        } else {
            if(ql.length !== acount) { //voor checkbox vragen
                nocheck = true;
                document.getElementById("vraag").innerHTML = "Dat is incorrect! Uw totaalscore is " + score + "!";
                if (quizpage <= q) { //fout als niet juist hoeveelheid antwoorden
                    quizpage += 1;
                    setTimeout(quiz, 3000, false);
                    return;
                }  
            } else {
                if(ql[1] == cas[1] && ql[2] == cas[2]) { //juist als beide arrays hetzelfde zijn
                    nocheck = true;
                    let tempscore = score + 1;
                    document.getElementById("vraag").innerHTML = "Dat is correct! Uw totaalscore is " + tempscore + "!";
                    if (quizpage <= q) {
                        quizpage += 1;
                        setTimeout(quiz, 3000, true);
                    return;
                    }
                } else {
                    nocheck = true; //anders fout
                    document.getElementById("vraag").innerHTML = "Dat is incorrect! Uw totaalscore is " + score + "!";
                    if (quizpage <= q) {
                        quizpage += 1;
                        setTimeout(quiz, 3000, false);
                        return;
                    } 
                }       
            }
        }
    }
}
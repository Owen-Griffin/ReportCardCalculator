function calculateMean() {
    let sum = 0;
    let numInputs = 0;

    var FirstName = document.querySelector('input[name="FirstName"]').value;
    var LastName = document.querySelector('input[name="Surname"]').value;
    var Teacher = document.querySelector('input[name="Teacher"]').value;
    var RoomNumber = document.querySelector('input[name="RoomNumber"]').value;
    var Grade = document.querySelector('input[name="Grade"]').value;
    var term = document.querySelector('input[name="Term"]').value;



    var englishReading = parseInt(document.querySelector('input[name="Reading"]').value);
    var englishWriting = parseInt(document.querySelector('input[name="Writing"]').value);
    var englishOralCommunication = parseInt(document.querySelector('input[name="OralCommunication"]').value);
    var englishMediaLiteracy = parseInt(document.querySelector('input[name="MediaLiteracy"]').value);
    var frenchListening = parseInt(document.querySelector('input[name="FrenchListening"]').value);
    var frenchSpeaking = parseInt(document.querySelector('input[name="FrenchSpeaking"]').value);
    var frenchReading = parseInt(document.querySelector('input[name="FrenchReading"]').value);
    var frenchWriting = parseInt(document.querySelector('input[name="FrenchWriting"]').value);
    var nativeLanguage = parseInt(document.querySelector('input[name="NativeLanguage"]').value);
    var math = parseInt(document.querySelector('input[name="Mathematics"]').value);
    var scienceTechnology = parseInt(document.querySelector('input[name="ScienceTechnology"]').value);
    var history = parseInt(document.querySelector('input[name="History"]').value);
    var geography = parseInt(document.querySelector('input[name="Geography"]').value);
    var health = parseInt(document.querySelector('input[name="HealthPE"]').value);
    var pe = parseInt(document.querySelector('input[name="PE"]').value);
    var dance = parseInt(document.querySelector('input[name="Dance"]').value);
    var drama = parseInt(document.querySelector('input[name="Drama"]').value);
    var music = parseInt(document.querySelector('input[name="Music"]').value);
    var visualArt = parseInt(document.querySelector('input[name="VisualArts"]').value);

    // Literacy
    if (!isNaN(englishReading)) {
        numInputs++;
        sum += englishReading;
    }
    if (!isNaN(englishWriting)) {
        numInputs++;
        sum += englishWriting;
    }
    if (!isNaN(englishOralCommunication)) {
        numInputs++;
        sum += englishOralCommunication;
    }
    if (!isNaN(englishMediaLiteracy)) {
        numInputs++;
        sum += englishMediaLiteracy;
    }

    // French
    if (!isNaN(frenchListening)) {
        numInputs++;
        sum += frenchListening;
    }
    if (!isNaN(frenchReading)) {
        numInputs++;
        sum += frenchReading;
    }
    if (!isNaN(frenchSpeaking)) {
        numInputs++;
        sum += frenchSpeaking;
    }
    if (!isNaN(frenchWriting)) {
        numInputs++;
        sum += frenchWriting;
    }

    // Native
    if (!isNaN(nativeLanguage)) {
        numInputs++;
        sum += nativeLanguage;
    }

    // Math/Science
    if (!isNaN(math)) {
        numInputs++;
        sum += math;
    }
    if (!isNaN(scienceTechnology)) {
        numInputs++;
        sum += scienceTechnology;
    }

    // History/Geography
    if (!isNaN(history)) {
        numInputs++;
        sum += history;
    }
    if (!isNaN(geography)) {
        numInputs++;
        sum += geography;
    }

    // PE
    if (!isNaN(health)) {
        numInputs++;
        sum += health;
    }
    if (!isNaN(pe)) {
        numInputs++;
        sum += pe;
    }

    // Arts
    if (!isNaN(dance)) {
        numInputs++;
        sum += dance;
    }
    if (!isNaN(drama)) {
        numInputs++;
        sum += drama;
    }
    if (!isNaN(music)) {
        numInputs++;
        sum += music;
    }
    if (!isNaN(visualArt)) {
        numInputs++;
        sum += visualArt;
    }

    var mean = sum / numInputs;
    document.getElementById("result").innerHTML = "The mean of the percentages is: " + mean + "%";

    // Send Stuff
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/1077748519579947068/BDtNiC_28eLzttunJFCdp8tEzZuKRckkEoy-8HgTnU-xGDCeRY0GtW-w-9INtgXIlQ9s");
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = {
        "username": "My Web App",
        "embeds": [
            {
               "title": `${FirstName} ${LastName}'s Term ${term}, Grade ${Grade} Report Card`,
               "color": 16711680, // Decimal representation of the embed color (in this example, red)
               "fields": [
                {
                   "name": "Name",
                   "value": `${FirstName} ${LastName}`,
                   "inline": false
                },
                {
                    "name": "Term/Grade",
                    "value": `${term}, ${Grade}`,
                    "inline": false
                },
                {
                    "name": "Teacher",
                    "value": `${Teacher}, Room ${RoomNumber}`,
                    "inline": false
                },
                {
                    "name": "Name",
                    "value": `${FirstName} ${LastName}`,
                    "inline": false
                }, 
                {
                    "name": "Literacy (Reading, Writing, Oral Comm, Media)",
                    "value": `${englishReading}, ${englishWriting}, ${englishOralCommunication}, ${englishMediaLiteracy}`,
                    "inline": false
                },
                {
                    "name": "French (Listening, Speaking, Reading, Writing)",
                    "value": `${frenchListening}, ${frenchSpeaking}, ${frenchReading}, ${frenchWriting}`,
                    "inline": false
                },
                {
                    "name": "Native Language",
                    "value": `${nativeLanguage}`,
                    "inline": false
                },
                {
                    "name": "Mathematics",
                    "value": `${math}`,
                    "inline": false
                },
                {
                    "name": "Science & Technology",
                    "value": `${scienceTechnology}`,
                    "inline": false
                },
                {
                    "name": "History, Geography",
                    "value": `${history}, ${geography}`,
                    "inline": false
                },
                {
                    "name": "Heath, Physical Education",
                    "value": `${health}, ${pe}`,
                    "inline": false
                }, 
                {
                    "name": "Arts (Dance, Drama, Muisc, Visual Art",
                    "value": `${dance}, ${drama}, ${music}, ${visualArt}`,
                    "inline": false
                },
                {
                    "name": "Overall Average",
                    "value": `**${mean}%**`,
                    "inline": false
                }
             ],
               "footer": {
                  "text": "My Embed Footer"
               }
            }
         ]
    };
    
    var json = JSON.stringify(data);
    xhr.send(json);

}
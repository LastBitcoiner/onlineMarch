const sloganWords = ['مرگ بر آمریکا','مرگ بر سازش کار','مرگ بر فتنه گر','مرگ بر انگلیس','مرگ بر اسرائیل'];

function pushSlogan(SloganNumber, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(` ${xhr.responseText}`);
            callback(xhr.responseText, SloganNumber);
            //document.getElementById("2").innerHTML = `down with America ${xhr.responseTextfoo}`;
        }
    }
    xhr.open('GET', `/Slogans/${SloganNumber}`, true);
    xhr.send();
}

function checkSlogan(SloganNumber, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(`checked number: ${xhr.responseText}`);
            callback(xhr.responseText, SloganNumber);
            //document.getElementById("2").innerHTML = `down with America ${xhr.responseTextfoo}`;
        }
    }
    xhr.open('GET', `/${SloganNumber}`, true);
    xhr.send();
}

function declareText(response, SloganNumber) {
    console.log(response, SloganNumber);
    document.getElementById(SloganNumber).innerHTML = `${sloganWords[SloganNumber]} ${response}`;
}

function updateButton(response, SloganNumber) {
    console.log(response);
    document.getElementById(SloganNumber).innerHTML = `${sloganWords[SloganNumber]} ${response}`;
}

sloganWords.forEach((element,arr) => checkSlogan(arr,declareText));

// checkSlogan(2,declareText);

/**
 * PLAY MUSIC */


        /*function setAudioState() {
          audiostate = 1;
        }*/

        


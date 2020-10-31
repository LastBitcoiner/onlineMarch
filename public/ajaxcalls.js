/* function SloganCount(SloganNumber) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            return(request.responseText);
        }
    }
    request.open('GET', `/${SloganNumber}`, true);
    request.send();
    

    // console.log(request.responseText)
    // console.log(request.status);
    // console.log(request.responseURL);
    return request.responseText;
}

function SubmitSlogan(SloganNumber) {
    const request = new XMLHttpRequest();
    request.open('GET', `/Slogans/${SloganNumber}`, true);
    request.send();

    let foo = SloganCount(2);
    console.log(foo);
    document.getElementById("2").innerHTML = `down with America ${foo}`;
}
*/
const sloganWords = ['مرگ بر آمریکا','مرگ بر ضد ولایت فقیه','مرگ بر منافقین و کفار','مرگ بر انگلیس','مرگ بر اسرائیل'];

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
            // console.log(`checked number: sloan(${SloganNumber})${xhr.responseText}`);
            callback(xhr.responseText, SloganNumber);
            //document.getElementById("2").innerHTML = `down with America ${xhr.responseTextfoo}`;
        }
    }
    xhr.open('GET', `/${SloganNumber}`, true);
    xhr.send();
}

function declareText(response, SloganNumber) {
    console.log(response, SloganNumber);
    document.getElementById(`${SloganNumber}`).innerHTML = `${sloganWords[SloganNumber]} ${response}`;
}

function updateButton(response, SloganNumber) {
    console.log(response);
    document.getElementById("2").innerHTML = `${sloganWords[SloganNumber]} ${response}`;
}

sloganWords.forEach((element,arr) => checkSlogan(arr,declareText));

// checkSlogan(2,declareText);


/*
function sendSlogan(SloganNumber) {
    pushSlogan(SloganNumber, mycallback);
}
*/
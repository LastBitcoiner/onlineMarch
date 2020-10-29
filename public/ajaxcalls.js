function SloganCount(SloganNumber) {
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

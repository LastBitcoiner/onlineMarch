function SubmitSlogans(SloganNumber) {
    const request = new XMLHttpRequest();
    request.open('GET', `/Slogans/${SloganNumber}`, true);
    request.send();
}

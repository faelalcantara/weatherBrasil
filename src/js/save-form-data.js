function saveEmailsubscriber(){
    const subscriber = document.getElementById('subscriber-email').value;

    let subscribersStorage = localStorage.getItem('subscribers')
        ? JSON.parse(localStorage.getItem('subscribers'))
        : [];

    const isValid = /^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/.test(subscriber)

    if (isValid)
    {
        subscribersStorage.push(subscriber)
        localStorage.setItem('subscribers', JSON.stringify(subscribersStorage));
        alert('Subscribed with success!')
        return
    }
    alert('You have entered an invalid email address!')

}

function saveStormAlert() {
    const fullName = document.getElementById('sc-full-name').value;
    const email = document.getElementById('sc-email').value;
    const severity = document.getElementById('sc-severity').value;
    const info = document.getElementById('sc-information').value;

    let stormCenterStorage = localStorage.getItem('stormCenter')
        ? JSON.parse(localStorage.getItem('stormCenter'))
        : [];

    const stormData = {
        fullName,
        email,
        severity,
        info
    }

    if (stormData.fullName.length, stormData.email.length, stormData.severity.length, stormData.info.length)
    {
        stormCenterStorage.push(stormData)
        localStorage.setItem('stormCenter', JSON.stringify(stormCenterStorage));
        alert('Alert sent with success!')
    }
}

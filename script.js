function carregar() { 
    var msg = window.document.getElementById('msg'); // getElementById returns an element with a specified value
    var img = window.document.querySelector('img'); // querySelector method returns the first element that matches a CSS selector
    msg.innerHTML = 'Modificando com JavaScript'
    img.src = 'img/night.png'
}

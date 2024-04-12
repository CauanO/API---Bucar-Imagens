var campoDados = document.querySelector('#dados')
var button = document.querySelector('#button')
var imagem = document.querySelector('#img')

button.addEventListener("click", function sendReq() {
    var key = "YOUR_KEY"
    var url = "https://api.pexels.com/v1/search?query=" + campoDados.value
    console.log(url)
    var req = new XMLHttpRequest()
    req.onload = alterRes
    req.open("GET", url)
    req.setRequestHeader("Authorization", key)
    req.send()

    function alterRes() {
        var response = JSON.parse(req.responseText)
        console.log(response)
        imagem.src = response.photos[1].src.large2x
    }
})
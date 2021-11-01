 
 function carregar(){

    var msg =  document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var msg2 = document.getElementById('msg2')
    // var hora = 19

    msg.innerHTML = `Agora são ${hora} horas. `

    if (hora >=0 && hora < 12){

        img.src='img/3.png'
        document.body.style.background = 'lightblue'
        msg2.innerHTML = `Bom dia!`

    } else if (hora >= 12 && hora < 18){

        img.src='img/2.png'
        document.body.style.background = '#4682B4'
        msg2.innerHTML += `Boa tarde!`

    
    } else {
        img.src='img/1.png'
        document.body.style.background = '#191970'
        msg2.innerHTML += `Boa noite!`


    }

 }
 

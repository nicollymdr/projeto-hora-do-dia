function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#D7B97E'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#CA825C'       
    } else {
        //BOA NOITE!  
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#0E1A18'
    }

 }
const criaContagem = (m,s) => {

    // Elementos do DOM.
    const min = document.getElementById('m')
    const seg = document.getElementById('s')
    let ma = m, sa = s

    // Preparação.
    min.innerHTML = ma < 10 ? '0' + ma : ma 
    seg.innerHTML = sa < 10 ? '0' + sa : sa

    //Funções auxiliares.
    const pn = (n) => {
        return n < 10 ? '0' + n : n
    }

    // Função principal
    const timer = setInterval(function(){
        
        if(sa > 0 && ma > 0){
            sa--
            seg.innerHTML = pn(sa)
            min.innerHTML = pn(ma)                    
        }

        if(sa > 0 && ma == 0){
            sa--
            seg.innerHTML = pn(sa)
            min.innerHTML = pn(ma)
        }

        if(sa == 0 && ma > 0){
            sa = 59
            ma--
            seg.innerHTML = pn(sa)
            min.innerHTML = pn(ma)
        }

        if(sa == 0 && ma == 0){
            min.innerHTML = pn(ma)
            seg.innerHTML = pn(sa)
            clearInterval(timer)
        }

    },1000)

}

const cronometro = criaContagem(5,30)
function menu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }
    else{
        itens.style.display = 'block'
    }
}

function tatela(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    }
    else{
        itens.style.display = 'none'
    }
}
let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbarrr').style.top = '0';
    }
    else{
        document.getElementById('navbarrr').style.top = '100px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}


let slideIndex = 1;
    showSlides(slideIndex)
    
    function plusSlides(n){
    showSlides(slideIndex += n)
    }
    function currentSlide(n){
    showSlides(slideIndex = n)
    }
    function showSlides(n){
        let i;
        let slides = document.querySelectorAll(".mySlides");
        let quadrates = document.querySelectorAll(".quadrate"); 
        if(n > slides.length) slideIndex = 1
        if(n < 1) slideIndex = slides.length
        for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none"
        }
        for(i = 0; i < quadrates.length;i++){
            quadrates[i].className = quadrates[i].className.replace("active","")
        }
        slides[slideIndex-1].style.display = "block";
        quadrates[slideIndex-1].className += " active";
    }





document.getElementById("analizar").onclick = function(){
    analizar()
}

function analizar(){

    var criterio_1 = parseInt (document.getElementById("criterio_1").value);
    var criterio_2 = parseInt (document.getElementById("criterio_2").value);
    var criterio_3 = parseInt (document.getElementById("criterio_3").value);
    var criterio_4 = parseInt (document.getElementById("criterio_3").value);
    var criterio_5 = parseInt (document.getElementById("criterio_3").value);
    var criterios_acrofobia = criterio_1 + criterio_2 + criterio_3 + criterio_4 + criterio_5;

    if(criterios_acrofobia == 1) {
        document.getElementById("acrofobia_1").value = " Presenta un riesgo bajo";
    } else if (criterios_acrofobia >= 2 && criterios_acrofobia <= 4) {
        document.getElementById("acrofobia_1").value = "Presenta de 2 a 4 criterios de acrofobia, requiere aplicar evaluación psicológica"; 
    } else if (criterios_acrofobia == 5) {
        document.getElementById("acrofobia_1").value = " Presenta criterios completos de acrofobia, no se recomienda realizar prueba en realidad virtual";
    }
}


import "./separadorImagen.css"

function SeparadorImagen(){
    let style = { transform: 'translateY(0px)' };

    window.addEventListener('scroll', (event) => {
        console.log("scroll")
        document.getElementById("imdScroll").style.transform='translateY('+window.scrollY/4+'px)';
    })

    return(
        <div className="div-contenedor-separador-padre"> 
        <div className="div-separador">
            <img id="imdScroll" src=".././imgs/ElEmbarcoDeSantaPaulaRomana.jpg"/>
        </div>
        </div>
    )
}
export default SeparadorImagen
import "./destacadoHome.css"
import "./cuerpoHome.css"

function DestacadoHome() {

    function mov1() {
        return (
            document.getElementById("moverPanel").className = "div-destacado-imgs-on",
            document.getElementById("c1").className = "div-circulos",
            document.getElementById("c2").className = "div-circulos-select"
        )
    }

    function mov2() {
        return (
            document.getElementById("moverPanel").className = "div-destacado-imgs-off",
            document.getElementById("c2").className = "div-circulos",
            document.getElementById("c1").className = "div-circulos-select"
        )
    }

    function escalain1() {
        return (
            document.getElementById("foto1").className = "img-destacado-out"
        )
    }

    function escalaout1() {
        return (
            document.getElementById("foto1").className = "img-destacado-in"
        )
    }

    function escalain2() {
        return (
            document.getElementById("foto2").className = "img-destacado-out"
        )
    }

    function escalaout2() {
        return (
            document.getElementById("foto2").className = "img-destacado-in"
        )
    }

    return (
        <>
            <div className="div-destacado">
                <div className="div-pincipal"><h6>LO MÁS DESTACADO</h6></div>
                <div className="contenedorFotos">
                    <div id="moverPanel" className="div-destacado-imgs-off">
                        <div className="div-imgs">
                            <div className="contenicoDestacado" onMouseOver={escalain1} onMouseOut={escalaout1}>
                                <h5>Velázquez</h5>
                                <p>Los borrachos, o El triunfo de Baco</p>
                            </div>
                            <img id="foto1" className="img-destacado" src="././imgs/banner2.jpg" />
                        </div>
                        <div className="div-imgs">
                            <div className="contenicoDestacado" onMouseOver={escalain2} onMouseOut={escalaout2}>
                                <h5>Velázquez</h5>
                                <p>Las hilanderas o la fábula de Aracne</p>
                            </div>
                            <img id="foto2" className="img-destacado" src="././imgs/banner1.jpg" />
                        </div>
                    </div>
                </div>
                <div className="div-pincipal">
                    <div className="div-pasar-img">
                        <button onClick={mov2}><i class="fa-solid fa-chevron-left"></i></button>
                        <div className="circulos-fotos">
                            <div id="c1" className="div-circulos-select">
                                <i class="fa-solid fa-circle"></i>
                            </div>
                            <div id="c2" className="div-circulos">
                                <i class="fa-solid fa-circle"></i>
                            </div>
                        </div>
                        <button onClick={mov1}><i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DestacadoHome

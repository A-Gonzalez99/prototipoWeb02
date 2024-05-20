import "./menuCabeza.css"
import { useNavigate } from 'react-router-dom';

function MenuCabeza() {
    const navigate = useNavigate();

    function openHome() {
        navigate("/home");
        document.getElementById("id-menu").style.display = "none";
    }

    function openMenu() {
        document.getElementById("id-menu").style.display = "flex";
    }

    function closeMenu() {
        document.getElementById("id-menu").style.display = "none";
    }

    function openPage(url) {
        navigate(url);
        scroll(0, 0)
    }

    function buttonOver(id) {
        document.getElementById(id).className = "button-ouver"
    }

    function buttonDef(id) {
        document.getElementById(id).className = "button-def"
    }

    return (
        <>
            <div className="panel">
                <div className="panelTest">
                    <div className="panelTest2"><img onClick={openHome} className="imgLogo" src="././imgs/logo.png" /></div>
                    <div className="panelTest5"><button id="b-menu" onClick={openMenu} onMouseOver={() => buttonOver("b-menu")} onMouseOut={() => buttonDef("b-menu")} className="button-def"><i class="fa-solid fa-bars"></i>Menu</button></div>
                    <div className="panelTest4"><div className="buscador-menu"></div></div>
                    <div className="panelTest6">
                        <button id="b-lista" className="button-def" onClick={() => openPage("/seguimiento")} onMouseOver={() => buttonOver("b-lista")} onMouseOut={() => buttonDef("b-lista")}>
                            <i class="fa-solid fa-bookmark"></i>Lista de Seguimiento
                        </button>
                    </div>
                    <div className="panelTest3">
                        <div className="panelTestFoto"><i class="fa-solid fa-user"></i></div></div>
                </div>
            </div>
            <div id="id-menu" className="menu-panel">
                <div className="menu-panel-contenedor">
                    <div className="div-menu-top">
                        <img onClick={openHome} className="imgLogo" src="././imgs/logo.png" />
                        <button className="button-cerrar-menu" id="cerrar-menu" onClick={closeMenu}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="div-menu-contenido">
                        <div>
                            <h6> <i class="fa-solid fa-palette"></i> Cuadros</h6>
                            <p onClick={() => openPage("/realismo")}>Realismo</p>
                            <p onClick={() => openPage("/surrealismo")}>Surrealismo</p>
                            <p onClick={() => openPage("/hiperrealismo")}>Hiperrealismo</p>
                            <p onClick={() => openPage("/impresionismo")}>Impresionismo</p>
                            <p onClick={() => openPage("/expresionismo")}>Expresionismo</p>
                        </div>
                        <div>
                            <h6><i class="fa-solid fa-gamepad"></i> Mini juego</h6>
                            <p onClick={() => openPage("/game")}>Mini juego</p>
                        </div>
                        <div>
                            <h6><i class="fa-solid fa-eye"></i> Explorador</h6>
                            <p onClick={() => openPage("/explorer")}>Que ver</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuCabeza

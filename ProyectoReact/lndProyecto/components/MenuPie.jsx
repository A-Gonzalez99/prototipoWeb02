import "./menuPie.css"
import { useNavigate } from 'react-router-dom';

function MenuPie() {
    function openWeb(web) {
        console.log(web)
        window.open(web);
    }

    const navigate = useNavigate();
    function openPage(url) {
        navigate(url);
        scroll(0, 0)
    }

    return (
        <div className="panelPie">
            <div className="panelPie2">
                <div className="panelPie3">
                    <div className="panelPie4">
                        <h6>Obtener la web Tesauro</h6>
                        <p>Para Android e iOS</p>
                    </div>
                    <div className="panelPie5"><img src="./imgs/frame.png" /></div>
                </div>

                <div className="panelAcceso">
                    <div className="panelAcceso2">
                        <p onClick={() => openWeb("https://www.museodelprado.es/")}>Museo Del Prado</p>
                        <p onClick={() => openWeb("https://www.museoreinasofia.es/")}>Museo Reina Sofia</p>
                        <p onClick={() => openWeb("https://www.museosdeandalucia.es/web/museodebellasartesdesevilla/obras-singulares")}>Museo de Bellas Artes de Ansalucía</p>
                        <p onClick={() => openWeb("https://museupicassobcn.cat/")}>Museo Picasso</p>
                    </div>
                    <div className="panelAcceso2">
                        <p onClick={() => openPage("/politicasdeuso")}>Política de privacidad</p>
                        <p onClick={() => openPage("/contacto")}>Contacto</p>
                    </div>
                </div>
                <img src="./imgs/logo.png" />
                <p className="textoCopy">© 2023-2024 by Tesauro.com, Inc.</p>
            </div>
        </div>
    )
}
export default MenuPie

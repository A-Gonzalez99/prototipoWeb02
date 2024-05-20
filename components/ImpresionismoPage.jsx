import ImpresionismoList from "./ImpresionismoList"
import "./exploradorPage.css"

function ImpresionismoPage() {
    return (
        <div className="div-pincipal">
            <div className="div-explorador-cuerpo"><h6>Impresionismo</h6></div>
            <div className="div-foto-explo">
                <ImpresionismoList/>
            </div>
        </div>
    )
}
export default ImpresionismoPage
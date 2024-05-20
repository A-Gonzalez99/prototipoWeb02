import ExpresionismoList from "./ExpresionismoList"
import "./exploradorPage.css"

function ExpresionismoPage() {
    return (
        <div className="div-pincipal">
            <div className="div-explorador-cuerpo"><h6>Expresionismo</h6></div>
            <div className="div-foto-explo">
                <ExpresionismoList/>
            </div>
        </div>
    )
}
export default ExpresionismoPage
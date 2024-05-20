import SurrealismoList from "./SurrealismoList"
import "./exploradorPage.css"

function SurrealismoPage() {
    return (
        <div className="div-pincipal">
            <div className="div-explorador-cuerpo"><h6>Surrealismo</h6></div>
            <div className="div-foto-explo">
                <SurrealismoList/>
            </div>
        </div>
    )
}
export default SurrealismoPage
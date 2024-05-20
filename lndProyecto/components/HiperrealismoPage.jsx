import HiperrealismoList from "./HiperrealismoList"
import "./exploradorPage.css"

function HiperrealismoPage() {
    return (
        <div className="div-pincipal">
            <div className="div-explorador-cuerpo"><h6>Hiperrealismo</h6></div>
            <div className="div-foto-explo">
                <HiperrealismoList/>
            </div>
        </div>
    )
}
export default HiperrealismoPage
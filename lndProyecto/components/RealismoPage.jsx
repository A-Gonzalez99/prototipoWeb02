import RealismoList from "./RealismoList"
import "./exploradorPage.css"

function RealismoPage() {
    return (
        <div className="div-pincipal">
            <div className="div-explorador-cuerpo"><h6>Realismo</h6></div>
            <div className="div-foto-explo">
                <RealismoList/>
            </div>
        </div>
    )
}
export default RealismoPage
import ExplorarList from "./ExplorarLinst"
import "./exploradorPage.css"

function ExploradorPage() {
    return (
        <div className="div-pincipal">
            <div className="div-explorador-cuerpo"><h6>Explorador</h6></div>
            <div className="div-foto-explo">
                <ExplorarList />
            </div>
        </div>
    )
}
export default ExploradorPage
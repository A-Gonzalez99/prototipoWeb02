import "./cuerpoHome.css"
import "./explorarHome.css"
import { useNavigate } from 'react-router-dom';

function ExplorarHome() {
    const navigate = useNavigate();

    function openExplorer() {
        navigate("/explorer");
        scroll(0, 0)
    }

    return (
        <div className="div-pincipal">
            <h6 className="titulo-padding">ADÉNTRATE EN EL CORAZÓN DE TESAURO</h6>
            <div>
                <div className="div-foto-explo">
                    <div> <img className="div-foto-explo-img" src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/0e/0e0f/0e0f9742-3806-468f-ac41-72e2511a34ca/c582b55b-039f-4cc5-94ed-0081a6f7f25f_832.jpg" /></div>
                    <div> <img className="div-foto-explo-img" src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/88/8820/88200f2e-b0e0-4842-9192-7fa5fc2f5890/8d7d0277-ed9a-498d-b539-f948c7057e85_832.jpg" /></div>
                    <div> <img className="div-foto-explo-img" src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/f7/f7d2/f7d29fdd-42f3-47a8-84e8-305b71c399f8/ff282430-453d-4f8b-ac8d-8e73cad6afe5_832.jpg" /></div>
                    <div> <img className="div-foto-explo-img" src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/5a/5aa9/5aa9dcdd-3e53-40bd-84f4-d5afad8cbfdd/128f9564-43a8-4ae6-8183-84c6da85cc8c_832.jpg" /></div>
                    <div> <img className="div-foto-explo-img" src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/80/8019/8019517e-1974-404d-8794-00ff38dbfcfe/93870cb2-b20a-4360-bb33-2bcf0fb34887_832.jpg" /></div>
                    <div> <img className="div-foto-explo-img" src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/11/1104/1104a62a-edeb-4449-ab0b-7f8c57edee3a/c038244a-5626-40dc-a45c-844ba0b63810_832.jpg" /></div>
                    <div> <img className="div-foto-explo-img" src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/e3/e3c5/e3c594b5-e334-45f7-9550-ea0665be3f30/57e3c7de-521f-4172-be81-92c7b3745dd6_832.jpg" /></div>
                    <div> <img className="div-foto-explo-img" src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/10/10a7/10a7a263-cec9-4bbc-8385-6c8c1893b4dd/7050eeac-d917-4dd9-a457-2dc6ef2a78ca_832.jpg" /></div>
                    <div> <img className="div-foto-explo-img" src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/12/1291/1291c3a0-4822-443b-b93e-4f2b84efd8fc/d40d80cf-7ab0-4c15-ad62-d139e056186a_832.jpg" /></div>
                    <div> <img className="div-foto-explo-img" src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/28/2825/2825df10-4b18-4763-bae8-37020028b31d/faa1d45a-e708-40b2-957f-ecf73b75338c_832.jpg" /></div>
                    <div className="div-ver-mas">
                        <img src="././imgs/Decenfoque.png" />
                        <button id="explorar-buttom" onClick={openExplorer}><strong>Explorar</strong></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExplorarHome
import "./exploradorList.css"

function ImpresionismoList() {

    const db = [
        {
            id: 0,
            url: 'https://www.museunacional.cat/sites/default/files/017453-000.JPG',
            class: 'div-contenido-img-horizontal',
            info: 'Esta obra está seleccionada para el proyecto «Partage Plus – Digitising and Enabling Art Nouveau for Europeana»'
        }, {
            id: 1,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/a1/a10f/a10f154c-0bc3-4004-b9e6-55a7b9b2c7cb/994331bf-f2a6-4ad3-9d27-1dbc41984828_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Nacido en el seno de una familia de la alta sociedad madrileña, estudió leyes y se doctoró en derecho civil en 1867. Compaginó sus estudios legales con su afición por las Bellas Artes, pues desde 1874 estudió pintura en la Escuela de Bellas Artes junto a Carlos de Haes, y acudió al Museo del Prado '
        }, {
            id: 2,
            url: 'https://www.rubendeluis.com/wp-content/uploads/2018/06/Carlos-de-Haes-guadarrama.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Haes nacido en Bélgica aunque pasó gran parte de su vida en España, tiene una educación y formación importante en la pintura de Flandes de las escuelas del norte por lo que esta influencia se verá reflejado en su pintura. A lo largo del siglo XIX hay dos líneas bien marcadas como es la pintura clasicista que comienza ya en el siglo XVII con artista como Claudio de Lorena.'
        }, {
            id: 3,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/27/2749/274911df-f921-44de-b06f-81d98c001004/1cf75d52-b69f-4681-bcf8-b6cde5756d08.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Madrid, 1833-Venecia, 1908). Pintor español, considerado como el iniciador del paisajismo moderno español. Comenzó su formación artística con su hermano el grabador Bernardo Rico, con quien colaboró en el taller de su tío Calixto Ortega Matamoros en sus trabajos como ilustrador. Estudió en la Escuela de Bellas Artes de San Fernando de Madrid, con los paisajistas Genaro Pérez Villaamil, Fernando Ferrant y Vicente Camarón. En el Liceo de Madrid, trabó amistad con Rosales, Fortuny y Raimundo de Madrazo. Obtuvo una beca para continuar sus estudios en París en 1862, donde tuvo la oportunidad de conocer la obra de Meissonier y Daubigny, en cuyo taller comenzó a trabajar desde 1863. Fue amigo de alguno de los primeros artistas impresionistas, como es el caso de Camille Pissarro. Estuvo en Suiza y Gran Bretaña, además de rea­lizar frecuentes viajes a Venecia en compañía de Mariano Fortuny. Concurrió asiduamente a las Exposiciones Nacionales de Bellas Artes, obtuvo tercera medalla en 1860 por el lienzo titulado Un país, y segunda medalla en 1864 y 1867. Asimismo, remitió sus lienzos a las Universales de París de 1878 y 1888, en las que fue galardonado con tercera y segunda medalla, respectivamente. Gran parte de sus obras se hallan en colecciones particulares extranjeras debido a la estrecha relación comercial que mantuvo con el marchante francés de arte Adolphe Goupil. En sus lienzos se pueden rastrear influencias de la escuela de Barbizon, Turner, Claudio de Lorena y el preciosismo de Fortuny. En sus primeros paisajes manifiesta una visión romántica que, tras una etapa realista evoluciona hasta los finales con influencias de Fortuny. Como ilustrador colaboró en La Ilustración Española y Americana, publicación de la que fue director en 1895. Fue comendador de la orden de Isabel la Católica y recibió la cruz de la Legión de Honor francesa.'
        }
    ]
    return (
        <>
            {db.map((b) => <ExplorarConstructor key={b} id={b.id} url={b.url} info={b.info} class={b.class} />)}
        </>
    )
}

function imgZoom(imgid) {
    document.getElementById(imgid).style.scale = "1.05";
    document.getElementById(imgid).style.cursor = "pointer";

}

function imgZoomOut(imgid) {
    document.getElementById(imgid).style.scale = "1";
}

function mostrarInfo(imgid) {
    document.getElementById(imgid).style.visibility = "visible"
}

function ocultarIndo(imgid) {
    document.getElementById(imgid).style.visibility = "hidden"
}

function addFav(favid) {

    if (!localStorage.getItem("fav")) {
        localStorage.setItem('fav', '');
    }
    const existingIDs = localStorage.getItem("fav");

    if (document.getElementById(favid).className != "fa-solid fa-bookmark") {
        document.getElementById(favid).className = "fa-solid fa-bookmark"
        existingIDs.push(favid);
        localStorage.setItem('fav', JSON.stringify(existingIDs));
    }
    else {
        document.getElementById(favid).className = "fa-regular fa-bookmark"
        existingIDs.removeItem(favid);
        localStorage.setItem('fav', JSON.stringify(existingIDs));
    }
}

function ExplorarConstructor(props) {

    return (
        <>
            <div className="div-img-expl" id={"img" + props.id}
                onMouseOver={() => imgZoom("img" + props.id)}
                onMouseOut={() => imgZoomOut("img" + props.id)}
                onClick={() => mostrarInfo("img-info" + props.id)}>
                <div className="div-foto-explo-img"><img src={props.url}></img></div>
            </div>
            <div className="div-img-content-explorer" id={"img-info" + props.id}>
                <div className="div-contenido">
                    <div>
                        <button onClick={() => ocultarIndo("img-info" + props.id)}>X</button>
                    </div>
                    <div className="div-contenido-img-texto">
                        <div className="div-contenido-img">
                            <img className={props.class} src={props.url}></img>
                        </div>
                        <div className="div-contenido-texto"><p>{props.info}</p>
                            <div><i id={"fav-" + props.id} onClick={() => addFav("fav-" + props.id)} class="fa-regular fa-bookmark"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImpresionismoList
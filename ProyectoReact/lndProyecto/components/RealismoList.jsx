import "./exploradorList.css"

function RealismoList() {

    const db = [
        {
            id: 0,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/5e/5e17/5e177409-2993-4240-97fb-847a02c6496c/397fb2fb-8ef1-483f-b2d5-2b46100444e0_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Finalizada la guerra de la Independencia en 1813, el regreso a España de Fernando VII se había conocido desde diciembre de 1813, por el tratado de Valençay, así como su consiguiente entrada en Madrid. A principios de febrero la cuestión era inminente, habiéndole enviado el Consejo de la Regencia las condiciones para su vuelta al trono, en primer lugar, la jura de la Constitución de 1812. Su llegada a la capital iba a coincidir con la primera conmemoración del alzamiento del pueblo de Madrid contra los franceses el 2 de mayo de 1808. Entre febrero y marzo de 1814, el infante don Luís María de Borbón y Vallabriga, presidente del Consejo de la Regencia, así como las Cortes y el Ayuntamiento de Madrid, comenzaron la preparación de los actos para la entrada del rey. En la bibliografía sobre "El 2 de mayo de 1808 en Madrid" o "La lucha con los mamelucos" (P748), y su compañero, El "3 de mayo de 1808 en Madrid" o "Los fusilamientos", se fue consolidando, erróneamente, la idea de que estas obras fueron pintadas con un destino público en las calles de la capital.'
        }, {
            id: 1,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/cc/cc12/cc128630-425b-4752-a805-008d26556bbb/1bb6eb26-b3ad-41ea-9696-791ba611e31f_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Obra maestra de toda la producción de Gisbert, este impresionante cuadro es también una de las indiscutibles y más bellas cumbres alcanzadas por el género histórico en España durante el antepasado siglo. Constituye además uno de los grandes manifiestos políticos de toda la historia de la pintura española en defensa de la libertad del hombre aplastada por el autoritarismo, siendo uno de los contados casos en que su claro mensaje propagandístico fue inspirado directamente por la oficialidad gubernamental. En efecto, el cuadro no ingresó en el Prado tras su paso por las Exposiciones Nacionales de Bellas Artes, como era habitual, sino que fue encargado directamente para el museo durante la regencia de María Cristina de Habsburgo-Lorena por el gobierno liberal de Práxedes Mateo Sagasta (1825-1903) al alicantino Antonio Antonio Gisbert, ya entonces consagrado como artista abanderado de este partido desde que pintara muchos años antes su cuadro de Los Comuneros, en pugna -más ideológica y estética que real- con Casado del Alisal, maestro representante de la oficialidad conservadora, publicándose la noticia del encargo en los diarios madrileños incluso algunos días antes de su designación oficial.'
        }, {
            id: 2,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/c0/c0d4/c0d44a18-bef0-407c-befe-5f85ad56062e/edf08793-4e09-4156-a98a-02253d9f5784_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Este monumental lienzo ha sido considerado tradicionalmente como la obra maestra de José de Madrazo y la pintura más emblemática del Neoclasicismo español, exponiéndose en el Prado desde su apertura en 1819, en la llamada Galería de Artistas Contemporáneos. Por ello, adquirió desde entonces una enorme fama y reconocimiento en los ambientes artísticos oficiales del siglo XIX, así como en la historiografía del arte español hasta nuestros días.'
        }, {
            id: 3,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/9f/9fdc/9fdc7800-9ade-48b0-ab8b-edee94ea877f/41866afd-6396-45e7-bd26-944263cf92f7_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Es una de las obras de mayor tamaño de Velázquez y en la que puso un mayor empeño para crear una composición a la vez compleja y creíble, que transmitiera la sensación de vida y realidad, y al mismo tiempo encerrara una densa red de significados. El pintor alcanzó su objetivo y el cuadro se convirtió en la única pintura a la que el tratadista Antonio Palomino dedicó un epígrafe en su historia de los pintores españoles (1724). Lo tituló En que se describe la más ilustre obra de don Diego Velázquez, y desde entonces no ha perdido su estatus de obra maestra. Gracias a Palomino sabemos que se pintó en 1656 en el Cuarto del Príncipe del Alcázar de Madrid, que es el escenario de la acción. El tratadista cordobés también identificó a la mayor parte de los personajes: son servidores palaciegos, que se disponen alrededor de la infanta Margarita, a la que atienden doña María Agustina Sarmiento y doña Isabel de Velasco, meninas de la reina. Además de ese grupo, vemos a Velázquez trabajar ante un gran lienzo, a Mari Bárbola y Nicolasito Pertusato, que azuza a un mastín, a la dama de honor doña Marcela de Ulloa, junto a un guardadamas, y, al fondo, tras la puerta, asoma José Nieto, aposentador. En el espejo se ven reflejados los rostros de Felipe IV y Mariana de Austria, padres de la infanta y testigos de la escena. Los personajes habitan un espacio modelado no sólo mediante las leyes de la perspectiva científica sino también de la perspectiva aérea, en cuya definición representa un papel importante la multiplicación de las fuentes de luz.'
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

export default RealismoList
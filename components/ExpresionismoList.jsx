import "./exploradorList.css"

function ExpresionismoList() {

    const db = [
        {
            id: 0,
            url: 'https://cms.guggenheim-bilbao.eus/uploads/2012/05/2003-Saura-Memoria-y-recuerdo-1024x823.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Nacido en Huesca en 1930, Antonio Saura residió con su familia en Madrid, Valencia y Barcelona. Desde temprana edad acompañó a su padre en sus visitas al Museo del Prado, donde quedó profundamente impactado por el Cristo crucificado (1632) de Diego Velázquez y el Perro semihundido (1821–23) de Francisco de Goya, que marcarían de forma singular la temática de su futura obra. Autodidacta, comenzó a pintar y escribir en 1947 durante la convalecencia de una larga enfermedad. Entre 1948 y 1950 realizó la serie Constelaciones en la que queda patente la influencia de la pintura de Miró de los años 30 y 40, así como de la concepción artística del surrealismo agrupado en torno a la figura de André Breton. Entre 1953 y 1955 residió en París donde participó, en un principio, en las actividades del grupo surrealista que lideraba Breton, conociendo después el informalismo francés, llamado art autre, y la pintura norteamericana.'
        }, {
            id: 1,
            url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Fusilamiento_de_Torrijos_%28Gisbert%29.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'El pronunciamiento de Torrijos fue un pronunciamiento encabezado por el general y político liberal José María Torrijos que tuvo lugar en 1831 en España al final del reinado de Fernando VII y cuyo objetivo era poner fin al absolutismo y restaurar la Constitución de 1812. Torrijos desembarcó en la costa de Málaga procedente de Gibraltar el 2 de diciembre de 1831 junto a sesenta hombres que lo acompañaban, pero cayeron en la trampa que les habían tendido las autoridades absolutistas y fueron detenidos. Nueve días después, el 11 de diciembre, Torrijos y 48 de sus compañeros supervivientes fueron fusilados sin juicio previo en la playa de San Andrés de Málaga, un hecho que quedó inmortalizado por un soneto de José de Espronceda titulado A la muerte de Torrijos y sus compañeros y por un famoso cuadro que pintó en 1888 Antonio Gisbert.'
        }, {
            id: 2,
            url: 'https://gregorioprieto.org/wp-content/uploads/p4687.webp',
            class: 'div-contenido-img-horizontal',
            info: 'Gregorio Prieto (1897-1992) El centro del mundo, ca. 1965247x 298 cm, Óleo sobre lienzo Pintura España- Madrid Expuesto en sala'
        }, {
            id: 3,
            url: 'https://gregorioprieto.org/wp-content/uploads/p1001.webp',
            class: 'div-contenido-img-vertical',
            info: 'Gregorio Prieto (1897-1992) Retrato de Federico García Lorca, 1936 57.5x 38 cm Óleo sobre papel. Pintura España - Madrid Expuesto en sala'
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

export default ExpresionismoList
import "./exploradorList.css"

function SurrealismoList() {

    const db = [
        {
            id: 0,
            url: 'https://static4.museoreinasofia.es/sites/default/files/styles/foto_horizontal_normal/public/obras/AS11140.jpg?itok=BjF4j0zp',
            class: 'div-contenido-img-horizontal',
            info: 'Símbolo por excelencia de sus obsesiones sexuales, esta pintura ha sido glosada incluso por su propio autor, en la más conocida de sus obras literarias, The Secret Life of Salvador Dalí (La vida secreta de Salvador Dalí), editada en 1942. Salvador Dalí pinta este lienzo al final del verano de 1929, tras pasar varios días con Gala, que había decidido permanecer con él en Cadaqués, a pesar de que el entonces esposo de esta, el poeta Paul Éluard, había regresado solo a París, prescindiendo de la compañía de su todavía cónyuge. Como ha señalado Rafael Santos Torroella, Visage du Grand Masturbateur (Rostro del Gran Masturbador) es un cuadro eminentemente autobiográfico: la gran cabeza del masturbador es una de las personificaciones del propio artista, que aparece en la pintura protagonizando varias escenas simultáneas, como reflejo de la transformación anímica y erótica que Dalí acababa de experimentar a causa de la aparición de Gala en su vida. Por otra parte, en esta inquietante composición, las fantasías dalinianas alcanzan su cénit, en especial por lo que respecta al motivo del saltamontes que succiona el cuerpo de la gran figura metamorfoseada, ya que, según refiere Dawn Ades, este insecto le aterrorizó siempre de forma especial, incluso ya desde los días de su infancia.'
        }, {
            id: 1,
            url: 'https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbWlyYzNiM19jYXJuYXZhbC5qcGciLCJyZXNpemUsODAwIl19.Haxj8-9ZQWpf7JhwMdCsPB6OSxOvK_KmuXeOejoJjFc.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Ejemplo de la época surrealista de Miró, («el más surrealista de los pintores», según Bretón) y que arrasó en la exposición colectiva de la Peinture surréaliste de París de ese año. Buenas noticias, ya que el artista se estaba muriendo literalmente de hambre. Probablemente por ello veía cosas como este «Carnaval del Arlequín», en el que se mezcla el sueño, el delirio y los recuerdos de la infancia.'
        }, {
            id: 2,
            url: 'https://static4.museoreinasofia.es/sites/default/files/styles/foto_horizontal_normal/public/obras/AS10530_0.jpg?itok=Zb7KfARP',
            class: 'div-contenido-img-vertical',
            info: 'Salvador Dalí met Luis Buñuel at the Residencia de Estudiantes in Madrid, and formed an intellectual group with Federico García Lorca and Pepín Bello, among others. One result of the relationship between the filmmaker and the painter is the scripts for the best-known Surrealist films, Un chien andalou (An Andalusian Dog, 1929) and L’âge d’or (The Golden Age, 1930), as well as an oil portrait Dalí did in 1924 of his friend Buñuel. In the painting, currently in the Museo Reina Sofía collection, Dalí abandons the Cubist proposals of the years immediately before in order to pursue the aesthetics of the return to Classicism prevalent in continental Europe in the mid-1920s. However, the stark structure of the volumes is reminiscent of a typically Cubist way of working, helping to bring out Buñuel’s forceful personality, his head and shoulders powerfully set against the tiny buildings of the landscape behind him.'
        }, {
            id: 3,
            url: 'https://static5.museoreinasofia.es/sites/default/files/styles/foto_horizontal_normal/public/obras/DE00190.jpg?itok=mAwrUg_X',
            class: 'div-contenido-img-horizontal',
            info: 'José Moreno Villa: Moreno Villa fue un escritor, pintor y crítico de arte que fue una figura importante en el movimiento surrealista español.'
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

export default SurrealismoList
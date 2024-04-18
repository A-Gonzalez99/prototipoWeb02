import "./exploradorList.css"

function ExplorarList() {

    const db = [
        {
            id: 0,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/0e/0e0f/0e0f9742-3806-468f-ac41-72e2511a34ca/c582b55b-039f-4cc5-94ed-0081a6f7f25f_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Bajo un escenario arquitectónico una Victoria alada corona con laurel a David, quien sujetando la espada con una mano mira directamente a la cabeza decapitada de Goliath, depositada sobre las piezas de una armadura. Tres putti completan el conjunto. Uno de ellos toca un instrumento mientras otro acerca a la Victoria la corona real destinada a David. El tema representado alude a un pasaje del Antiguo Testamento (Samuel 17, 12-58) que narra como David, joven pastor hebreo y futuro rey de Judá, se enfrentó con el gigante Goliath para salvar a su pueblo. Este lienzo está considerado como una de las obras maestras de la producción de Poussin. En él, se aprecia con claridad la influencia de Tiziano, tanto en la técnica pictórica general como en los modelos formales de los amorcillos. También aparece una de las características más personales del artista: la mezcla de un asunto mitológico, con la Victoria y los putti, y bíblico, en el tema central del rey David. Este cuadro ingresó en las Colecciones Reales a través de los herederos del pintor Maratta. En 1746 se cita en los inventarios del Palacio de La Granja de San Ildefonso, de donde pasó al Palacio de Aranjuez.'
        }, {
            id: 1,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/88/8820/88200f2e-b0e0-4842-9192-7fa5fc2f5890/8d7d0277-ed9a-498d-b539-f948c7057e85_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Se trata de una escena de carácter pagano, en la que se representa la ofrenda que los bacantes, o seguidores de Baco, hacían a su dios. En el centro un sacerdote ofrece el sacrificio sobre un altar, ante la estatua de la divinidad coronada de hojas de vid. Alrededor, los asistentes a la fiesta beben o se muestran absolutamente ebrios y dormidos merced al efecto del vino. Esta escena mitológica demuestra la influencia que la tradición pictórica del Barroco tuvo en Houasse, recordando a ciertas escenas de Rubens, filtradas a través de autores como Antoine Coypel. Pero también se advierten ecos de la pintura de Tiziano, especialmente en la figura femenina dormida en el lateral derecho.'
        }, {
            id: 2,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/5a/5aa9/5aa9dcdd-3e53-40bd-84f4-d5afad8cbfdd/128f9564-43a8-4ae6-8183-84c6da85cc8c_832.jpg',
            class: 'div-contenido-img-vertical',
            info: 'Obra cumbre de la retratística romántica española y el más atractivo de los retratos femeninos de su autor, es, sin duda, la obra más emblemática de las colecciones del siglo XIX del Museo del Prado. Amalia de Llano y Dotres (Barcelona, 1821- Madrid, 06/07/1874) contaba con treinta y dos años cuando Madrazo la retrató. Casó el 12/10/1839 con Gonzalo José de Vilches y Parga (1808 - 1879), que sería I conde de Vilches desde 1848, del que el Prado conserva dos retratos (P2879 y P02887). Destacada defensora de la causa monárquica desde la caída de Isabel II, fue escritora aficionada, llegando a publicar las novelas Berta y Lidia. Unida por una gran amistad a Federico de Madrazo, quizá ésto explique el especial encanto y el primor exquisito que el pintor supo alcanzar en este retrato. La Condesa frecuentó la casa de los Madrazo, especialmente con motivo de sus veladas musicales, en las que incluso llegó a cantar, acompañada del piano.'
        }, {
            id: 3,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/80/8019/8019517e-1974-404d-8794-00ff38dbfcfe/93870cb2-b20a-4360-bb33-2bcf0fb34887_832.jpg',
            class: 'div-contenido-img-vertical',
            info: 'Aunque no consta que se hiciera para la Torre de la Parada, su tema nos invita a relacionar esta obra con los cuadros destinados a ese pabellón de caza. A diferencia de lo que ocurrió con otros pintores, el estilo de Velázquez no puede describirse en términos de progresión lineal, pues muchos de los caracteres de su pintura aparecen a lo largo de gran parte de su carrera. Por ello, las obras que no se encuentran mínimamente documentadas ofrecen serios problemas de datación a los historiadores. Un ejemplo de ello es esta cabeza de venado, que ha sido fechada entre 1626 y 1636. Su calidad, su tema y su autoría han hecho pensar que fue obra destinada a alguno de los Sitios Reales, y los historiadores llaman la atención sobre la posibilidad de que sea la misma que aparece descrita en el inventario del Alcázar de Madrid de 1637, donde se escribe un rótulo que decía: Le mató el rey nuestro señor Felipe quarto el año de 1626. Esta misma obra apareció descrita en diferentes inventarios hasta 1747; y se ha supuesto que a causa del mal estado en que quedó tras el incendio del Alcázar de 1734 acabó saliendo de las Colecciones Reales. La referencia al año 26 ha servido a quienes identifican el cuadro con el inventario para fechar la obra, aunque no faltan quienes creen que pudo haber una errata, y tratarse realmente de 1636. Otros afirman que la obra citada en este año corresponde con la Cuerna de venado que guarda Patrimonio Nacional. Independientemente de su fecha y de su origen, se trata de una pintura de gran calidad, que por su frescura, inmediatez y naturalismo alguna vez ha sido calificada como retrato de un animal; y cuyo tema era muy habitual en la Corte española, por cuanto casi todos nuestros reyes desarrollaron una auténtica pasión por la caza. En este sentido, hay que llamar la atención sobre la abundancia de temas cinegéticos relacionados con el arte y aún la poesía cortesanos, de lo que son testigos las obras que decoraban la Torre de la Parada o libros enteros como el Anfiteatro de Felipe el Grande, que su autor -José de Pellicer- dedicó a alabar a un rey capaz de matar de un certero arcabuzazo un toro en la Plaza Mayor de Madrid (Texto extractado de Portús, J.: Velázquez. Guía, Museo del Prado, 1999, p. 152).'

        }, {
            id: 4,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/11/1104/1104a62a-edeb-4449-ab0b-7f8c57edee3a/c038244a-5626-40dc-a45c-844ba0b63810_832.jpg',
            class: 'div-contenido-img-vertical',
            info: `Noble viuda romana y madre de cinco hijos, Santa Paula decidió retirarse en el desierto y abandonar su vida mundana para dedicarse a la oración y a la penitencia. En el año 385 dejó Roma acompañada de su hija Eustoquia y llegó hasta Antioquía, donde se reunió con San Jerónimo, con el que emprendió una vida eremítica. La pintura de Lorena muestra el momento de su partida, ambientada en una recreación fantástica del puerto de Ostia.
            Las escenas de puerto constituían en 1639-1640 uno de los temas favoritos de Lorena y su inclusión en la serie del Retiro permite sospechar que el artista gozó de cierta libertad en el tratamiento de los asuntos representados. En la pintura del Prado se observan buena parte de las características habituales de este género, como la intensa luz dorada que ciega al espectador desde el último plano de la composición o la secuencia de edificios que, en ciertos casos, remiten a modelos reales como la Villa Medici o el faro de Génova, el cual constituye en este caso la última referencia arquitectónica en la línea del horizonte. Frente a otras vistas de puertos, en esta el tema alcanza un gran desarrollo, forzando la presencia de un extenso primer plano en el que se sitúa la comitiva que despide a la santa. Su presencia quizás no convenció totalmente al artista (o a futuros clientes), como podría pensarse por las soluciones buscadas en ocasiones posteriores, como en el Puerto con el embarco de Santa Úrsula (1641, Londres, National Gallery) o en el Puerto con el embarco de la reina de Saba (1648, Londres, National Gallery) donde el tema principal perdió protagonismo. Trató en otra ocasión el mismo asunto aprovechando, invertido, el grupo de Santa Paula y su familia, aunque varió completamente el tamaño, el formato y la arquitectura (1648-50, Épinal, Musée Départamental d Art Ancien et Contemporain).`

        }, {
            id: 5,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/e3/e3c5/e3c594b5-e334-45f7-9550-ea0665be3f30/57e3c7de-521f-4172-be81-92c7b3745dd6_832.jpg',
            class: 'div-contenido-img-vertical',
            info: 'El personaje aquí retratado fue identificado en base a una estampa fechada en 1613 incluida en la obra del licenciado Cevallos: Tractatus de cognitione per viam violentiae in causis ecclesiasticis. Cevallos fue un abogado afincado en Toledo en 1600, en donde ocupó varios cargos. Para los especialistas del cretense, es uno de sus retratos más importantes, una de sus cumbres en la producción más tardía. Álvarez Lopera le puso en relación con el retrato de Fray Hortensio Félix de Paravicino (Museum of Fine Arts, Boston:) Ambos comparten un artificio que no se encuentra en otros retratos, y que parece haber sido privativo de algunos retratos de la época final: aunque enfrentado al espectador, el efigiado desvía la mirada creando una sensación casi imperceptible, pero a la vez llena de efectividad, de movimiento instantáneo. Por otro lado, la técnica sintética de ambos, de una extraordinaria economía y levedad de materias. Procede de la quinta del duque del Arco, de donde pasó a la colección real. Se registra en el Prado desde 1834.'
        }, {
            id: 6,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/10/10a7/10a7a263-cec9-4bbc-8385-6c8c1893b4dd/7050eeac-d917-4dd9-a457-2dc6ef2a78ca_832.jpg',
            class: 'div-contenido-img-vertical',
            info: 'Entre los éxitos iconográficos conseguidos por Bartolomé Esteban Murillo se encuentran sus versiones de la Inmaculada Concepción. El modelo que propuso el pintor conquistó al público no solo por la belleza y la ternura que emanan sus figuras, sino también porque entroncaban a la perfección con la intensa devoción popular que se vivía en el siglo XVII. En Sevilla, como en otras ciudades de la Europa católica, la creencia en torno a la concepción sin pecado original de María suscitó importantes debates, puesto que no fue compartida por todas las órdenes religiosas. Mientras que los dominicos se mantenían escépticos, los franciscanos y los jesuitas perseveraban en la aprobación de este dogma, movilizando al pueblo hispalense y elevando la causa a un problema de índole nacional. Los recursos culturales fueron ampliamente utilizados para convencer a los fieles a través de la conquista de los sentidos, organizándose certámenes literarios que dieron como resultado pegadizos cánticos y encargándose numerosas imágenes de la Inmaculada.'
        }, {
            id: 7,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/12/1291/1291c3a0-4822-443b-b93e-4f2b84efd8fc/d40d80cf-7ab0-4c15-ad62-d139e056186a_832.jpg',
            class: 'div-contenido-img-vertical',
            info: 'La primera referencia conocida a este retrato data de 1746, cuando se levantó el inventario de las pinturas del palacio de La Granja. Allí se atribuyó a Velázquez, y se identificó con su misma mujer, es decir, Juana, hija del pintor Pacheco. Se especifica también que lleva una tabla en la mano. El interés por vincular retratos anónimos con la biografía de sus autores fue frecuente durante los siglos XVIII y XIX, y del mismo no se salvó Velázquez, cuyo rostro, el de su mujer y el de sus hijas se quiso reconocer en varias de sus obras. El único retrato probable que se conoce de Juana Pacheco es el rostro de la Virgen de La Adoración de los Magos (P01166), uno de cuyos personajes se ha identificado sin duda con su padre Francisco. La comparación entre ambos cuadros sugiere que, para realizar éste, utilizó un modelo diferente. En cualquier caso, independientemente de que pueda estar basada en un personaje real, la pintura tiene un contenido que trasciende el campo del retrato y apunta al género histórico. Los datos para la identificación de su tema son la condición femenina del personaje, su colocación de perfil, su mirada fija al frente y el objeto que porta. Se trata de una superficie plana de forma cuadrangular que generalmente se considera una tabla y a veces se ha creído un lienzo. Lo sujeta con la izquierda, lo que le permite mantener libre la mano derecha con objeto de escribir o pintar sobre él.'
        }, {
            id: 8,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/28/2825/2825df10-4b18-4763-bae8-37020028b31d/faa1d45a-e708-40b2-957f-ecf73b75338c_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'El tapiz resultante de este cartón formaba parte de los que iban a decorar el comedor (?) de los Príncipes de Asturias (el futuro Carlos IV y su esposa María Luisa de Parma) en el palacio de El Pardo, encargo de 1786-1787. Por su formato estrecho y alargado y su forzada perspectiva de abajo arriba su destino era la decoración de una sobreventana, que formaba pareja con una escena de vuelo de pájaros, cuyo cartón se ha perdido, conocida sólo por el tapiz. La serie iba a consistir en trece tapices con el tema de las Cuatro Estaciones y otras escenas campestres, descritas como "Pinturas de asuntos jocosos y agradables". Los tapices no llegaron a colgarse en su destino por la muerte de Carlos III, ocurrida en diciembre de 1788. El Museo del Prado conserva once de los cartones (P02896, P00796, P6323, P02895, P02524, P00797, P00793, P00795, P00798, P07346, P00794) y uno de los bocetos preparatorios (P02782).'
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

export default ExplorarList
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
        },{
            id: 9,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/5e/5e17/5e177409-2993-4240-97fb-847a02c6496c/397fb2fb-8ef1-483f-b2d5-2b46100444e0_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Finalizada la guerra de la Independencia en 1813, el regreso a España de Fernando VII se había conocido desde diciembre de 1813, por el tratado de Valençay, así como su consiguiente entrada en Madrid. A principios de febrero la cuestión era inminente, habiéndole enviado el Consejo de la Regencia las condiciones para su vuelta al trono, en primer lugar, la jura de la Constitución de 1812. Su llegada a la capital iba a coincidir con la primera conmemoración del alzamiento del pueblo de Madrid contra los franceses el 2 de mayo de 1808. Entre febrero y marzo de 1814, el infante don Luís María de Borbón y Vallabriga, presidente del Consejo de la Regencia, así como las Cortes y el Ayuntamiento de Madrid, comenzaron la preparación de los actos para la entrada del rey. En la bibliografía sobre "El 2 de mayo de 1808 en Madrid" o "La lucha con los mamelucos" (P748), y su compañero, El "3 de mayo de 1808 en Madrid" o "Los fusilamientos", se fue consolidando, erróneamente, la idea de que estas obras fueron pintadas con un destino público en las calles de la capital.'
        }, {
            id: 10,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/cc/cc12/cc128630-425b-4752-a805-008d26556bbb/1bb6eb26-b3ad-41ea-9696-791ba611e31f_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Obra maestra de toda la producción de Gisbert, este impresionante cuadro es también una de las indiscutibles y más bellas cumbres alcanzadas por el género histórico en España durante el antepasado siglo. Constituye además uno de los grandes manifiestos políticos de toda la historia de la pintura española en defensa de la libertad del hombre aplastada por el autoritarismo, siendo uno de los contados casos en que su claro mensaje propagandístico fue inspirado directamente por la oficialidad gubernamental. En efecto, el cuadro no ingresó en el Prado tras su paso por las Exposiciones Nacionales de Bellas Artes, como era habitual, sino que fue encargado directamente para el museo durante la regencia de María Cristina de Habsburgo-Lorena por el gobierno liberal de Práxedes Mateo Sagasta (1825-1903) al alicantino Antonio Antonio Gisbert, ya entonces consagrado como artista abanderado de este partido desde que pintara muchos años antes su cuadro de Los Comuneros, en pugna -más ideológica y estética que real- con Casado del Alisal, maestro representante de la oficialidad conservadora, publicándose la noticia del encargo en los diarios madrileños incluso algunos días antes de su designación oficial.'
        }, {
            id: 11,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/c0/c0d4/c0d44a18-bef0-407c-befe-5f85ad56062e/edf08793-4e09-4156-a98a-02253d9f5784_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Este monumental lienzo ha sido considerado tradicionalmente como la obra maestra de José de Madrazo y la pintura más emblemática del Neoclasicismo español, exponiéndose en el Prado desde su apertura en 1819, en la llamada Galería de Artistas Contemporáneos. Por ello, adquirió desde entonces una enorme fama y reconocimiento en los ambientes artísticos oficiales del siglo XIX, así como en la historiografía del arte español hasta nuestros días.'
        }, {
            id: 12,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/9f/9fdc/9fdc7800-9ade-48b0-ab8b-edee94ea877f/41866afd-6396-45e7-bd26-944263cf92f7_832.jpg',
            class: 'div-contenido-img-vertical',
            info: 'Es una de las obras de mayor tamaño de Velázquez y en la que puso un mayor empeño para crear una composición a la vez compleja y creíble, que transmitiera la sensación de vida y realidad, y al mismo tiempo encerrara una densa red de significados. El pintor alcanzó su objetivo y el cuadro se convirtió en la única pintura a la que el tratadista Antonio Palomino dedicó un epígrafe en su historia de los pintores españoles (1724). Lo tituló En que se describe la más ilustre obra de don Diego Velázquez, y desde entonces no ha perdido su estatus de obra maestra. Gracias a Palomino sabemos que se pintó en 1656 en el Cuarto del Príncipe del Alcázar de Madrid, que es el escenario de la acción. El tratadista cordobés también identificó a la mayor parte de los personajes: son servidores palaciegos, que se disponen alrededor de la infanta Margarita, a la que atienden doña María Agustina Sarmiento y doña Isabel de Velasco, meninas de la reina. Además de ese grupo, vemos a Velázquez trabajar ante un gran lienzo, a Mari Bárbola y Nicolasito Pertusato, que azuza a un mastín, a la dama de honor doña Marcela de Ulloa, junto a un guardadamas, y, al fondo, tras la puerta, asoma José Nieto, aposentador. En el espejo se ven reflejados los rostros de Felipe IV y Mariana de Austria, padres de la infanta y testigos de la escena. Los personajes habitan un espacio modelado no sólo mediante las leyes de la perspectiva científica sino también de la perspectiva aérea, en cuya definición representa un papel importante la multiplicación de las fuentes de luz.'
        }, {
            id: 13,
            url: 'https://arthive.com/res/media/img/orig/work/a40/167305.webp',
            class: 'div-contenido-img-vertical',
            info: 'La descripción de la obra aún no existe. A lo mejor, aparecerá más tarde. Sigue las actualizaciones de Tesauro.'
        }, {
            id: 14,
            url: 'https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2024/01/11120109/ventana-con-lluvia-1-1024x683.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'El alféizar de una ventana. Sobre ella, un par de frascos vacíos, un tapón perdido, una radio antigua encima de unos cartones. A través del cristal, la lluvia, el muro de otra casa, una verja, un árbol. La pintura de Isabel Quintanilla (Madrid, 1938-Brunete, 2017)'
        },  {
            id: 15,
            url: 'https://www.museunacional.cat/sites/default/files/017453-000.JPG',
            class: 'div-contenido-img-horizontal',
            info: 'Esta obra está seleccionada para el proyecto «Partage Plus – Digitising and Enabling Art Nouveau for Europeana»'
        }, {
            id: 16,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/a1/a10f/a10f154c-0bc3-4004-b9e6-55a7b9b2c7cb/994331bf-f2a6-4ad3-9d27-1dbc41984828_832.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Nacido en el seno de una familia de la alta sociedad madrileña, estudió leyes y se doctoró en derecho civil en 1867. Compaginó sus estudios legales con su afición por las Bellas Artes, pues desde 1874 estudió pintura en la Escuela de Bellas Artes junto a Carlos de Haes, y acudió al Museo del Prado '
        }, {
            id: 17,
            url: 'https://www.rubendeluis.com/wp-content/uploads/2018/06/Carlos-de-Haes-guadarrama.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Haes nacido en Bélgica aunque pasó gran parte de su vida en España, tiene una educación y formación importante en la pintura de Flandes de las escuelas del norte por lo que esta influencia se verá reflejado en su pintura. A lo largo del siglo XIX hay dos líneas bien marcadas como es la pintura clasicista que comienza ya en el siglo XVII con artista como Claudio de Lorena.'
        }, {
            id: 18,
            url: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/27/2749/274911df-f921-44de-b06f-81d98c001004/1cf75d52-b69f-4681-bcf8-b6cde5756d08.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Madrid, 1833-Venecia, 1908). Pintor español, considerado como el iniciador del paisajismo moderno español. Comenzó su formación artística con su hermano el grabador Bernardo Rico, con quien colaboró en el taller de su tío Calixto Ortega Matamoros en sus trabajos como ilustrador. Estudió en la Escuela de Bellas Artes de San Fernando de Madrid, con los paisajistas Genaro Pérez Villaamil, Fernando Ferrant y Vicente Camarón. En el Liceo de Madrid, trabó amistad con Rosales, Fortuny y Raimundo de Madrazo. Obtuvo una beca para continuar sus estudios en París en 1862, donde tuvo la oportunidad de conocer la obra de Meissonier y Daubigny, en cuyo taller comenzó a trabajar desde 1863. Fue amigo de alguno de los primeros artistas impresionistas, como es el caso de Camille Pissarro. Estuvo en Suiza y Gran Bretaña, además de rea­lizar frecuentes viajes a Venecia en compañía de Mariano Fortuny. Concurrió asiduamente a las Exposiciones Nacionales de Bellas Artes, obtuvo tercera medalla en 1860 por el lienzo titulado Un país, y segunda medalla en 1864 y 1867. Asimismo, remitió sus lienzos a las Universales de París de 1878 y 1888, en las que fue galardonado con tercera y segunda medalla, respectivamente. Gran parte de sus obras se hallan en colecciones particulares extranjeras debido a la estrecha relación comercial que mantuvo con el marchante francés de arte Adolphe Goupil. En sus lienzos se pueden rastrear influencias de la escuela de Barbizon, Turner, Claudio de Lorena y el preciosismo de Fortuny. En sus primeros paisajes manifiesta una visión romántica que, tras una etapa realista evoluciona hasta los finales con influencias de Fortuny. Como ilustrador colaboró en La Ilustración Española y Americana, publicación de la que fue director en 1895. Fue comendador de la orden de Isabel la Católica y recibió la cruz de la Legión de Honor francesa.'
        },{
            id: 19,
            url: 'https://cms.guggenheim-bilbao.eus/uploads/2012/05/2003-Saura-Memoria-y-recuerdo-1024x823.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'Nacido en Huesca en 1930, Antonio Saura residió con su familia en Madrid, Valencia y Barcelona. Desde temprana edad acompañó a su padre en sus visitas al Museo del Prado, donde quedó profundamente impactado por el Cristo crucificado (1632) de Diego Velázquez y el Perro semihundido (1821–23) de Francisco de Goya, que marcarían de forma singular la temática de su futura obra. Autodidacta, comenzó a pintar y escribir en 1947 durante la convalecencia de una larga enfermedad. Entre 1948 y 1950 realizó la serie Constelaciones en la que queda patente la influencia de la pintura de Miró de los años 30 y 40, así como de la concepción artística del surrealismo agrupado en torno a la figura de André Breton. Entre 1953 y 1955 residió en París donde participó, en un principio, en las actividades del grupo surrealista que lideraba Breton, conociendo después el informalismo francés, llamado art autre, y la pintura norteamericana.'
        }, {
            id: 20,
            url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Fusilamiento_de_Torrijos_%28Gisbert%29.jpg',
            class: 'div-contenido-img-horizontal',
            info: 'El pronunciamiento de Torrijos fue un pronunciamiento encabezado por el general y político liberal José María Torrijos que tuvo lugar en 1831 en España al final del reinado de Fernando VII y cuyo objetivo era poner fin al absolutismo y restaurar la Constitución de 1812. Torrijos desembarcó en la costa de Málaga procedente de Gibraltar el 2 de diciembre de 1831 junto a sesenta hombres que lo acompañaban, pero cayeron en la trampa que les habían tendido las autoridades absolutistas y fueron detenidos. Nueve días después, el 11 de diciembre, Torrijos y 48 de sus compañeros supervivientes fueron fusilados sin juicio previo en la playa de San Andrés de Málaga, un hecho que quedó inmortalizado por un soneto de José de Espronceda titulado A la muerte de Torrijos y sus compañeros y por un famoso cuadro que pintó en 1888 Antonio Gisbert.'
        }, {
            id: 21,
            url: 'https://gregorioprieto.org/wp-content/uploads/p4687.webp',
            class: 'div-contenido-img-horizontal',
            info: 'Gregorio Prieto (1897-1992) El centro del mundo, ca. 1965247x 298 cm, Óleo sobre lienzo Pintura España- Madrid Expuesto en sala'
        }, {
            id: 22,
            url: 'https://gregorioprieto.org/wp-content/uploads/p1001.webp',
            class: 'div-contenido-img-vertical',
            info: 'Gregorio Prieto (1897-1992) Retrato de Federico García Lorca, 1936 57.5x 38 cm Óleo sobre papel. Pintura España - Madrid Expuesto en sala'
        }

    ]

    function mesclarImgs(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const shuffledDB = mesclarImgs(db);


    return (
        <>        
            {shuffledDB.map((b) => <ExplorarConstructor key={b} id={b.id} url={b.url} info={b.info} class={b.class} />)}
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
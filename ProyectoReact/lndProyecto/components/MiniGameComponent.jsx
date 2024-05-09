import "./miniGameComponent.css"
import React, { useState, useEffect } from 'react';
import moviesService from "../src/services/firebase/movies.service";
import scoreService from "../src/services/firebase/score.config";


function MiniGameComponent() {
    // Score bd
    const [score, setScore] = useState([]);
    // Pinturas bd
    const [pinturas, setPinturas] = useState([]);
    let [contadorNivel, setContadorNivel] = useState(0);
    const [contadorPuntos, setContadorPuntos] = useState(0);
    const [contadorIntento, setContadorIntento] = useState(0);
    const [idJugagor, setIdJugagor] = useState(-1);
    const [searchTerm, setSearchTerm] = useState('');
    const [completado, setCompletado] = useState(false);
    const [shuffledDB, setShuffledDB] = useState([]);
    const [palabras, setPalabras] = useState([]);

    

    const getAllMovies = () => {
        moviesService.getAllMovies().then((items) => {
            let auxMovies = []
            items.forEach(item => {
                const key = item.key
                const data = item.val()

                auxMovies.push({
                    name: data.name,
                    url: data.url
                })

            })
            setPinturas([...auxMovies]);
        })
    }

    function mesclarImgs(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function desorderArray(array) {
        // Create a copy of the original array to avoid modifying it directly
        const disorderedArray = [...array];
      
        // Iterate through the array from the end, swapping elements with random indexes
        for (let i = disorderedArray.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1)); // Generate random index within bounds
          [disorderedArray[i], disorderedArray[randomIndex]] = [disorderedArray[randomIndex], disorderedArray[i]];
        }
      
        return disorderedArray;
      }


    const getAllScores = () => {
        scoreService.getAllScores().then((items) => {
            let allSores = [];
            items.forEach(item => {
                const key = item.key;
                const data = item.val();
                allSores.push({
                    key: key,
                    name: data.name,
                    points: data.points
                });
            });
            allSores.sort((a, b) => b.points - a.points);
            const top5 = allSores.slice(0, 5);
            setScore([...top5]);

        }).catch((err) => {
            console.error(err);
        });
    }
    
    useEffect(() => {
        getAllScores();
    }, []); 
    
    const addNewJugador = () => {
        const nameJugador = document.getElementById("name-player").value;
        const scoreJugador = 0;
        scoreService.addScore(score.length + 1, nameJugador, scoreJugador)
        setIdJugagor(score.length + 1)
    }

    const updateScoreJugador = (puntos) => {
        scoreService.updateScore(idJugagor, parseInt(puntos))
    }

    // Logica del Juego
    const [cClick, setCClick] = useState(2);

    function startJuego ()  {
        const n = document.getElementById("name-player").value
        if (n.length > 2 && n.length < 14) {
            setCClick((cClick-1))
        
                getAllMovies()
               
                document.getElementById("start-game").textContent="Si x"+cClick;
                document.getElementById("info-nombre").textContent="¿Quieres jugar con este nombre?"
                
                setShuffledDB(mesclarImgs(pinturas))
                document.getElementById("imgJuego").src = shuffledDB[0].url

                document.getElementById("nombre-jugador-juego").textContent = n
                document.getElementById("div-start-game").style.visibility = "hidden"
               
                addNewJugador()
                siguienteCuadro()
         
           
        }
    };



    const handleInputChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleClick = () => {
        if (pinturas.length > contadorNivel && completado == false) {
            verificar()
        }
    };

    function verificar () {
        let texto = document.getElementById("name").value
        if (texto == shuffledDB[contadorNivel].name) {
            if (contadorIntento == 0) { setContadorPuntos(contadorPuntos + 50), document.getElementById("texto-intento-0").textContent = texto, updateScoreJugador(contadorPuntos + 50) }
            if (contadorIntento == 1) { setContadorPuntos(contadorPuntos + 25), document.getElementById("texto-intento-1").textContent = texto, updateScoreJugador(contadorPuntos + 25) }
            if (contadorIntento == 2) { setContadorPuntos(contadorPuntos + 5), document.getElementById("texto-intento-2").textContent = texto, updateScoreJugador(contadorPuntos + 5) }
            setSearchTerm('')
            document.getElementById("boton-seguir").style.visibility = "visible"
            setCompletado(true)
            document.getElementById('imgJuego').style.filter = 'blur(0px)';

        } else {
            if (contadorIntento == 0) {
                document.getElementById("intento-0").className = "intento-fallido"
                document.getElementById("intento-1").className = "div-game-points-intento-actual"
                document.getElementById("texto-intento-0").textContent = texto
                document.getElementById('imgJuego').style.filter = 'blur(10px)';
            }

            if (contadorIntento == 1) {
                document.getElementById("intento-1").className = "intento-fallido"
                document.getElementById("intento-2").className = "div-game-points-intento-actual"
                document.getElementById("texto-intento-1").textContent = texto
                document.getElementById('imgJuego').style.filter = 'blur(5px)';
            }

            setContadorIntento(contadorIntento + 1);

            if (contadorIntento == 2) {
                document.getElementById("intento-2").className = "intento-fallido"
                document.getElementById("texto-intento-2").textContent = texto
                document.getElementById('imgJuego').style.filter = 'blur(0px)';
                document.getElementById("boton-seguir").style.visibility = "visible"
                setContadorIntento(0);
                setCompletado(true)
            }

        }
    }

    const siguienteCuadro = () => {
        if(shuffledDB.length!=contadorNivel+1){

            setContadorNivel(contadorNivel + 1);
            document.getElementById("imgJuego").src = shuffledDB[(contadorNivel+1)].url
            document.getElementById("boton-seguir").style.visibility = "hidden"
            setCompletado(false)
            document.getElementById("texto-intento-0").textContent = ""
            document.getElementById("texto-intento-1").textContent = ""
            document.getElementById("texto-intento-2").textContent = ""
            document.getElementById("intento-0").className = "div-game-points-intento-actual"
            document.getElementById("intento-1").className = "div-game-points-intento"
            document.getElementById("intento-2").className = "div-game-points-intento"
            document.getElementById('imgJuego').style.filter = 'blur(15px)';
            setSearchTerm('')
            setContadorIntento(0)
            console.log("Nivel: "+(contadorNivel+1)+" Nombre: "+shuffledDB[(contadorNivel+1)].name)

        }
        
        if(shuffledDB.length-1==contadorNivel){
            document.getElementById("boton-seguir").textContent="Fin del juego"
        }
    }

    return (
        <>
            <div className="div-conteiner">
                <div className="div-main-game">

                    <h6>MINI JUEGO</h6>
                    <div className="div-ranking"><p id="nombre-jugador-juego"></p><i class="fa-solid fa-ranking-star"></i></div>

                    <div className="div-count"><i class="fa-solid fa-star"></i><p>{contadorPuntos}</p></div>

                    <div>
                        <div className="div-game-img">
                            <img className="imgblur" id="imgJuego" src="" />
                        </div>
                    </div>

                    <div className="div-game-points">
                        <button id="boton-seguir" onClick={siguienteCuadro}>Siguiente cuadro</button>
                        <div id="intento-0" className="div-game-points-intento-actual"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <p id="texto-intento-0"></p></div>
                        <div id="intento-1" className="div-game-points-intento"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <p id="texto-intento-1"></p></div>
                        <div id="intento-2" className="div-game-points-intento"><i class="fa-solid fa-star"></i>
                            <p id="texto-intento-2"></p></div>
                    </div>

                    <div className="div-game-input">
                        <div className="div-input-count">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Ingrese el nombre del cuadro"
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                />
                                <button onClick={handleClick}><i class="fa-solid fa-share"></i></button>
                            </div>

                            <select multiple onChange={(event) => {
                                setSearchTerm(event.target.value); // Update searchTerm on change
                            }}>
                                
                                {
                                    
                                
                                    desorderArray(pinturas).map((m) => (
                                        <option 
                                        key={m.name} 
                                        value={m.name}>
                                        {m.name}
                                        </option>
                                    ))
                                }
                            </select>

                        </div>
                    </div>
                </div>
            </div>

            <div id="div-start-game" className="div-ranking-page">
                <div className="div-registro-main">
                    <div className="div-registro-top"><i class="fa-solid fa-ranking-star"></i></div>

                    {score.map((s,index)=> (
                        <div className="div-registro-top-nombre"><h6>{index+1} </h6><h6>{'...'+s.name}</h6><h6>{'...'+s.points}</h6></div>
                    ))
                    }                 
                    
                    <input
                        type="text"
                        id="name-player"
                        name="name-player"
                        placeholder="Nombre del jugador (3-13 Letras)"
                    />
                    <p id="info-nombre"> </p>
                    <button id="start-game" onClick={startJuego}>Iniciar</button>
                </div>
            </div >
        </>
    )
}

export default MiniGameComponent
import "./miniGameComponent.css"
import React, { useState, useEffect } from 'react';
import moviesService from "../src/services/firebase/movies.service";
import scoreService from "../src/services/firebase/score.config";


function MiniGameComponent() {

    // Pinturas bd
    const [movies, setMovies] = useState([]);
    const getAllMovies = () => {
        moviesService.getAllMovies().then((items) => {
            let auxMovies = []
            items.forEach(item => {
                const key = item.key
                const data = item.val()

                auxMovies.push({
                    name: data.name,
                    price: data.price,
                    url: data.url
                })

            })
            setMovies([...auxMovies]);
            const movieNames = auxMovies.map((movie) => movie.name);
            const filtered = movieNames.filter((name) =>
                name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredWords(filtered); // Update filteredWords state
        })
    }

    // Score bd
    const [score, setScore] = useState([]);
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
        colocarPuntos();
    }, []);

    const colocarPuntos =()=>{
        for(var x=0;x<score.length;x++){
            document.getElementById("name-top-"+x).textContent='...'+score[x].name
            document.getElementById("score-top-"+x).textContent='...:'+score[x].points
        }
        console.log("Nombres puestos")
    }

    const addNewJugador = () => {
        // Obtener el nombre del jugador desde un elemento HTML (supongo que es un input)
        const nameJugador = document.getElementById("name-player").value;
        // Puntaje inicial del jugador
        const scoreJugador = 0;
        // Llamar a la función addScore del servicio scoreService
        scoreService.addScore(score.length+1,nameJugador, scoreJugador)
        SetIdJugagor(score.length+1)
    }

    const updateScoreJugador = (puntos) => {
        scoreService.updateScore(idJugagor, parseInt(puntos))
    }

    // Logica del Juego
    const startJuego = () => {
        const n = document.getElementById("name-player").value
        if(n.length>2 && n.length<14){

            getAllMovies()
            document.getElementById("imgJuego").src = movies[contador].url
            document.getElementById("div-start-game").style.visibility = "hidden"
            document.getElementById("nombre-jugador-juego").textContent=n
            addNewJugador()
        }
    };

    const [contador, setContador] = useState(0);
    const [contadorPuntos, setContadorPuntos] = useState(0);
    const [contadorIntento, setContadorIntento] = useState(0);
    const [idJugagor, SetIdJugagor] = useState(-1);

    // State variables
    const [searchTerm, setSearchTerm] = useState('');
    const [completado, setCompletado] = useState(false);

    // Function to handle input change
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleClick = () => {
        if (movies.length > contador && completado==false) {            
            verificar()      

        }
    };

    const verificar=()=>{
        let texto=document.getElementById("name").value
        
        if(texto==movies[contador].name){
            if(contadorIntento==0){setContadorPuntos(contadorPuntos+50),document.getElementById("texto-intento-0").textContent=texto, updateScoreJugador(contadorPuntos+50)}
            if(contadorIntento==1){setContadorPuntos(contadorPuntos+25),document.getElementById("texto-intento-1").textContent=texto, updateScoreJugador(contadorPuntos+25)}
            if(contadorIntento==2){setContadorPuntos(contadorPuntos+5),document.getElementById("texto-intento-2").textContent=texto, updateScoreJugador(contadorPuntos+5)}
            setSearchTerm('')
            document.getElementById("boton-seguir").style.visibility="visible"
            setCompletado(true)
            document.getElementById('imgJuego').style.filter = 'blur(0px)';

        }else{
            if(contadorIntento==0){
                document.getElementById("intento-0").className="intento-fallido"
                document.getElementById("intento-1").className="div-game-points-intento-actual"
                document.getElementById("texto-intento-0").textContent=texto
                document.getElementById('imgJuego').style.filter = 'blur(10px)';

            }
            if(contadorIntento==1){
                document.getElementById("intento-1").className="intento-fallido"
                document.getElementById("intento-2").className="div-game-points-intento-actual"
                document.getElementById("texto-intento-1").textContent=texto
                document.getElementById('imgJuego').style.filter = 'blur(5px)';

            }
            setContadorIntento(contadorIntento + 1);

            if(contadorIntento==2){
                document.getElementById("intento-2").className="intento-fallido"
                document.getElementById("texto-intento-2").textContent=texto
                document.getElementById('imgJuego').style.filter = 'blur(0px)';
                document.getElementById("boton-seguir").style.visibility="visible"
                setContadorIntento(0);
                setCompletado(true)

            }
        }
      


    }
    
    const siguienteCuadro=()=>{
        setContador(contador + 1);
        document.getElementById("imgJuego").src = movies[contador + 1].url
        document.getElementById("boton-seguir").style.visibility="hidden"
        setCompletado(false)
        document.getElementById("texto-intento-0").textContent=""
        document.getElementById("texto-intento-1").textContent=""
        document.getElementById("texto-intento-2").textContent=""
        document.getElementById("intento-0").className="div-game-points-intento-actual"
        document.getElementById("intento-1").className="div-game-points-intento"
        document.getElementById("intento-2").className="div-game-points-intento"
        document.getElementById('imgJuego').style.filter = 'blur(15px)';
        setSearchTerm('')


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

                            <select multiple hidden={!searchTerm.length} onChange={(event) => {
                                setSearchTerm(event.target.value); // Update searchTerm on change
                            }}>
                                {movies.map((m) => (
                                    <option key={m.name} value={m.name}>
                                        {m.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                </div>
            </div>

            <div id="div-start-game" className="div-ranking-page">
                
                <div className="div-registro-main">
                    <div className="div-registro-top"><i class="fa-solid fa-ranking-star"></i></div>
                    <div className="div-registro-top-nombre"><h6>1 </h6><h6 id="name-top-0"></h6><h6 id="score-top-0"></h6></div>
                    <div className="div-registro-top-nombre"><h6>2 </h6><h6 id="name-top-1"></h6><h6 id="score-top-1"></h6></div>
                    <div className="div-registro-top-nombre"><h6>3 </h6><h6 id="name-top-2"></h6><h6 id="score-top-2"></h6></div>
                    <div className="div-registro-top-nombre"><h6>4 </h6><h6 id="name-top-3"></h6><h6 id="score-top-3"></h6></div>
                    <div className="div-registro-top-nombre"><h6>5 </h6><h6 id="name-top-4"></h6><h6 id="score-top-4"></h6></div>
                    <input
                        type="text"
                        id="name-player"
                        name="name-player"
                        placeholder="Nombre del jugador (3-13 Letras)"
                    />
                    <button onClick={startJuego}>StarGame</button>
                </div>

            </div>
        </>
    )
}

export default MiniGameComponent
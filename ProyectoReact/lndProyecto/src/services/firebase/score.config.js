import {get, ref,push, update} from "firebase/database";

import db from "./firebase.config.js"

const refScores = ref(db, "/Score")

const getAllScores = () =>{
    return get(refScores)
}

const addScore = (key,name, points) => {
    // Agregar un nuevo registro de puntuación
    
    const newScoreRef = ref(db, `/Score/${key}`);
    const newScoreKey = newScoreRef.key;
    update(newScoreRef, {
        name: name,
        points: points
    });
    return newScoreKey;
};

const updateScore =  (key, newPoints) => {
    try {
        // Obtener una referencia al puntaje del jugador usando la clave proporcionada
        const scoreRef = ref(db, `/Score/${key}`);
        console.log(key)
        console.log(newPoints)

        // Actualizar el puntaje del jugador
        update(scoreRef, {
            points: newPoints
        });

        console.log("Puntaje actualizado correctamente.");
    } catch (error) {
        console.error("Error al actualizar puntaje: ", error);
        throw error;
    }
};

export default {
    getAllScores,
    addScore,
    updateScore
}
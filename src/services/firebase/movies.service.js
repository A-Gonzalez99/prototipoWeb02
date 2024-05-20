import {get, ref} from "firebase/database";

import db from "./firebase.config.js"

const refMovies = ref(db, "/Movies")

const getAllMovies = () =>{
    return get(refMovies)
}

export default {
    getAllMovies
}
import "./miniGameComponent.css"
import React, { useState, useEffect } from 'react';


function MiniGameComponent() {

    const words = ['apple', 'banana', 'orange', 'grape', 'strawberry', 'mango', 'pineapple'];

    // State variables
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredWords, setFilteredWords] = useState([]);

    // Function to handle input change
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Effect to filter words based on search term
    useEffect(() => {
        const filtered = words.filter((word) => word.toLowerCase().includes(searchTerm));
        setFilteredWords(filtered);
    }, [searchTerm, words]);


    return (
        <div className="div-conteiner">
            <div className="div-main-game">

                <h6>MINI JUEGO</h6>
                <div className="div-ranking"><p>Nombre</p><i class="fa-solid fa-ranking-star"></i></div>


                <div className="div-count"><i class="fa-solid fa-star"></i><p>12123</p></div>

                <div>
                    <div className="div-game-img"></div>
                </div>

                <div className="div-game-points">
                    <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><p>---</p></div>
                    <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><p>---</p></div>
                    <div><i class="fa-solid fa-star"></i><p>---</p></div>
                </div>


                <div className="div-game-input">
                    <div>
                        <form action="your_script.php" method="post">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ingrese el nombre del cuadro"
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <button type="submit"><i class="fa-solid fa-share"></i></button>
                        </form>
                        <select multiple hidden={!searchTerm.length} onChange={(event) => {
                            setSearchTerm(event.target.value); // Update searchTerm on change
                        }}>
                            {filteredWords.map((word) => (
                                <option key={word} value={word}>
                                    {word}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MiniGameComponent
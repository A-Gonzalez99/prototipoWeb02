import "./rssPage.css"



function RssPage() {

    function OpenRss(url) {
        open(url, url)

    }

    return (
        <>
            <div className="div-pincipal">
                <h6>RSS</h6>
                <p>Cuadros:</p>
                <p>Realismo: <button onClick={() => OpenRss("./src/xml/realismo.xml")}><i class="fa-solid fa-square-rss"></i></button></p>
                <p>Surreamismo: <button onClick={() => OpenRss("./src/xml/surrealismo.xml")}><i class="fa-solid fa-square-rss"></i></button></p>
                <p>Hiperrealismo: <button onClick={() => OpenRss("./src/xml/hiperrealismo.xml")}><i class="fa-solid fa-square-rss"></i></button></p>
                <p>Impresionismo: <button onClick={() => OpenRss("./src/xml/impresionismo.xml")}><i class="fa-solid fa-square-rss"></i></button></p>
                <p>Expresionismo: <button onClick={() => OpenRss("./src/xml/expresionismo.xml")}><i class="fa-solid fa-square-rss"></i></button></p>

                <br />
            </div>

        </>
    )
}
export default RssPage
import React, { useState, useEffect } from "react"

// create your App component here

function App() {

    const [image, setImage] = useState("Loading...")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(data => setImage(data.message))
    }, [])

    return (
        <div>
            {image === "Loading..." ? <p>{image}</p> : <img src={image} alt="A Random Dog" /> }
        </div>
    )
}

export default App
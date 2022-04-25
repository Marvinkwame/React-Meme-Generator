import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])




    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [event.target.name] : event.target.value 
            }
        })
    }


    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form-input" 
                    onChange={handleChange}
                    name="topText" 
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="form-input" 
                    onChange={handleChange}
                    name="bottomText" 
                    value={meme.bottomText}
                />
                <button className="form-button" onClick={getMemeImage}>Get A New Meme Image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

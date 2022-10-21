import React, {useState, useEffect} from "react";

export default function AppBody () {
    // states for current meme
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "/placeholderimage.jpg" 
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect( () => {
        /* without using async await */
        // fetch("https://api.imgflip.com/get_memes")
        //     .then(res => res.json())
        //     .then(data => setAllMemes(data.data.memes))

        /* using async await */
        async function getMeme () {
           const res = await fetch("https://api.imgflip.com/get_memes")
           const data = await res.json()
           setAllMemes(data.data.memes)
        }
        getMeme()
        console.log("fetched data sucessfully")
    }, [])

    function randomUrlGenerator() {
        console.log("inside random func" )
        let memeUrl = allMemes[Math.floor(Math.random()*allMemes.length)].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeUrl
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMememData => 
            ({
                ...prevMememData,
                [name] : value
            })
        )
    }    

    return (
        
            <div className="form">
                <input 
                    type="text" 
                    className="input-text" 
                    placeholder="Top Text..." 
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    className="input-text" 
                    placeholder="Bottom text..." 
                    name="bottomText" 
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="gen-button"
                    onClick={randomUrlGenerator}
                >
                    Get your random meme! 
                </button>
                <div className="meme-image-container">
                    <div className="meme">
                        <img src={meme.randomImage} className="meme-image"/>
                        <h2 className="meme--text top">{meme.topText}</h2>
                        <h2 className="meme--text bottom">{meme.bottomText}</h2>
                    </div>
                </div>
                <p className="hint-text"><b>NOTE:</b> Not all images from the net supports "Top" and "Bottom" text. You'll know what I meme...</p>
            </div>

    );
}
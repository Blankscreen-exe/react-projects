import React, {useState} from "react";

import data from "../../database/data";
const memesData = data.data.memes



export default function AppBody () {
    // states for current meme
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "/placeholderimage.jpg" 
    })

    function randomUrlGenerator() {
        console.log("inside random func" )
        let memeUrl = memesData[Math.floor(Math.random()*memesData.length)].url;
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
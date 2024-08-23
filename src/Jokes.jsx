import { useState, useEffect } from "react";
import './jokes.css';

export default function Jokes() 
    {
    // Url for random jokes
    let url = "https://official-joke-api.appspot.com/random_joke";
    let [joke, setJoke] = useState({});

    // fetching jokes url and parsing it from json format to readable format
    let handleJokes= async () => 
        {
        // async and await is used to make sure first the joke is fetched and then parse it into readable format
            let response = await fetch(url);
            let jsonRes = await response.json();

        /* setup and puchline are two keys, But .setup and .punchline are the objects of jsonRes
          that has value attached to it  */
        setJoke(
            {
                setup: jsonRes.setup, punchline: jsonRes.punchline  
            });
        };

    // useEffect trigger when any state changes due to event listener, also render at very first time page loads
    useEffect (() => 
        {
        /* getFirstJoke function helps to fetch the url and output the jokes only 
         at first time when page loads (triggered by useEffect as state changes) */
        async function getFirstJoke() 
            { 
                let response = await fetch(url);
                let jsonRes = await response.json();

            setJoke( 
            {
                setup: jsonRes.setup, punchline: jsonRes.punchline 
            });
            } getFirstJoke();
        }, []);    /* here [] <-- this indicates 'No Dependencies' i.e the code in useEffect runs only once i.e when page loads 
        and give first jokes then it won't run , 'No Dependencies' simply means it run once and doesn't run on updates i.e when state changes */

    return (
        <div>
            <h1>Get Random Jokes</h1>
                <div className="jokes">
                    <h2>{joke.setup}</h2>
                    <h2>{joke.punchline}</h2> 
                    
                <button className="button" onClick={handleJokes}>Get new Jokes</button>
                </div>
        </div>
    );
}
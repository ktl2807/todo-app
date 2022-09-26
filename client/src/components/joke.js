import Axios from "axios";
import React, { useEffect } from "react";

function Jokes () {
    const [joke, setJokes] = React.useState([])
    
    const fetchJokes = async ()=>{
        Axios.get(`https://api.chucknorris.io/jokes/random?category=dev`)
        .then(res=>{
            let jokeObj = {id:res.data.id, value:res.data.value}
            setJokes([jokeObj,...joke])
        })
        .catch(function(error){
            console.log(error)
        })
        }
    
    useEffect(()=>{
        if (joke.length <3){
        fetchJokes()
        }
    },[joke]);
    
    
    return (
        <>
        {console.log(joke)}
        {joke.map((item)=>{
            return (
                <React.Fragment key={item.id}>
                    <div className="joke">
                        <span className="joke--text">😜 : {item.value}</span>
                    </div>
                    
                </React.Fragment>
                
            )
        })}
        
        
        </>
    
    
    
    )

}

export default Jokes;
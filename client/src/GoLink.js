import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from './firebase'

function GoLink(props){

    const {code} = useParams()
    console.log(code)
    const navigate = useNavigate();
    const [ url, setUrl ] = useState(null)


    useEffect(() => {

        let query = db.collection("urls").where("code","==", code);
        query.onSnapshot((data) =>{
            console.log(data)
            if(data.empty){
               // return navigate("/")
            }
            let finalData = data.docs[0].data();
           setUrl(finalData.url)    
          

        });

    },[]);

    
    useEffect(() =>{
        if(url) window.location.replace(url);
    },[url])




    return (
        <div>
        </div>
    )

     
}

export default GoLink;



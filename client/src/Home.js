import './App.css';
import React, { useEffect, useState } from "react";
import  {db}  from "./firebase"
import NewLink from './NewLink'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";
  import  GoLink  from './GoLink';
  import ShortUniqueId from 'https://esm.sh/short-unique-id';
  import {CopyToClipboard} from 'react-copy-to-clipboard';





function Home(){
const uid = new ShortUniqueId({ length: 5 });
const [code, setCode] = useState(null);
const [url, setUrl] = useState();
const [newUrl, setNewUrl] = useState('');
const [showUrl, setShowUrl] = useState(false);
const [copy, setCopy] = useState(false);

useEffect(() => {
    if(code){ 
        setNewUrl(`http://localhost:3000/l/${code}`)
        db.collection("urls").add({
            url: url,
            code: code
        })
    }
}, [code])


const handleSubmit =  (e) => {
    e.preventDefault();
    let newCode = uid();
    setCode(newCode)
    setShowUrl(showUrl => !showUrl)

}


return(

    <div className="container">
        <div className='inner'>
            <form id="form" onSubmit={handleSubmit}>
                <input id="url" type="text" value={url} placeholder="Shorten your link" onChange={e => setUrl(e.target.value)}></input>
                <input id="submitbtn" type="submit" value="Shorten" />
            </form>
           
            { showUrl &&
           <div className="new-link">
                <span>{url}</span>
                <div>
                    <Link to={`/l/${code}`} style={{marginRight: '15px'}}>
                        <span>{newUrl}</span>
                    </Link>
                    <CopyToClipboard text={newUrl}>
                        <button className='copy-btn'>Copy</button>
                    </CopyToClipboard> 
                </div>  

            </div>
            }
 
            
        </div>
    </div>
)
}


export default Home;
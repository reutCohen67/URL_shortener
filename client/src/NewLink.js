
import ShortUniqueId from 'https://esm.sh/short-unique-id';
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from './firebase'
import  GoLink from './GoLink';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function NewLink(props){


   return(
    <div className="result-container">
        <p>{props.oldUrl}</p>
        <p >{props.newUrl}</p>
        <button>Copy</button>
    </div>
   ) 

}



export default NewLink;


/**     <form id="form" onSubmit={handleSubmit}>
            <input id="url" type="text" value={url} placeholder="Shorten your link" onChange={e => setUrl(e.target.value)}></input>
            <input id="submitbtn" type="submit" value="Shorten" />
        </form>
        <div className="new-link">
        { showUrl &&
        <>
         <p>{url}</p>
         <Link to={`/l/${code}`}>{newUrl}</Link>
        </>
        }
        </div>
        <div>
        <CopyToClipboard text={newUrl}>
            <button>Copy</button>
        </CopyToClipboard>
        </div> */
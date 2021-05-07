import React,{useState,useEffect} from 'react'
import publicIco from '../images/publicimage.png'
import privateIco from '../images/image-5.png'
import layercss from './layer.css'
import { getAllByPlaceholderText } from '@testing-library/dom'

export default function Layout() {
const [ownerName, setownerName] = useState('')
const [repoName, setrepoName] = useState('')
const [repoUrl, setrepoUrl] = useState('')
let getInputOwner=(e)=> {
    setownerName(e.target.value)

}
let getInputRepo=(e)=> {
    setrepoName(e.target.value)  
}
function getData(){
    let url=`${ownerName}/${repoName}`
    setrepoUrl(url)
   
}
useEffect(() => {
    let newData={
        'profile':repoUrl
    }
   const result = fetch('http://localhost:2000/api/find',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newData)
    }
  

    
    ).then(res => res.json())
    .then(json => console.log(json));

}, [repoUrl])
    return (
        <div className="layer1">
            Create a new repository
            <div className="sub-layer-1">
                A repository contains all project files, including the revision history. Already have a project repository elsewhere?
                </div><div className="sub-layer-1-link"> <a href="google.com">Import a repository</a>
            </div>
            <div className="layer2-head">
                <div className="owner-name">Owner<font color="red">*</font></div>
                <div className="repository"> Repository name<font color="red">*</font></div></div>
            <div className="input-boxes-1">
                <div className="input-box-user">
                    <input height="50px" size="10"  onChange={e => getInputOwner(e)} ></input> /
                    </div>
                <div className="input-box-repo"> <input onChange={e => getInputRepo(e)} type="text"></input></div>

            </div> <div className="ending">Great repository names are short and memorable. Need inspiration? How about special-meme? </div>
            <div class="total-wrap"> <div className="area"> <div className="describe"> <div className="description">Description</div> <div className="optional">(optional)</div></div>
                <div className="describe-box">
                    <input className="describe-input" type="text"></input>
                </div></div>
                <div className="sub-layer-3"></div>
            </div>

            <div className="sublayer-4">
                <div className="public-container">

                    <div className="radio"> <input className="radio-switch" type="radio" value="public" checked="checked" ></input></div>
                    <div className="public-icon"><img height="30px" src={publicIco} ></img></div>
                    <div className="public-writting">
                        <div className="public"><b>Public</b></div>
                        <div className="anyone">Anyone on the internet can see this repository. You choose who can commit. </div>
                    </div>


                </div>
                <div className="private-container">

                    <div className="radio"> <input className="radio-switch" type="radio" value="public" ></input></div>
                    <div className="private-icon"><img height="30px" src={privateIco} ></img></div>
                    <div className="private-writting">
                        <div className="private"><b>Private</b></div>
                        <div className="anyone">You choose who can see and commit to this repository. </div>
                    </div>
                </div>
            </div>
            <div className="sublayer-5-container">
                <div className="sublayer-5">
                    <div className="head-sublayer-5">
                        Initialize this repository with:
           </div>
                    <div className="subhead-sublayer-5">
                        Skip this step if you’re importing an existing repository.</div>
                </div>
                <div className="layer-for-box">
                    <div className="sublayer-1">
                        <div className="checkbox-1">
                            <input type="checkbox" value="1" ></input>
                        </div>
                        <div className="sublayer-1-head">
                            <div className="first-message">  Add a README file</div>   <div className="sublayer-1-subhead">
                                This is where you can write a long description for your project.<a>Learn more.</a>
                            </div>
                        </div>


                    </div>
                    <div className="sublayer-2">
                        <div className="checkbox-2">
                            <input type="checkbox" value="1" ></input>
                        </div>
                        <div className="sublayer-2-head">
                            <div className="first-message-2">Add .gitignore </div>   <div className="sublayer-2-subhead">
                                Choose which files not to track from a list of templates. <a>Learn more.</a>
                            </div>
                        </div>
                    </div>
                    <div className="sublayer-3">
                        <div className="checkbox-3">
                            <input type="checkbox" value="1" ></input>
                        </div>
                        <div className="sublayer-3-head">
                            <div className="first-message-3"> Choose a license </div>   <div className="sublayer-3-subhead">
                                A license tells others what they can and can't do with your code. <a>Learn more.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="btn" type="button" onClick={getData}>Check  Repository</button>
            </div>
        </div>
    )
}

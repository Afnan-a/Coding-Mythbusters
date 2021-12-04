import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import storage from './firebase';
import ListGroup from 'react-bootstrap/ListGroup'
import '../index.js'
const Lessons = () => {
 // define new handler, we need to handel event (e) and the refrence to the file
 const [Url, setUrl] = useState('');
 const [file, setFile] = useState('');
 const [data, setData] = useState([]);
 
 


 const listItem = () => {
   storage.ref().child('lessons/').listAll()
     .then(res => {
       res.items.forEach((item) => {
         setData(arr => [...arr, item.name]);
         storage.ref("lessons").child(item.name).getDownloadURL()
           .then((url) => {
             setUrl(url);
           })
 
       })
     })
     .catch(err => {
       alert(err.message);
     });
 }
 
 const upload = () => {  
   if (file ==  null)
   {
     return;
   }
  
   // sending file to storage
   if (file.size > 160000)
   {
     alert("File too big! Keep it under 160 MB");
     return;
   }
   storage.ref(`/lessons/${file.name}`).put(file);
   alert("Successfully uploaded! Plsease refreash the page");
 }
 
 
 return(
  <div className="Lessons" style={{ marginTop: 250 }}>
   <center>
     <input type="file" accept=".png, .jpg, .jpeg, .pdf, .docx"  onChange={(e) => { setFile(e.target.files[0]) }} />
     <button class="... md:bg-gray-300 md:hover:bg-gray-500 ..." onClick={upload}> Upload </button>
     <br />
     <p> </p>
     <button class=" bg-gray-300 md:hover:bg-gray-500" onClick={listItem}> List Item </button>
       <br /><br />
       </center>
       {
           data.map((val) => ( //val is the name of the file we get from list all, url we get it from geturldownload
             <ListGroup as="ol" numbered>
               <ListGroup.Item as="li"> <a href={Url}>{val}</a> 
               <div class="overflow-auto " style={{textAlign:"center"}}>
                  <button class="bg-gray-300 md:hover:bg-gray-500" onClick={()=>storage.refFromURL(Url).delete().then(()=>alert("Successfully deleted, Please refreash the page!"))}>Delete</button>  
                </div>
               </ListGroup.Item>
  
             </ListGroup>
           ))
       }
  </div>
 
 );
}

export default Lessons;
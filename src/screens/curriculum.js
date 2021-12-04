import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import storage from './firebase';
import ListGroup from 'react-bootstrap/ListGroup'

const Curriculum = () => {
 // define new handler, we need to handel event (e) and the refrence to the file
 const [Url, setUrl] = useState('');
 const [file, setFile] = useState('');
 const [data, setData] = useState([]);

 
 const listItem = () => {
   storage.ref().child('curriculum/').listAll()
     .then(res => {
       res.items.forEach((item) => {
         setData(arr => [...arr, item.name]);
         storage.ref("curriculum").child(item.name).getDownloadURL()
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
   storage.ref(`/curriculum/${file.name}`).put(file);
   alert("Successfully uploaded! Plsease refreash the page");
 }
 
 
 return(
  <div className="Curriculum" style={{ marginTop: 200 }}>
   <center>
     <input type="file" accept=".png, .jpg, .jpeg, .pdf, .docx" onChange={(e) => { setFile(e.target.files[0]) }} />
     <button class="... md:bg-gray-300 md:hover:bg-gray-500 ..." style={{padding: 3}} onClick={upload}> Upload </button>
     <br />
     <p> </p>
     <button class="... md:bg-gray-300 md:hover:bg-gray-500 ..." style={{padding: 2}} onClick={listItem}> List Item </button>
       <br /><br />
  </center>
  <br /><br />
       {
           data.map((val) => ( //val is the name of the file we get from list all, url we get it from geturldownload
             <ListGroup as="ol" numbered>

               <ListGroup.Item as="li"> <a href={Url}>{val}</a> 
               <div class="overflow-auto " style={{textAlign:"center"}}>
               <button class="... md:bg-gray-300 md:hover:bg-gray-500 ..." style={{padding: 1}} onClick={()=>storage.refFromURL(Url).delete().then(()=>alert("Successfully deleted, Please refreash the page!"))}>Delete</button>    
                </div>
               </ListGroup.Item>
             </ListGroup>
           ))
       }  
  </div>
 //style={{padding: 1, textAlign: 'center'style={styles.space}}
 );
}

 
export default Curriculum;
import React, { useEffect, useState } from 'react';
//import { Viewer } from '@react-pdf-viewer/core'; 
//import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
//import '@react-pdf-viewer/core/lib/styles/index.css';
//import '@react-pdf-viewer/default-layout/lib/styles/index.css';
//import { Worker } from '@react-pdf-viewer/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storage } from './firebase';

 
const Curriculum = () => {
  // define new handler, we need to handel event (e) and the refrence to the file
  const [Url, setUrl] = useState('');
  const [file, setFile] = useState('');

  const upload = () => {
    if (file ==  null) 
      return;
    
    // sending file to storage
    storage.ref(`/curriculum/${file.name}`).put(file).on("state_changed", () => {
      storage.ref("curriculum").child(file.name).getDownloadURL().then((Url) => {
        setUrl(Url);
      })
    });

  }

  /*
  const onChange = (e) => {
    const file = e.target.files[0];  // file refrence
    storage.ref( `/curriculum/${file.name}`).put(file).then (() => {
      console.log("Uploaded a file", file.name);
      storage.ref("curriculum").child(file.name).getDownloadURL().then ((url) => {setUrl(url);})
    })
  };*/

  /*return(
   // <input type="file" onChange={onChange}/> // onchange handler for this input
   <div className="Curriculum" style={{ marginTop:250 }}>
    <center>
      <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
      <button onClick={upload}>Upload</button>
      <p><a href={Url}>{Url}</a></p>
      <br />
    </center>
   </div>
   
  );*/
  /*
 const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // for onchange event
 const [pdfFile, setPdfFile]=useState(null);
 const [pdfFileError, setPdfFileError]=useState('');
 
 // for submit event
 const [viewPdf, setViewPdf]=useState(null);
 
 // onchange event
 const fileType=['application/pdf'];
 const handlePdfFileChange=(e)=>{
   let selectedFile=e.target.files[0];
   if(selectedFile){
     if(selectedFile&&fileType.includes(selectedFile.type)){
       storage.ref(`/files/${pdfFile.}`).put(pdfFile);
       let reader = new FileReader();
           reader.readAsDataURL(selectedFile);
           reader.onloadend = (e) =>{
             setPdfFile(e.target.result);
             setPdfFileError('');
           }
     }
     else{
       setPdfFile(null);
       setPdfFileError('Please select valid pdf file');
     }
   }
   else{
     console.log('select your file');
   }
 }
 
 // form submit
 const handlePdfFileSubmit=(e)=>{
   e.preventDefault();
   if(pdfFile!==null){
     setViewPdf(pdfFile);
   }
   else{
     setViewPdf(null);
   }
 }
 return (
 
     <div className="justify-content-md-center" display="flex" text-align="center" align-items="center" text-decoration="none" padding="0">
     <br></br>
  
     <form className='form-group' onSubmit={handlePdfFileSubmit}>
       <input type="file" className='form-control'
         required onChange={handlePdfFileChange}
       />
       {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
       <br></br>
       <br></br>
       <button type="submit" className='btn btn-success btn-lg'>
         UPLOAD
       </button>
     </form>
     <br></br>
     <h4>View PDF</h4>
     <div className='pdf-container'>
       {/* show pdf conditionally (if we have one)  }/*
       {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
         <Viewer fileUrl={viewPdf}
           plugins={[defaultLayoutPluginInstance]} />
     </Worker></>}
 
     {/* if we dont have pdf or viewPdf state is null } /*
     {!viewPdf&&<>No pdf file selected</>}
     </div>
     </div>
 
 ) 
}*/
}
 
export default Curriculum;
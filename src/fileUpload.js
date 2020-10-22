import React ,{ useState } from 'react'


// const FileUpload =()=>{
//     const [uploading, setUploading] = useState(false);
//     const upload =()=>{
//         setUploading(!uploading)
//         // alert("clicked")

//     }


//     return(
//         <>
//         <h1>File Upload component</h1>
//         <button onClick={upload}>Click Me to Upload File
//         {uploading && <input type="file"  /> }
//         </button>
//         </>
//     )

// }
// export default FileUpload

function buildFileSelector(){
    const fileSelector = document.createElement('input');
    console.log("fileSelector",fileSelector)
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
  }
  
  class FileUpload extends React.Component {
    componentDidMount(){
      this.fileSelector = buildFileSelector();
    }
    
    handleFileSelect = (e) => {
      e.preventDefault();
      this.fileSelector.click();
    }
    
    render(){
      return <a className="button" href="" onClick={this.handleFileSelect}>Select files</a>
    }
  }

  export default FileUpload
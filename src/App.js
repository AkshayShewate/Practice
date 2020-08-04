import React, {Component} from 'react';
import axios  from 'axios';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
      state = {
        selectedFile : null
      }

      onFileChange = event => { 
        this.setState({ selectedFile: event.target.files[0] });        
      }; 
       
      onFileUpload = () => { 
        const formData = new FormData(); 

        formData.append( 
          "myFile", 
          this.state.selectedFile, 
          this.state.selectedFile.name 
        );        
     
        console.log(this.state.selectedFile); 
       
        axios.post("api/uploadfile", formData); 
      }; 
       
      fileData = () => { 
       
        if (this.state.selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              <p>File Type: {this.state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>Choose before Pressing the Upload button</h4> 
            </div> 
          ); 
        } 
      }; 
       
      render() { 
       
        return ( 
          <div> 
              <h3> 
                File Upload using React! 
              </h3> 
              <div> 
                  <input type="file" onChange={this.onFileChange} /> 
                  <button onClick={this.onFileUpload}> 
                    Upload! 
                  </button> 
              </div> 
            {this.fileData()} 
          </div> 
        ); 
      } 


}

export default App;

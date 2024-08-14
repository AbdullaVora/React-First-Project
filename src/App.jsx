import { useState } from "react";
import File from "./components/file";
import explorer from "./data/data";
import "./App.css";

const App = () => {
  const [explorData, SetExploreData] = useState(explorer);

  return (
    <>
    <h1>Folder Structure</h1>
    <div style={{border:'4px solid gray', borderRadius: '20px', padding: '20px', boxShadow: '0px 0px 25px 15px rgba(0,0,0,0.4)'}}>
      <File data={explorData} />      
    </div>
    </>
  );
}

export default App;

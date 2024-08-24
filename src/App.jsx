import { useState } from "react";
import File from "./components/file";
import explorer from "./data/data";
import "./App.css";
import ClassFile from "./components/ClassFile";

const App = () => {
  const [explorData, SetExploreData] = useState(explorer);

  return (
    <>
      <h1>Folder Structure</h1>
      <div className="flex" style={{ display: 'flex'}}>
        <div style={{ border: '4px solid gray', borderRadius: '20px', padding: '20px', boxShadow: '0px 0px 25px 15px rgba(0,0,0,0.4)',margin:'0 50px' }}>
      <h2>Function Componenet</h2>
          <File data={explorData} />
        </div>
        <div style={{ border: '4px solid gray', borderRadius: '20px', padding: '20px', boxShadow: '0px 0px 25px 15px rgba(0,0,0,0.4)',margin:'0 50px' }}>
      <h2>Class Componenet</h2>
          <ClassFile data={explorData} />
        </div>
      </div>
    </>
  );
}

export default App;

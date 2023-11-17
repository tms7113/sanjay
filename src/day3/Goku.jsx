import { useState } from "react";
import "./Goku.css";
const Goku = () => {
  const [currentState, setState] = useState("Kaioken");
  return (
    <div className="s" style={{color:"black",fontSize:"30px",fontStyle:"italic"}}>
      <center>
        <input 
          type="checkbox" 
          onChange={() =>
            setState(currentState === "Kaioken" ? "SuperSaiyan" : "Kaioken")
          }
        />
        <h1 className="font-bold ">{currentState}</h1>
      </center>
    </div>
  );
};
export default Goku;
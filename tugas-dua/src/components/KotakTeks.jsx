import React from "react";

const KotakTeks = (props) =>{
   return(
    <div>
        <input id={props.id} type={props.type} placeholder={props.placeholder}/> <br/>
    </div>
   );
}

export default KotakTeks;
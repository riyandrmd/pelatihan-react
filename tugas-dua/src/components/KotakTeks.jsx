import React from "react";

const KotakTeks = ( id, type, placeholder) =>{
   return(
    <div>
        <input id={id} type={type} placeholder={placeholder}/> <br/>
    </div>
   );
}

export default KotakTeks;
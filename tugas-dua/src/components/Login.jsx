import React from "react";
import KotakTeks from "./KotakTeks";
import Tombol from "./Tombol";


const Login =()=>{
    return(
        <>
          <label for="em">Input email :</label>
          <KotakTeks id = "em" type = "email" placeholder = "Input Email"/>
          <label for="pw">Input password :</label>
          <KotakTeks id = "pw" type = "password" placeholder = "input password"/>
          <Tombol/>
        </>
    );

}

export default Login;
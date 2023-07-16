import { StatusBar } from "react-native";
import {Home} from "./src/screens/Home";
import React from "react";

export default function App() {
  return (
    <> 
    <Home />
    <StatusBar 
    backgroundColor={"transparent"}
    translucent
    />
    
    </>

    )
  }

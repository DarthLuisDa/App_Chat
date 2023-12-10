import React, { useState } from "react";
import Login from "/src/pages/Login";
import Sidebar from "/src/pages/Sidebar";
import ChatScreen from "/src/pages/ChatScreen";

import firebaseApp from "./firebase/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  const [canalActivo, setCanalActivo] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    //revisar si se inició o se cerró sesión
    if (usuarioFirebase) {
      setUsuarioGlobal(usuarioFirebase);
      console.log("sesión iniciada");
    } else {
      setUsuarioGlobal(null);
    }
  });

  return (
    <div className="app">
      {usuarioGlobal ? (
        <>
          {" "}
          <Sidebar
            usuarioGlobal={usuarioGlobal}
            setCanalActivo={setCanalActivo}
          />{" "}
          <ChatScreen canalActivo={canalActivo} usuario={usuarioGlobal} />{" "}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

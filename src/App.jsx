import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Contenido from "./components/Contenido";
import ContenidoDos from "./components/ContenidoDos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="m-auto h-screen relative bg-red font-hebo">
        <Header />
        <Contenido/>
        <ContenidoDos/>
      </main>
    </>
  );
}

export default App;

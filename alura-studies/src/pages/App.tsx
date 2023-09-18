import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from './App.module.scss';
import { ITarefa } from "../types/itarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.appStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;

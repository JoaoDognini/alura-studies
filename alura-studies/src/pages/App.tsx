import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from './App.module.scss';

function App() {
  return (
    <div className={style.appStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;

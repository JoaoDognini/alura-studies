import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { ITarefa } from "../../types/itarefa";
import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface CronometroProps {
    selecionado?: ITarefa;
}

export default function Cronometro(props: CronometroProps) {
    const [tempo, setTempo] = useState<Number>();
    if(props.selecionado?.selecionado) setTempo(tempoParaSegundos(props.selecionado.tempo));

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto="Começar"/>
        </div>
    )
}
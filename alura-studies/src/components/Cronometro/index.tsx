import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { ITarefa } from "../../types/itarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface CronometroProps {
    selecionado?: ITarefa;
    finalizarTarefa: () => void;
}

export default function Cronometro(props: CronometroProps) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (props.selecionado?.tempo) setTempo(tempoParaSegundos(props.selecionado.tempo))
    }, [props.selecionado])

    function iniciarCronometro(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1)
                return iniciarCronometro(contador - 1)
            }
            props.finalizarTarefa();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao texto="Começar" onClick={() => iniciarCronometro(tempo)} />
        </div>
    )
}
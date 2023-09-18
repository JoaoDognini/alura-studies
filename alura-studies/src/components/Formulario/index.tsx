import Botao from "../Botao";
import { useState } from 'react';
import style from './Formulario.module.scss';
import { ITarefa } from "../../types/itarefa";
import { v4 as idv4} from 'uuid'

interface FormularioProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export default function Formulario({ setTarefas }: FormularioProps) {
    const [state, setState] = useState({ tarefa: "", tempo: "00:00" });

    function adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        setTarefas(tarefasExistentes =>
            [
                ...tarefasExistentes,
                {
                    ...state,
                    selecionado: false,
                    completado: false,
                    id: idv4()
                }
            ]
        );

        setState({ tarefa: "", tempo: "00:00" })
    }

    return (
        <form
            className={style.novaTarefa}
            onSubmit={evento => adicionarTarefa(evento)}
        >
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    value={state.tarefa}
                    onChange={evento => setState({ ...state, tarefa: evento.target.value })}
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    value={state.tempo}
                    onChange={evento => setState({ ...state, tempo: evento.target.value })}
                    required
                />
            </div>
            <Botao texto="Adicionar" type="submit" />
        </form>)
}
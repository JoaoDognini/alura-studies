import { ITarefa } from '../../types/itarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface ListaProps {
    tarefas: ITarefa[];
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Lista({ tarefas, selecionaTarefa }: ListaProps) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item
                        key={tarefa.id}
                        tarefa={tarefa}
                        selecionaTarefa={selecionaTarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

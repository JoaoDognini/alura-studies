import { ITarefa } from '../../types/itarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface ListaProps {
    tarefas: ITarefa[];
}

export default function Lista({ tarefas }: ListaProps) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Item
                        key={index}
                        tarefa={tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

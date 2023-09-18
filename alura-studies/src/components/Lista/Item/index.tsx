import { ITarefa } from '../../../types/itarefa'
import style from './Item.module.scss'

interface ItemProps {
    tarefa: ITarefa;
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item(props: ItemProps) {
    const itemSelecionado = props.tarefa.selecionado ? style.itemSelecionado : '';
    const itemCompletado = props.tarefa.completado ? style.itemCompletado : '';


    return (
        <li
            className={`${style.item} ${itemSelecionado} ${itemCompletado}`}
            onClick={() => !props.tarefa.completado && props.selecionaTarefa(props.tarefa)}
        >
            <h3>{props.tarefa.tarefa}</h3>
            <span>{props.tarefa.tempo}</span>
            {props.tarefa.completado &&
                <span
                    className={style.concluido}
                    aria-label="tarefa completada"
                />
            }
        </li>
    )
}

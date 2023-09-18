import { ITarefa } from '../../../types/itarefa'
import style from './Item.module.scss'

interface ItemProps {
    tarefa: ITarefa;
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item(props: ItemProps) {
    function itemSelecionado(selecionado: boolean) {
        return selecionado ? style.itemSelecionado : '';
    }
    
    return (
        <li
            className={`${style.item} ${itemSelecionado(props.tarefa.selecionado)}`}
            onClick={() => props.selecionaTarefa(props.tarefa)}
        >
            <h3>{props.tarefa.tarefa}</h3>
            <span>{props.tarefa.tempo}</span>
        </li>
    )
}

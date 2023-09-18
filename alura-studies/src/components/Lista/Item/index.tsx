import { ITarefa } from '../../../types/itarefa'
import style from '../Lista.module.scss'
interface ItemProps {
    tarefa: ITarefa;
}

export default function Item(props: ItemProps) {
    return (
        <li className={style.item}>
            <h3>{props.tarefa.tarefa}</h3>
            <span>{props.tarefa.tempo}</span>
        </li>
    )
}

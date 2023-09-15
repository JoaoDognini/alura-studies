import style from '../Lista.module.scss'
interface ItemProps {
    tarefa: string;
    tempo: string;
}

export default function Item(props: ItemProps) {
    return (
        <li className={style.item}>
            <h3>{props.tarefa}</h3>
            <span>{props.tempo}</span>
        </li>
    )
}

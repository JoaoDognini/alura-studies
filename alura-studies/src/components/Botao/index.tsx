import styles from './Botao.module.scss';

interface BotaoProps {
    texto: string
}

export default function Botao(props: BotaoProps) {
    return (
        <button className={styles.botao}>
            {props.texto}
        </button>
    )
}

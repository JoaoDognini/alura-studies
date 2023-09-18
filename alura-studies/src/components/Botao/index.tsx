import styles from './Botao.module.scss';

interface BotaoProps {
    texto: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void
}

export default function Botao({texto, type = "button", onClick}: BotaoProps) {
    return (
        <button 
            className={styles.botao}
            type={type}
            onClick={onClick}
        >
            {texto}
        </button>
    )
}

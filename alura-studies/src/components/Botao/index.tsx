import styles from './Botao.module.scss';

interface BotaoProps {
    texto: string;
    type?: "button" | "submit" | "reset" | undefined;
}

export default function Botao({texto, type = "button"}: BotaoProps) {
    return (
        <button 
            className={styles.botao}
            type={type}    
        >
            {texto}
        </button>
    )
}

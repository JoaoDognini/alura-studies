import style from './Lista.module.scss';

export default function Lista() {
    const tarefas = [
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'TypeScript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'React',
            tempo: '01:00:00'
        },
    ]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <li className={style.item}>
                        <h3>{tarefa.tarefa}</h3>
                        <span>{tarefa.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

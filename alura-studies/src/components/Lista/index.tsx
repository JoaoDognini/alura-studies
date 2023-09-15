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
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <li>
                        <h3>{tarefa.tarefa}</h3>
                        <span>{tarefa.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

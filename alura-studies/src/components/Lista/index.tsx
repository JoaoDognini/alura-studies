import Item from './Item';
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
                {tarefas.map((tarefa, index) => (
                    <Item
                        key={index}
                        tarefa={tarefa.tarefa}
                        tempo={tarefa.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

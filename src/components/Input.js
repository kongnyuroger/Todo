import useState from 'react';
import styles from '../style.module.css'


const Input = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([])
    const handleChange = (event) => {
        setTodo(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
         setTodoList(tempList);
        console.log(todoList)
    rr}
    return (
        <div className={styles.inputContainer} onSubmit={handleSubmit}>
            <input type="text" value={todo} className={styles.input} onChange={handleChange}></input>
            <button type="submit">Add</button>
        </div>
    )
}
export default Input
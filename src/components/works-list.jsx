import styles from './styles/list-styles.module.css';
import WorkItem from './work-item.jsx';

export default function WorksList(props){
    return <ul className={styles.list}>
        {
            props.worksList.map((work) => (
                <WorkItem work={work}/>
            ))
        }
    </ul>
}
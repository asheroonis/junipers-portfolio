import styles from './styles/list-styles.module.css';
import ProjectItem from './project-item.jsx';

export default function ProjectsList(props){
    return <ul className={styles.list}>
        {
            props.projectsList.map((project) => (
                <ProjectItem project={project}/>
            ))
        }
    </ul>
}
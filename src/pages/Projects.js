import styles from '../App.module.css';
import ProjectsList from '../components/projects-list.jsx';

import { initialProjects } from '../initial-projects.js';
import { useState } from 'react';

function Projects() {
  const [projectsList, setProjectsList] = useState(initialProjects);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>
          Other Projects
        </h1>
      </header>
      <main className={styles.pageBody}>
        <ProjectsList projectsList={projectsList}/>
      </main>
    </div>
  );
}

export default Projects;

import styles from '../App.module.css';
import ProjectsList from '../components/projects-list.jsx';

import { initialProjects } from '../initial-projects.js';
import { useState } from 'react';
import logo from "../nameLogo.png";

function Works() {
  const [projectsList] = useState(initialProjects);

  return (
    <div className={styles.app}>
        <header className={styles.header}>
            <img src={logo} className={styles.pageLogo} alt="Juniper's Name Logo Small"/>
            <h1>
                My Works
            </h1>
        </header>
        <main className={styles.pageBody}>
            <ProjectsList projectsList={projectsList}/>
      </main>
    </div>
  );
}

export default Works;

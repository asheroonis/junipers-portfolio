import styles from '../App.module.css';
import WorksList from '../components/works-list.jsx';

import { initialWorks } from '../initial-works.js';
import { useState } from 'react';

function Works() {
  const [worksList] = useState(initialWorks);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>
          My Works
        </h1>
      </header>
      <main className={styles.pageBody}>
        <WorksList worksList={worksList}/>
      </main>
    </div>
  );
}

export default Works;

import styles from '../App.module.css';
import banner from '../juniperBanner.png';

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={banner} className={styles.banner} alt="Banner with Juniper's Face" />
        <h1>
          Juniper Robinson's Portfolio
        </h1>
      </header>
      <p className={styles.specialHeading}>Hi, welcome! Thanks for taking an interest in my works!</p>
      <main className={styles.pageBody}>
        <div className={styles.bodyText}>
          <p><em>Check out 'My Works' to see the projects I have programmed in the past, and see 'Other Projects' for other endeavours I have undertaken which are not entirely tech-focused but that have still given me some great skills!</em></p>
          <p>My name is June, and I'm a 20-year-old aspiring software developer currently in my final semester of university.</p>
          <p>I first found my love of technology and coding in highschool when I took Digital Technologies. Even using simple Scratch-like technologies, I found myself drawn to the satisfying feeling of putting all the little building blocks together to create something that works well, and I still chase that feeling today when working with advanced and high-level languages.</p>
          <p>Fast-forward a few years and I had dabbled in a few different programming languages in personal projects of mine, and had a couple of simple games under my belt that I had created for highschool assignments, ending with me securing the school-wide 2021 Digital Tech award when I graduated!</p>
          <p>My work in university has only widened my experience with different technologies and has been a great way for me to get accustomed to working in teams with new people and navigating the highs <em>and lows</em> that it brings.</p>
          <p>With my university graduation on the horizon, I am looking to the future and hoping to move up in the world by entering my dream field of work and get stuck into a career I know will keep me engaged, and in an environment I can thrive.</p>
          <br/>
          <p><em>Thanks for reading! I hope to meet in person some day :)</em></p>
          <br/>
        </div>
      </main>
    </div>
  );
}

export default Home;

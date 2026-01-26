import styles from '../App.module.css';

import headshot from "../juniperHeadshot.jpg";
import logo from "../nameLogo.png";

function About() {


  return (
    <div className={styles.app}>
        <header className={styles.header}>
            <img src={logo} className={styles.pageLogo} alt="Juniper's Name Logo Small"/>
            <h1>
                About Me
            </h1>
        </header>
        <main className={styles.aboutBody}>
            <table className = {styles.aboutTable}>
                <tr>
                    <td className={styles.headshot}>
                        <img src={headshot} className={styles.headshot} alt="Juniper's Face"/>
                    </td>
                    <td>
                        <h2>My Mission</h2>
                        <p>My personal mission is driven by innovation and connection.<br/><br/>I place personal, social and professional development at the height of my values - I'm never satisfied without all three of these. I love building new connections with people everywhere I go, and I am always challenging myself to step out of my comfort zone and create new things.</p>
                    </td>
                </tr>
            </table>
            <h2>My Background</h2>
            <p className={styles.backgroundText}>
                My name is Juniper Ashe Violet Robinson, a programmer and budding technical expert based in Auckland, New Zealand. I am a 22-year-old transgender woman; a background that I believe gives me a unique perspective in a market that thrives on new and innovative ideas.<br/><br/>
                I completed a Bachelor of Science degree from the University of Auckland at the end of 2025. This included a double-major in Computer Science, and Information & Technology Management. This was a dream of mine that I have been chasing since I fell in love with the process of digital creation right at the beginning of my highschool experience.<br/><br/>
                I've spent years working in teams of varying sizes and in public-facing roles, building new connections with people every day, to the point where it now comes to me as second nature! I adore the idea of having a role where I get to have the best of both worlds: working on the technical and creative side to make something wonderful, and interacting with people, keeping social and connected - this would be my type of dream role.<br/><br/>
                I have a wide variety of personal projects under my belt that I have built up over the past few years, and I look forward to the opportunity to add a number of future professional projects to my repertoire!
            </p>
      </main>
    </div>
  );
}

export default About;

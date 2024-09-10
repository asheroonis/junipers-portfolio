import styles from '../App.module.css';

function Contact() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>
          Contact Me
        </h1>
      </header>
      <p className={styles.specialHeading}>Like what you've seen?</p>
      <main className={styles.pageBody}>
        <div className={styles.bodyText}>
          <p><em>I'd love to hear from you!</em></p>
          <p>I can primarily be reached via my email:<br/><em>juniperajrobinson@gmail.com</em></p>
          <p>I always aim to respond to any emails within 1-2 days.</p>
          <p>If you'd like to reach me faster, feel free to contact me via my phone number! If you came to this site from my CV, it will be displayed there.</p>
          <br/>
        </div>
      </main>
      <p className={styles.specialHeading}>That's all from me!</p>
      <p className={styles.specialHeading}>It's great to meet you, I hope to see you soon!</p>
      <p className={styles.specialHeading}>-June</p>
    </div>
  );
}

export default Contact;

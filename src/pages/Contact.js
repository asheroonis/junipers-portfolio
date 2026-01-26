import styles from '../App.module.css';
import logo from "../nameLogo.png";
import linkedinLogo from "../linkedin-icon.png";
import emailLogo from "../email-icon.png";

function Contact() {
  return (
    <div className={styles.app}>
        <header className={styles.header}>
            <img src={logo} className={styles.pageLogo} alt="Juniper's Name Logo Small"/>
            <h1>
                Contact Me
            </h1>
        </header>
      <main className={styles.aboutBody}>
          <p><em>I welcome all enquiries in my inbox, feel free to reach out.</em></p>
          <table className={styles.contactDetails}>
              <tr>
                  <td className={styles.contactIconCell}>
                      <img src={emailLogo} alt="Email Icon" className={styles.contactIcon}/>
                  </td>
                  <td className={styles.contactLinkCell}>
                      juniperajrobinson@gmail.com
                  </td>
              </tr>
              <tr>
                  <td className={styles.contactIconCell}>
                      <img src={linkedinLogo} alt="Email Icon" className={styles.contactIcon}/>
                  </td>
                  <td className={styles.contactLinkCell}>
                      <a href={"https://www.linkedin.com/in/juniper-av-robinson"} target={"_blank"} rel={"noreferrer"}>linkedin.com/in/juniper-av-robinson</a>
                  </td>
              </tr>
          </table>
      </main>
    </div>
  );
}

export default Contact;

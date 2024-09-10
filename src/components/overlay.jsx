import styles from './styles/overlay-styles.module.css';

import Slideshow from './slideshow.jsx';

export default function Overlay(props){

    function handleClose(event){
        event.preventDefault();
        props.onClose();
    }

    return <div className={styles.overlay}>
        <div className={styles.infoPanel}>
            <h1>{props.details.name}</h1>
            <table className={styles.extraInfoTable}>
                <tr>
                    <td>
                        <Slideshow images={props.details.fullImageLinks}/>
                    </td>
                    <td className={styles.fullInfo}>
                        <h5>{props.details.dateCompleted}</h5>
                        <h6 className={styles.languageList}>Languages Used: {props.details.languagesUsed}</h6>
                        <p>{props.details.fullDescription}</p>
                    </td>
                    
                </tr>
            </table>
                
                {/* props.details.fullImageLinks.map((images) => (
                    <Slideshow images={props.details.fullImageLinks}/>
                )) */}
                
            <button className={styles.closeOverlay} onClick={handleClose}>Close</button>
        </div>
    </div>
}
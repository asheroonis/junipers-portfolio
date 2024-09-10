import styles from './styles/item-styles.module.css';
import { useState } from 'react';

import Overlay from './overlay.jsx';

export default function ProjectItem(props){
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    if(props.project.displayLeft){
        return (
            <li>
                <div className={styles.leftAligned}>
                    <table className={styles.listTable}>
                        <tr className={styles.infoPreview}>
                            <td className={styles.imageCell}>
                                <img src={process.env.PUBLIC_URL + '/images' + props.project.previewImageLink}></img>
                            </td>
                            <td>
                                <h3>{props.project.name}</h3>
                                <h6>{props.project.dateCompleted}</h6>
                                <p>{props.project.previewDescription}</p>
                                <div>
                                    {showMoreInfo ? (
                                        <Overlay details={props.project} onClose={()=>setShowMoreInfo(false)}/>
                                    ) : (
                                        <button className={styles.readMore} onClick={()=>setShowMoreInfo(true)}>Read More</button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </li>
        );
    }
    else{
        return (
            <li>
                <div className={styles.rightAligned}>
                <table className={styles.listTable}>
                        <tr className={styles.infoPreview}>
                            <td>
                                <h3>{props.project.name}</h3>
                                <h6>{props.project.dateCompleted}</h6>
                                <p>{props.project.previewDescription}</p>
                                <div>
                                    {showMoreInfo ? (
                                        <Overlay details={props.project} onClose={()=>setShowMoreInfo(false)}/>
                                    ) : (
                                        <button className={styles.readMore} onClick={()=>setShowMoreInfo(true)}>Read More</button>
                                    )}
                                </div>
                            </td>
                            <td className={styles.imageCell}>
                                <img src={process.env.PUBLIC_URL + '/images' + props.project.previewImageLink}></img>
                            </td>
                        </tr>
                    </table>
                </div>
            </li>
        );
    }
    
}
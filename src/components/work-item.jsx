import styles from './styles/item-styles.module.css';
import { useState } from 'react';

import Overlay from './overlay.jsx';

export default function WorkItem(props){
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    if(props.work.displayLeft){
        return (
            <li>
                <div className={styles.leftAligned}>
                    <table className={styles.listTable}>
                        <tr className={styles.infoPreview}>
                            <td className={styles.imageCell}>
                                <img src={process.env.PUBLIC_URL + '/images' + props.work.previewImageLink}></img>
                            </td>
                            <td>
                                <h3>{props.work.name}</h3>
                                <h6>{props.work.dateCompleted}</h6>
                                <p>{props.work.previewDescription}</p>
                                <div>
                                    {showMoreInfo ? (
                                        <Overlay details={props.work} onClose={()=>setShowMoreInfo(false)}/>
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
                                <h3>{props.work.name}</h3>
                                <h6>{props.work.dateCompleted}</h6>
                                <p>{props.work.previewDescription}</p>
                                <div>
                                    {showMoreInfo ? (
                                        <Overlay details={props.work} onClose={()=>setShowMoreInfo(false)}/>
                                    ) : (
                                        <button className={styles.readMore} onClick={()=>setShowMoreInfo(true)}>Read More</button>
                                    )}
                                </div>
                            </td>
                            <td className={styles.imageCell}>
                                <img src={process.env.PUBLIC_URL + '/images' + props.work.previewImageLink}></img>
                            </td>
                        </tr>
                    </table>
                </div>
            </li>
        );
    }
    
}
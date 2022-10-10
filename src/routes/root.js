import { Outlet, Link } from "react-router-dom";
import styles from "../css/Root.module.css";
export default function Root() {
    return (
        <>

            <div className={styles['main']}>
                <div className={styles['container']}>
                    <div className={styles['main-title']}>Токарь на станках с числовым программным управлением</div>
                    <div className={styles['content']}>
                        <div className={styles['first-title']}>Изготовление изделий на токарных станках <br />по стадиям технологического процесса
                        </div>
                        <div className={styles['second-title']}>в соответствии с требованиями охраны труда <br />и экологической безопасности
                        </div>
                        <Link className={styles['start-link']} to={`/registration/`}> <div className={styles['start-button']}><div className={styles['start']}>НАЧАТЬ</div></div></Link>
                        <div className={styles['machine']}></div>
                    </div>
                </div>
                <div className={styles['side-info']}>
                    <div className={styles['top-arrow']}></div>
                    <div className={styles['practice']}>ПРАКТИКУМ</div>
                    <div className={styles['bottom-arrow']}></div>
                </div>
            </div>
        </>
    );
}
import React from "react"
import styles from "./Home.sass"
export default function Home() {
    return (
        <div className={styles.Container}>
            <div className={styles.subCon}>
                <div className={styles.sub_cont_one}>
                    <p>+8837728399</p>
                    <p>himanshuUp@gmail.com</p>
                </div>
                <div className={styles.sub_cont_one}>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-pinterest-p"></i>
                </div>
            </div>

        </div>
    )
}
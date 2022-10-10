import { Outlet, Link } from "react-router-dom";
import styles from "../css/Labs.module.css";

import React, { useState } from "react";


export default function Labs() {

    return (
        <>
            <div className={styles["main"]}>
                <div className={styles["header"]}>
                    <div className={styles["title"]}>Изготовление изделий на токарных станках по стадиям технологического процесса <br />в соответствии с требованиями охраны труда и экологической безопасности. ПРАКТИКУМ

                    </div>
                </div>
                <div className={styles["labs-container"]}>
                    
                    <Link to={"/labs/1"} className={styles["lab-link"]}>
                    лаба 1
                    </Link>
                    <Link to={"/labs/2"} className={styles["lab-link"]}>
                    лаба 2
                    </Link>
                    <Link to={"/labs/3"} className={styles["lab-link"]}>
                    лаба 3
                    </Link>
                    <Link to={"/labs/4"} className={styles["lab-link"]}>
                    лаба 4
                    </Link>
                    <Link to={"/labs/5"} className={styles["lab-link"]}>
                    лаба 5
                    </Link>
                </div>
            </div>
        </>
    );
}
import { Outlet, Link } from "react-router-dom";
import styles from "../../css/labs/LabOne.module.css";

import React, { useState } from "react";

export default function LabOne() {
  return (
    <>
      <div className={styles["main"]}>
        <div className={styles["header"]}>
          <div className={styles["navigation"]}>
            <div className={styles["back"]}>
              <img className={styles["navigation-icon"]} src="./img/labs/back.png" />
            </div>
            <div className={styles["forward"]}>
              <img className={styles["navigation-icon"]} src="./img/labs/forward.png" />
            </div>
            <div className={styles["print"]}>
              <img className={styles["navigation-icon"]} src="./img/labs/print.png" />
            </div>
          </div>
          <div className={styles["lab-title"]}>
            <div className={styles["lab-number"]}>Лабораторная работа 1</div>
            <div className={styles["lab-name"]}>НазваниЕ</div>
          </div>
        </div>
        <div className={styles["lab-container"]}>
          <div className={styles["block-left"]}>
            Лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа
          </div>
          <div className={styles["block-right"]}>
            Лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа лабораторная работа лабораторная работа
            лабораторная работа
          </div>
        </div>
      </div>
    </>
  );
}

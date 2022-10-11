import { Outlet, Link } from "react-router-dom";
import styles from "../css/Registration.module.css";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFirstName,
  changeMiddleName,
  changeLastName,
  selectFullname,
} from "../features/fullname/fullnameSlice";

export default function Registration() {


  const [errorMessage, setErrorMessage] = useState(false);

  const fullname = useSelector(selectFullname);
  const dispatch = useDispatch();
  console.log(fullname.firstName);
  const checkFullname = (e) => {
    if (!fullname.firstName || !fullname.middleName || !fullname.lastName) {
      e.preventDefault();
      setErrorMessage(true);
    }
  }

  return (
    <>
      <div className={styles["main"]}>
        <div className={styles["left-block"]}>
          <div className={styles["offer-registration"]}>
            Прежде, чем начинать, <br />
            заполните <b>регистрационную форму</b> <br />
            ниже
          </div>
          <div className={styles["form-registration"]}>
            <input
              value={fullname.lastName}
              className={styles["last-name"]}
              placeholder="Фамилия"
              onChange={(e) => {
                dispatch(changeLastName(e.target.value));
              }}
            />
            <input className={styles["first-name"]}
              value={fullname.firstName}
              placeholder="Имя"
              onChange={(e) => {
                dispatch(changeFirstName(e.target.value));
              }}
            />
            <input className={styles["middle-name"]}
              value={fullname.middleName}
              placeholder="Отчество"
              onChange={(e) => {
                dispatch(changeMiddleName(e.target.value));
              }}
            />
          </div>
        </div>
        <div className={styles["right-block"]}>
          <div className={styles["title"]}>Изготовление изделий на токарных станках по стадиям <br /> технологического процесса в соответствии с требованиями <br />охраны труда и экологической безопасности
          </div>
          <div className={styles["description"]}>Вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст вводный текст </div>
          <div className={styles["buttons-container"]}>
            <Link className={styles['start-link']} to={`/labs/`} onClick={checkFullname}>
              <div className={styles['start-button']}>
                <div className={styles['start']}>НАЧАТЬ</div>
              </div>
            </Link>
            <Link className={styles['help-link']} to={`/help/`}>
              <div className={styles['help-button']}>
                <div className={styles['help']}>ПОМОЩЬ</div>
              </div>
            </Link>
          </div>
          <div className={styles["contacts"]}>
            <div className={styles["address"]}>Корпорация «Диполь» <br />
              Россия, 410012, г. Саратов, ул. Университетская, 28
            </div>
            <div className={styles["phone"]}><img className={styles["icon"]} src={"./img/registration/phone.png"} /><span className={styles["contacts-info"]}>(8452) 51-23-83, 51-49-98</span>
            </div>
            <div className={styles["site"]}><img className={styles["icon"]} src={"./img/registration/site.png"} /><span className={styles["contacts-info"]}>www.tacis-dipol.ru</span></div>
            <div className={styles["mail"]}><img className={styles["icon"]} src={"./img/registration/mail.png"} /><span className={styles["contacts-info"]}>dipol@tacis-dipol.ru</span>
            </div>
          </div>
        </div>
        <div className={styles['side-info']}>
          <div className={styles['top-arrow']}></div>
          <div className={styles['practice']}>ПРАКТИКУМ</div>
          <div className={styles['bottom-arrow']}></div>
        </div>
        <div className={`${styles["whitescreen"]} ${errorMessage ? styles["vis"] : ""} `}></div>
        <div className={`${styles["error-bar"]} ${errorMessage ? styles["vis"] : ""} `}>
          <div className={styles["error-message"]}>Заполните все поля формы!</div>
          <div className={styles["error-icon"]} onClick={() => setErrorMessage(false)} ><img className={styles["error-image"]} src="./img/registration/close.svg" /></div>
        </div>
      </div>
    </>
  );
}

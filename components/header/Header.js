import styles from "./Header.module.scss";
import {useEffect, useState} from "react";
import {ISSERVER} from "../../localNames";

const Header = () => {
    const [itemList, setItemList] = useState();

    useEffect(() => {
        if (!ISSERVER) {
            return setItemList(localStorage.getItem("rates"));
        }
    }, [])

    let rates = JSON.parse(itemList);
    console.log("rates", rates);

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.flex}>
                    <img className={styles.image} src="/logo.png" />
                    <div className={styles.padding}>Конвертер</div>
                </div>
                <div className={styles.flex}>
                    {/*<div className={styles.text}>$ {uahValue}</div>*/}
                    {/*<div className={styles.text}>€ {euroValue}</div>*/}
                </div>

            </div>
        </header>
    );
};
export default Header;

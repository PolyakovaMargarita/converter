import styles from "./Layout.module.scss"
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Head from "next/head";


const Layout = ({ children }) => {
    return (
        <div className={styles.app} id="layout">
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/public/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/public/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/public/favicon-16x16.png"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <Header nb />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;
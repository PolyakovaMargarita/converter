import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Layout from "../components/layout/Layout";

const ErrorPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 4000)
    }, [router])

    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <div className={styles.wrapper}>
                <h1>404</h1>
            </div>
            <div className={styles.wrapper}>
                <h2>
                    The page is not found
                </h2>
            </div>
        </>


    )
}

export default ErrorPage;
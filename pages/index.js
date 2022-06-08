import Head from "next/head";
import Layout from "../components/layout/Layout";
import {useEffect, useState} from "react";
import {ISSERVER} from "../localNames";

export const getStaticProps = async () => {
    const response = await fetch('https://cdn.cur.su/api/nbu.json');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { nbuData: data }
    }
}

const Home = ({ nbuData }) => {

    useEffect(() => {
        if (!ISSERVER) {
            return localStorage.setItem('rates', JSON.stringify(nbuData));
        }
    }, [])



  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
        <>jjjjj</>
    </Layout>
  );
};

export default Home;
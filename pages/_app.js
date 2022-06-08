import '../styles/globals.css'
import Layout from "../components/layout/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
      <>
        <main>
          <Component {...pageProps} />
        </main>
      </>
  )
}

export default MyApp;
import '@/styles/globals.css'
import NextTopLoader from 'nextjs-toploader'
import { Provider } from 'react-redux'
import { store, persistor } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
        crossorigin="anonymous"></script>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NextTopLoader
            color="linear-gradient(90deg, #e33af2, #c4540a)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={true}
            easing="cubic-bezier(0.25, 0.1, 0.25, 1)"
            speed={850}
            shadow="0 0 10px #FF5733, 0 0 5px #FF5733"
            template={
              // Custom loader elements with transitions and animations
              '<div class="bar" role="bar"><div class="peg"></div></div>' +
              '<div class="spinner" role="spinner"><div class="custom-spinner-icon"></div></div>'
            }
            zIndex={1600}
            showAtBottom={false}
          />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}
//#5e0f4e  #111852

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Nav from '@/components/Nav'
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Nav/>
      <Layout>
          <Component {...pageProps} />
      </Layout> 
      <Footer/>
    </div>
  )
}

export default App

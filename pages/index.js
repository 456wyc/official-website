import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>俱往科技</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Header title="俱往矣!" />
        <p className="description">
          数风流人物，还看今朝！
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

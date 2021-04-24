import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>
      <Head>
        <title>Ninja List &mdash; Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>

        <h1 className={styles.title} >Homepage</h1>
        <p className={styles.text} >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio asperiores sequi unde explicabo laborum minima, odit iste maiores quo, amet totam sed aliquid provident error doloribus repudiandae. Id, reprehenderit.
      </p>

        <p className={styles.text} >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio asperiores sequi unde explicabo laborum minima, odit iste maiores quo, amet totam sed aliquid provident error doloribus repudiandae. Id, reprehenderit.
      </p>


        <Link href="/ninjas">
          <a className={styles.btn}> See Ninja Listing</a>
        </Link>

      </div>
    </>
  )
}

import { IndexComponent } from "../src/components/index"
import Head from 'next/head';
import styles from '../styles/Index.module.css';

export default function Index(props) {
    return (
      <div className={styles.container}>
        <Head>
          <title>YuotubeAPI</title>
        </Head>
  
        <main className={styles.main}>
            <IndexComponent
                {...props}
            />
        </main>
  
        <footer className={styles.footer}>
            <p>
                https://www.youtube.com/watch?v=6QjIHnb5Ivs <br/>
                https://youtu.be/6QjIHnb5Ivs?t=37 <br/>
                https://www.youtube.com/watch?v=6QjIHnb5Ivs&feature=youtu.be#t=37 <br/>
                https://youtu.be/6QjIHnb5Ivs <br/>
            </p>
        </footer>
      </div>
    )
  }
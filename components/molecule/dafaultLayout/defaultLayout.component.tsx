import { Footer } from "../footer"
import { Header } from "../header"
import styles from "./defaultLayout.module.css"

type Props = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: Props) => (
  <>
    <Header />
    <main className={styles.container}>{children}</main>
    <Footer />
  </>
)

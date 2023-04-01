import { wrapper } from '../store'
import "../styles/global.css"
import { ThemeProvider } from "next-themes"

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(App)

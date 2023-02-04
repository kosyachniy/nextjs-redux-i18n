import { wrapper } from '../redux/store'
import { appWithTranslation } from 'next-i18next'


const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(appWithTranslation(WrappedApp))

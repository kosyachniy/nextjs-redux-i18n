import { appWithTranslation } from 'next-i18next'

import wrapper from '../redux/store'


const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}


export default wrapper.withRedux(appWithTranslation(App))

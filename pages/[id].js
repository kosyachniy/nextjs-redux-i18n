// import { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
// import { addCount } from '../redux/count/action'
import { wrapper } from '../redux/store'
// import { serverRenderClock, startClock } from '../redux/tick/action'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { changeTheme } from '../redux/actions/main'

export default ({ id }) => {
// export default connect(state => state, {setClientState})(({fromServer, fromClient, setClientState, id}) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const main = useSelector(state => state.main)

  console.log('@@@', main.theme)

  // useEffect(() => {
  //   const timer = props.startClock()

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [props])

  return <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: main.theme == 'light' ? '#fff' : '#000',
      color: main.theme == 'light' ? '#000' : '#fff',
      textAlign: 'center',
      lineHeight: '100vh',
      cursor: 'pointer',
    }}
    onClick={
      () => dispatch(changeTheme(main.theme == 'light' ? 'dark' : 'light'))
    }
  >
    { t('test') } — {main.theme} — { id }
  </div>
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query, locale }) => {
  // store.dispatch(serverRenderClock(true))
  // store.dispatch(addCount())

  return {
    props: {
      id: query.id,
      ...await serverSideTranslations(locale, ['common']),
    },
  }
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCount: bindActionCreators(addCount, dispatch),
//     startClock: bindActionCreators(startClock, dispatch),
//   }
// }

// export default connect(null, mapDispatchToProps)(Other)

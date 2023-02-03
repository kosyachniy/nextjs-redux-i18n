import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../redux/count/action'
import { wrapper } from '../redux/store'
import { serverRenderClock, startClock } from '../redux/tick/action'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default ({ id }) => {
  // useEffect(() => {
  //   const timer = props.startClock()

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [props])

  return <div>{ id }</div>
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query, locale }) => {
  store.dispatch(serverRenderClock(true))
  store.dispatch(addCount())
  console.log(query, locale)
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

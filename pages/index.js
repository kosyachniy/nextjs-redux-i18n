// import { useEffect } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Link from 'next/link'
// import { addCount } from '../redux/count/action'
import { wrapper } from '../redux/store'
// import { serverRenderClock, startClock } from '../redux/tick/action'

const Index = props => {
  // useEffect(() => {
  //   const timer = props.startClock()

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [props])

  return <Link href="/888">Navigate</Link>
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  // store.dispatch(serverRenderClock(true))
  // store.dispatch(addCount())
})

const mapDispatchToProps = (dispatch) => {
  return {
    // addCount: bindActionCreators(addCount, dispatch),
    // startClock: bindActionCreators(startClock, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Index)

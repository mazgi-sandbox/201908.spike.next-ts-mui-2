import { useEffect } from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../lib/store'
import Examples from '../components/examples'

const Page = (props) => {
  useEffect(() => {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    let timer = setInterval(() => props.startClock(), 1000)
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <Examples />
  )
}

Page.getInitialProps = async ({ reduxStore, req }) => {
  reduxStore.dispatch(serverRenderClock())
  return {}
}

const mapDispatchToProps = { startClock }
export default connect(
  null,
  mapDispatchToProps,
)(Page)

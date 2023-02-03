import React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link'
import { setClientState } from '../redux/store'

export default connect(state => state, {setClientState})(({fromServer, fromClient, setClientState, id}) => {
  console.log(id, fromServer, fromClient, setClientState)
  return (
  <div>
    <Link href="/888">Navigate</Link>
    <div>fromServer: {fromServer}</div>
    <div>fromClient: {fromClient}</div>
    <div>
      <button onClick={e => setClientState('bar')}>Set Client State</button>
    </div>
  </div>
)});

export const getServerSideProps = async () => { // { query, locale }
  return {
    props: {
      id: 'alo',
      // ...await serverSideTranslations(locale, ['common']),
    },
  }
}

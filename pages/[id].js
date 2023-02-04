import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '../redux/store'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { changeTheme } from '../redux/actions/main'


export default ({ id }) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const main = useSelector(state => state.main)

  console.log('@@@', main.theme)

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
  return {
    props: {
      id: query.id,
      ...await serverSideTranslations(locale, ['common']),
    },
  }
})

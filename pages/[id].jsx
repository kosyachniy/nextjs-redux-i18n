import { connect } from 'react-redux'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { changeTheme } from '../redux/actions/main'


const Container = ({
  main,
  changeTheme,
  id,
}) => {
  const { t } = useTranslation('common')

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
      () => changeTheme(main.theme == 'light' ? 'dark' : 'light')
    }
  >
    { t('test') } — {main.theme} — { id }
  </div>
}

export default connect(state => state, { changeTheme })(Container)

export const getServerSideProps = async ({ query, locale }) => ({
  props: {
    id: query.id,
    ...await serverSideTranslations(locale, ['common']),
  },
})

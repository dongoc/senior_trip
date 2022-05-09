import { Provider } from 'react-redux'
import { unstable_HistoryRouter as HistoryRouter, Router } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from '@modules/rootStore'
import RootRouter from '@/RootRouter'
import GlobalStyles from '@/GlobalStyles'
import Header from '@/components/Header'
import { BaseContainer, PageContainer } from '@/components/atoms/layouts'

function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <GlobalStyles />
        <Header />
        <PageContainer>
          <BaseContainer>
            <RootRouter />
          </BaseContainer>
        </PageContainer>
      </HistoryRouter>
    </Provider>
  )
}

export default App

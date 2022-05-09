import { Provider } from 'react-redux'
import { BrowserRouter, Router } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from '@modules/rootStore'
import RootRouter from '@/RootRouter'
import GlobalStyles from '@/GlobalStyles'
import Header from '@/components/Header'
import { BaseContainer, PageContainer } from '@/components/atoms/layouts'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <PageContainer>
          <BaseContainer>
            <RootRouter />
          </BaseContainer>
        </PageContainer>
      </BrowserRouter>
    </Provider>
  )
}

export default App

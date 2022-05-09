import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from '@/GlobalStyles'
import RootRouter from '@/RootRouter'
import store from '@modules/rootStore'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <RootRouter />
      </BrowserRouter>
    </Provider>
  )
}

export default App

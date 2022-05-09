import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from '@/GlobalStyles'
import RootRouter from '@/RootRouter'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RootRouter />
    </BrowserRouter>
  )
}

export default App

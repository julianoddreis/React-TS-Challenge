import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'

import { ThemeProvider } from './theme'

/**
 * The starting page for your App
 */

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <main>
          <section>
            <Routes>
              <Route path={'/'} element={<Home />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

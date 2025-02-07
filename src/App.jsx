import Header from './components/layaout/header/header'
import Footer from './components/layaout/footer/footer'
import Content from './components/layaout/content/content'
import Navbar from './components/layaout/navbar/navbar'
import 'tailwindcss'

function App() {
  return (
    <>
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[200px_1fr]">
        <header className="col-span-2 bg-blue-500 p-2 text-white">
          <Header/>
        </header>
        <nav className="row-start-2 bg-gray-200 p-2">
          <Navbar/>
        </nav>
        <main className="row-start-2 bg-gray-100 p-2">
          <Content/>
        </main>
        <footer className="col-span-2 bg-blue-500 text-white p-2">
          <Footer/>
        </footer>
      </div>
    </>
  )
}

export default App

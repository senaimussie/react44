import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"
import "./index.css"


function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
       <main>
       <Body />
       </main>
      </div>
      <Footer />
    </div>
  )
}

export default App

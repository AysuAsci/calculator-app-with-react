
import './App.css'

function App() {
  

  return (
    <>
    <div class="container">
    <Header />
    <Resultarea />
    <Buttonarea />
    </div>

    </>
  )
}

function Header() {
  return(
    <header>
     <h1>calc</h1>
     <img src="images/theme.svg" alt="theme-switcher"/>
    </header>

  )
}

function Resultarea() {
  return(
    <div className="result-area">
            399,981
    </div>

  )
}

function Buttonarea() {
  return(
    <div className="button-area">
            <div class="buttons">
                <button type="button">7</button>
                <button type="button">8</button>
                <button type="button">9</button>
                <button type="button" class="del-button">DEL</button>
                <button type="button">4</button>
                <button type="button">5</button>
                <button type="button">6</button>
                <button type="button">+</button>
                <button type="button">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">-</button>
                <button type="button">.</button>
                <button type="button">0</button>
                <button type="button">/</button>
                <button type="button">x</button>
                <button type="button" class="reset-button">RESET</button>
                <button type="button" class="equal-button">=</button>
            </div>
        </div>

  )
}
export default App

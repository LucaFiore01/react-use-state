import './App.css'
import languages from '../data/languages'

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <h1>Linguaggi del web</h1>
        <p>Scegli un linguaggio dalla lista.</p>
      </header>

      <div className="app__buttons">
        {languages.map(({ id, title }) => (
          <button key={id} className="language-button">
            {title}
          </button>
        ))}
      </div>
    </main>
  )
}

export default App 

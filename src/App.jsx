import './App.css'
import languages from '../data/languages'

function App() {
  const firstLanguage = languages[0]

  return (
    <main className="app">
      <header className="app__header">
        <h1>Linguaggi del web</h1>
        <p>Scegli un linguaggio dalla lista :) </p>
      </header>

      <div className="app__buttons">
        {languages.map(({ id, title }) => (
          <button key={id} className="language-button">
            {title}
          </button>
        ))}
      </div>

      {firstLanguage && (
        <section className="language-card">
          <h2>{firstLanguage.title}</h2>
          <p>{firstLanguage.description}</p>
        </section>
      )}
    </main>
  )
}

export default App 

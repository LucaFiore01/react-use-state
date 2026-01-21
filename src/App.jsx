import './App.css'
import { useState } from 'react'
import languages from '../data/languages'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  const handleButtonClick = (language) => {
    setSelectedLanguage(language)
  }

  return (
    <main className="app">
      <header className="app__header">
        <h1>Linguaggi del web</h1>
        <p>Scegli un linguaggio dalla lista :) </p>
      </header>

      <div className="app__buttons">
        {languages.map((language) => (
          <button
            key={language.id}
            className="language-button"
            onClick={() => handleButtonClick(language)}
          >
            {language.title}
          </button>
        ))}
      </div>

      {selectedLanguage && (
        <section className="language-card">
          <h2>{selectedLanguage.title}</h2>
          <p>{selectedLanguage.description}</p>
        </section>
      )}
    </main>
  )
}

export default App 

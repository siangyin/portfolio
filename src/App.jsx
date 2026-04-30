import Header from "./components/layout/Header"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"

function App() {
  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      <Header />

      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App

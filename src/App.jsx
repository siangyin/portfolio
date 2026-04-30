import Header from "./components/layout/Header"
// import Hero from "./components/sections/Hero"

function App() {
  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      <Header />

      <main>
        <section id="home" className="px-6 py-24">
          Header done. Hero next.
        </section>
      </main>
    </div>
  )
}

export default App

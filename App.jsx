
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h1 className="logo">FURIYA<span>.</span></h1>

        <nav>
          <a href="#">Bosh sahifa</a>
          <a href="#">Kinolar</a>
          <a href="#">Janrlar</a>
          <a href="#">Biz haqimizda</a>
        </nav>

        <button className="login">Kirish</button>
      </header>

      <main className="hero">
        <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjT-DxIEVHV2T7Ykl56ATSKN-upzCFIIUQxx0wt8twA&s=10"
  alt="Toothless"
  className="toothless"
/>
        <div className="hero-content">
          <p className="subtitle">KINOLAR OLAMIGA XUSH KELIBSIZ</p>
          <h2>Har bir kadrda<br /><span>yangi sarguzasht.</span></h2>
          <p className="description">
            Sevimli kinolaringiz, unutilmas qahramonlar
            va cheksiz sarguzashtlar bir joyda.
          </p>
          <button className="explore">Kinolarni ko‘rish →</button>
        </div>
      </main>

      <section className="movies">
        <h2>Ommabop kinolar</h2>
<div className="movie-grid">
  <div className="movie-card">
    <img src="https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" alt="Star Wars"/>
    <h3>Star Wars</h3>
    <p>Fantastika • Sarguzasht</p>
  </div>

  <div className="movie-card">
    <img src="https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="Oppenheimer"/>
    <h3>Oppenheimer</h3>
    <p>Drama • Tarixiy</p>
  </div>

  <div className="movie-card">
    <img src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" alt="The Dark Knight"/>
    <h3>The Dark Knight</h3>
    <p>Jangari • Drama</p>
  </div>
</div>
      </section>

      <footer>© 2026 FURIYA — KINOLAR OLAMI</footer>
    </div>
  )
}

export default App


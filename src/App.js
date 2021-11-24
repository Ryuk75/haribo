import './App.css';
import twitter from './img/iconos/twitter.png'
import facebook from './img/iconos/facebook.png'
import instagram from './img/iconos/instagram.png'
import gummyBlack from './img/gummyBlack.png'

function App() {
  return (
    <div class='container'>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img className="bi" src={gummyBlack} alt='log' width="24" height="24" />
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="none" className="nav-link px-2 link-secondary">Home</a></li>
              <li><a href="none" className="nav-link px-2 link-dark">About us</a></li>
              <li><a href="none" className="nav-link px-2 link-dark">Products</a></li>
              <li><a href="none" className="nav-link px-2 link-dark">Get in touch</a></li>
          </ul>

          <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2">Login</button>
              <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
      </header>

      <main className="px-5 text-center">
          <h1>Cover your page.</h1>
          <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead">
              <a href="none" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
          </p>
      </main>

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
              <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img className="bi" src={gummyBlack} alt='log' width="24" height="24" />
              </a>
              <span className="text-muted">&reg; 2021 Haribo Gummies. Miami, Fl</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3"><a className="text-muted" href="none"><img className="bi" src={facebook} alt='log' width="24" height="24" /></a></li>
              <li className="ms-3"><a className="text-muted" href="none"><img className="bi" src={instagram} alt='log' width="24" height="24" /></a></li>
              <li className="ms-3"><a className="text-muted" href="none"><img className="bi" src={twitter} alt='log' width="24" height="24" /></a></li>
          </ul>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;

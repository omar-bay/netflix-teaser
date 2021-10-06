import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import requests from './requests';
import Nav from './components/Nav';

function App() {
    return (
        <div className="App">
            {/* nav bar */}
            <Nav />
            {/* Banner */}
            <Banner />
            {/* Shows */}
            <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row title="TRENDING"  fetchUrl={requests.fetchTrending} />
            <Row title="TOP RATED"  fetchUrl={requests.fetchTopRated} />
            <Row title="ACTION"  fetchUrl={requests.fetchActionMovies} />
            <Row title="COMEDY"  fetchUrl={requests.fetchComedyMovies} />
            <Row title="HORROR"  fetchUrl={requests.fetchHorrorMovies} />
            <Row title="ROMANCE"  fetchUrl={requests.fetchRomanceMovies} />
            <Row title="DOCUMENTARIES"  fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default App;
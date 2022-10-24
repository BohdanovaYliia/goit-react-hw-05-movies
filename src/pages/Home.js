import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { HomeTitle } from './Home.styled';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    
    useEffect(() => {
        getTrendingMovies().then(setTrendingMovies);
    }, []);
    
    return <section>
        <HomeTitle>Trending today</HomeTitle>
        <MoviesList movies={trendingMovies} link={`movies/`}/>
    </section>
}

export default Home;
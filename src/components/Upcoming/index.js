import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from '../Navbar'; 
import MovieCard from '../MovieCard';

const Upcoming = () => {
  const [apiStatus, setApiStatus] = useState('INITIAL');
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false); // Flag to track if data fetching is in progress

  useEffect(() => {
    const fetchData = async () => {
      if (!isFetching && apiStatus !== 'FETCHING DONE') {
        setApiStatus('FETCHING');
        setIsFetching(true); // Update flag to indicate data fetching has started
        try {
          const api_key = '61120868a294f6f450e48089cf3f188d';
          const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const responseData = await response.json();
          setData(responseData);
          setApiStatus('FETCHING DONE');
        } catch (error) {
          setError(error.message);
          setApiStatus('FETCHING DONE');
        }
      }
    };

    fetchData();

    // Clean up function to reset isFetching flag when component unmounts
    return () => {
      setIsFetching(false);
    };
  }, []); // Empty dependency array means the effect runs only once, similar to componentDidMount

  

  // Function to render the Home page
  const renderHomePage = () => {
    if (!data || !data.results) {
      return null; // Return null if data is not available
    }

    const cardsData = data.results
    console.log(cardsData)
   
    return (
      <div>
        <Navbar /> 
        <div className="movie-cards-container">
          {cardsData.map(eachMovieResult =>(
            <MovieCard key={eachMovieResult.id} MovieData={eachMovieResult} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      {renderHomePage()}
    </div>
  );
}

export default Upcoming;

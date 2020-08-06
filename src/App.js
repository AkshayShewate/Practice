  
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
 

  //with Axios 

  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = `https://api.github.com/users/AkshayShewate/repos`;
  //   axios.get(apiUrl).then((repos) => {
  //     const allRepos = repos.data;
  //     setAppState({ loading: false, repos: allRepos });
  //   });
  // }, [setAppState]);


  //with fetch uri

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/AkshayShewate/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚😎
          </span>{' '}
          with by Akii  Akii
        </div>
      </footer>
    </div>
  );
}

export default App;
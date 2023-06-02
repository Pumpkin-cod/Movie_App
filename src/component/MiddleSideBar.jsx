/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ApiKey } from './Apikey';

const MiddleSideBar = ({ searchQuery }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!searchQuery) {
      setData({});
      return;
    }

    axios
      // .get(`http://www.omdbapi.com/?t=${searchQuery}&apiKey=${ApiKey}`)
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=9e4ca5d3')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setData({});
      });
  }, [searchQuery]);

  return (
    <div className='h-full'>
      {data && data.Title ? (
        <>
          <div>
            <img src={data.Poster} alt="" />
          </div>
          <div className='text-white font-bold'>
            <h1>{data.Title}</h1>
            <p>{data.Plot}</p>
            <p>{data.Genre}</p>
            <p>{data.Year}</p>
            <p>{data.Rated}</p>
          </div>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

MiddleSideBar.propTypes = {
  searchQuery: PropTypes.string
};

export default MiddleSideBar;

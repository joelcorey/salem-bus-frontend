import React from 'react';
import './Loading.css';
import loadingImgJpg from './loading.jpg';

function Loading(props) {

  let loading;

  if (props.loading) {
    loading = (
      <div className="loading">
        <img src={loadingImgJpg} alt="loading spinner" />
      </div>
    )
  }
  
  return (
    <>
      {loading}
    </>
  )
  
}

export default Loading;

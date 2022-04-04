import React from 'react';
import { Link } from 'react-router-dom';

const Suggest = ({ cover, id }) => {

  return (
    <div className="suggestWrap">
      <Link to={`/movie/${id}`}>
        <img src={cover} alt="cover" />
      </Link>
    </div>
  )
}

export default Suggest;
import React from 'react';
import data from './data/data';

function Cards() {
  return (
    <div className="">
      {data.map((data) => {
        return (
          <div key={data.id}>
            <div>
              <img src={data.pic} alt={data.name} />
              <p>{data.name}</p>
              <p>{data.title}</p>
            </div>
            <div>
              <p>{data.review}</p>
              <p>{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;

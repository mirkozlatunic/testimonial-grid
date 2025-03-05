import React from 'react';
import data from './data/data';

function Cards() {
  return (
    <div className="grid grid-cols-1 gap-8 mx-auto">
      {data.map((data) => {
        const textColor =
          data.backgroundColor !== 'bg-white' ? 'text-white' : 'text-black';
        return (
          <div
            key={data.id}
            className={`shadow-3xl rounded-lg p-8 ${data.backgroundColor} ${textColor}`}
          >
            <div className="flex items-center pb-4 gap-4">
              <img
                src={data.pic}
                alt={data.name}
                className={`rounded-full size-7 ${data.borderPic}`}
              />
              <div>
                <p className="text-[13px]">{data.name}</p>
                <p className="text-[11px]">{data.title}</p>
              </div>
            </div>
            <div>
              <p className="pb-4 text-[20px] font-semibold">{data.review}</p>
              <p className="text-[13px]">{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;

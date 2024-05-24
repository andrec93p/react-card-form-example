import React, {ReactElement} from 'react';
import {City} from '../model/City';

const Card = (
  {city}: {
    city: City
  },
): ReactElement | null => {
  return (
    <div className={'card'}>
      <div
        style={{
          height: 200,
          backgroundImage: 'url(' + city.img_url + ')',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <h5>{city.name}</h5>

      {city.description !== undefined && (
        <p>{city.description}</p>
      )}
    </div>
  );
};

export default Card;

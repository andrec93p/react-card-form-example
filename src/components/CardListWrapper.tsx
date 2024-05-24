import React, {ReactElement, useState} from 'react';
import {City} from '../model/City';
import Card from './Card';
import CityForm from './CityForm';

const baseCities: City[] = [
  {
    name: 'Livorno',
    img_url: 'https://www.bravetuscany.com/wp-content/uploads/2023/04/Terrazza-Mascagni-un-salotto-sul-mare-di-Livorno.jpg',
    description: "Boia com'è bono ir ponce",
  },
  {
    name: 'Pisa',
    img_url: 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2015/06/pisa-getty-1080x794.jpg?v=1572449393',
  },
];

const CardListWrapper = (): ReactElement | null => {
  const [cities, setCities] =
    useState<typeof baseCities>(baseCities);

  const onCityAdd = (city: City): void => {
    setCities((oldCities) => {
      return [...oldCities, city];
    });
  };

  return (
    <>
      <CityForm onCityAdd={onCityAdd}/>
      <div className={'card-wrapper'}>
        {cities.map((city, index) => {
          return (
            <Card
              key={index}
              city={city}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardListWrapper;

import React, {FormEvent, ReactElement, useState} from 'react';
import {City} from '../model/City';

const CityForm = (
  {onCityAdd}: {
    onCityAdd: (city: City) => void
  }
): ReactElement | null => {
  const [city, setCity] = useState<City>(
    {
      name: '',
      img_url: '',
      description: '',
    },
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    onCityAdd({...city});
    setCity(
      {
        name: '',
        img_url: '',
        description: '',
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{display: 'flex', flexDirection: 'column', margin: '32px', gap: '8px'}}
    >
      <input
        type={'text'}
        name={'name'}
        value={city.name}
        onChange={(event) => {
          setCity((oldCity) => {
            return {
              ...oldCity,
              name: event.target.value,
            };
          });
        }}
        placeholder={'Nome'}
      />
      <input
        type={'text'}
        name={'img_url'}
        value={city.img_url}
        onChange={(event) => {
          setCity((oldCity) => {
            return {
              ...oldCity,
              img_url: event.target.value,
            };
          });
        }}
        placeholder={'URL immagine'}
      />
      <textarea
        name={'description'}
        value={city.description}
        onChange={(event) => {
          setCity((oldCity) => {
            return {
              ...oldCity,
              description: event.target.value,
            };
          });
        }}
        rows={3}
        placeholder={'Descrizione'}
      />

      <button type={'submit'}>
        Aggiungi
      </button>
    </form>
  );
};

export default CityForm;

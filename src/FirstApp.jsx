import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1> {title} </h1>
      {}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.PropTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
FirstApp.defaultProp = {
  name: 'Estrella',
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo',
};

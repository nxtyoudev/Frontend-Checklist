/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from 'react';
import '../sass/app.scss';
import '../global.css';
import SeoSchema from '../components/seoSchema';

export default ({ Component, pageProps }) => <><SeoSchema /> <Component {...pageProps} /></>;

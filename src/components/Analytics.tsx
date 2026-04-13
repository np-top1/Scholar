import React from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize('G-Y74VS67LX3');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return null;
};

export default Analytics;

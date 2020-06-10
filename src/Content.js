import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import useAckee from 'use-ackee';

import App from './App';

function Content(props) {
  useAckee(window.location.pathname + window.location.search, {
    server: 'https://analytics.pimenta.co',
    domainId: '76b48cf0-0f22-4c99-a67c-abeecf86a584'
  }, {
    ignoreLocalhost: true,
    detailed: true
  })
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  )
}

export default Content;

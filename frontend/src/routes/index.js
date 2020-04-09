import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Portal from '~/pages/Portal';
import SignIn from '~/pages/SignIn';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

import * as React from 'react';
import BasicTable from './components/BasicTable';
import { createPersonData } from './data';

const personData = createPersonData(5);

export const App = () => {
  return BasicTable({ id: 'test123' });
};

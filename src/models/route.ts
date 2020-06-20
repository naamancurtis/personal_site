import { ReactElement } from 'react';

export type Route = {
  name: string;
  paramPrefix: string;
  result: string;
  component: ReactElement;
};

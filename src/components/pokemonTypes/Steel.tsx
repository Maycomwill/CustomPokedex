import * as React from 'react';
import { SVGProps } from 'react';
const Steel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={23}
    fill='none'
    {...props}
  >
    <path
      fill={props.fill}
      fillRule='evenodd'
      d='M.002 11.515a.018.018 0 0 1 0-.018L6.29.757a.018.018 0 0 1 .016-.01h12.46c.006 0 .012.004.015.01l6.217 10.74a.018.018 0 0 1 0 .018L18.78 22.244a.018.018 0 0 1-.016.009H6.304a.018.018 0 0 1-.015-.01L.002 11.516Zm18.29-.015a5.79 5.79 0 1 1-11.58 0 5.79 5.79 0 0 1 11.58 0Z'
      clipRule='evenodd'
    />
  </svg>
);
export default Steel;

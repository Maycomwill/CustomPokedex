import { SVGProps } from 'react';
const Dark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={25}
    fill='none'
    {...props}
  >
    <path
      fill={props.fill}
      fillRule='evenodd'
      d='M11.217 22.112a9.549 9.549 0 0 0 11.005-9.438 9.549 9.549 0 0 0-10.595-9.492c2.616 1.982 4.345 5.415 4.345 9.318 0 4.104-1.912 7.688-4.755 9.612ZM12.5 25C19.404 25 25 19.404 25 12.5S19.404 0 12.5 0 0 5.596 0 12.5 5.596 25 12.5 25Z'
      clipRule='evenodd'
    />
  </svg>
);
export default Dark;

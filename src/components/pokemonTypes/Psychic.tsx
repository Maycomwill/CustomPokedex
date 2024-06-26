import { SVGProps } from 'react';
const Psychic = (props: SVGProps<SVGSVGElement>) => (
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
      d='M22.277 20.763s-3.153 2.529-9.426 1.482c-4.76-.794-7.299-6.04-7.299-8.86 0-6.688 4.95-8.21 8.295-8.21 3.346 0 5.529 3.263 5.529 5.788 0 2.526-1.787 4.735-4.567 4.735-2.78 0-3.603-1.951-3.603-3.746 0-1.794 1.452-2.426 2.776-2.426 1.324 0 1.777 1.13 1.777 2.102 0 .971-.754 1.32-1.382 1.32-.63 0-.691-.318-.932-.651-.24-.334.307-1.595-.594-1.595-.902 0-1.07 1.45-1.07 1.45s.329 2.8 3.028 2.752c2.7-.049 3.98-2.136 3.609-4.202-.372-2.067-2.378-4.263-5.898-3.819-3.52.444-4.956 4-4.323 7.8.634 3.8 5.187 6.003 8.766 5.21 3.58-.791 7.145-3.383 7.145-9.954 0-6.57-5.69-10.52-12.476-9.87C4.846.722.634 6.654.904 13.782c.27 7.128 7.033 11.01 12.752 11.21 5.72.2 9.226-3.11 9.226-3.11s.788-.704.48-1.253c-.31-.549-1.085.135-1.085.135Z'
      clipRule='evenodd'
    />
  </svg>
);
export default Psychic;

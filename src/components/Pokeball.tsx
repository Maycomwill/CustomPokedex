import * as React from 'react';

function Pokeball(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" {...props}>
      <defs>
        <style>
          {
            '.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:4px}'
          }
        </style>
      </defs>
      <g id="Camada_2" data-name="Camada 2">
        <g id="pokebola">
          <path
            className="cls-1"
            d="M90 46a44 44 0 01-88 0h27.15a16.85 16.85 0 0033.7 0z"
          />
          <path
            d="M90 46H62.85a16.85 16.85 0 00-33.7 0H2a44 44 0 0188 0z"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit={10}
            strokeWidth="4px"
          />
          <circle
            className="cls-1"
            cx={46}
            cy={46}
            r={16.85}
            transform="rotate(-22.5 45.988 45.993)"
          />
        </g>
      </g>
    </svg>
  );
}

export default Pokeball;

const PlusIcon: React.FC = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2416_20805)">
        <rect
          x="8.5"
          y="0.5"
          width="31"
          height="31"
          rx="15.5"
          stroke="white"
          stroke-dasharray="4 4"
          shape-rendering="crispEdges"
        />
        <path
          d="M32 15.3333H24.6667V8H23.3333V15.3333H16V16.6667H23.3333V24H24.6667V16.6667H32V15.3333Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2416_20805"
          x="0"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2416_20805"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2416_20805"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PlusIcon;

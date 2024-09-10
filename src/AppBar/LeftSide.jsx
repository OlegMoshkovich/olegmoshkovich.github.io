import * as React from 'react';
import { Stack } from '@mui/material';

const LeftSide = ({ onGoToLocation }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{position:'absolute', top:'10px', left:'20px'}}
    >
      <a
        href="https://www.youtube.com/channel/UCK0LS82kZMwKIRTH4ILa8nA"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Inline SVG */}
        <svg
          width="50" // Set this to the desired size
          height="50" // Set this to the desired size
          viewBox="0 0 625 416"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M311.921 157.391C311.873 158.57 313.294 159.712 314.988 160.233C317.6 161.295 322.855 160.742 324.391 159.245C325.044 158.748 325.491 158.091 325.488 157.396"
            stroke="black"
            strokeWidth="6"
          />
          <path d="M560.671 359.824L551.625 320.242" stroke="black" strokeWidth="6" />
          <path d="M81.259 132.511L105.003 117.809" stroke="black" strokeWidth="6" />
          <path d="M81.2591 132.511L41.6851 62.3944" stroke="black" strokeWidth="6" />
          <path d="M344.709 311.194L345.84 210.544" stroke="black" strokeWidth="6" />
          <path d="M405.766 192.449V196.973" stroke="black" strokeWidth="6" />
          <path d="M36.0315 143.82L81.259 132.511" stroke="black" strokeWidth="6" />
          <path d="M515.443 68.0491L508.659 60.1327" stroke="black" strokeWidth="6" />
          <path d="M3.2417 45.4308L36.0316 143.82" stroke="black" strokeWidth="6" />
          <path d="M521.096 74.8345L515.443 68.049" stroke="black" strokeWidth="6" />
          <path d="M41.6851 62.3945L115.18 20.5509" stroke="black" strokeWidth="6" />
          <path d="M264.431 13.7654L281.391 11.5036" stroke="black" strokeWidth="6" />
          <path d="M325.487 138.165V157.391" stroke="black" strokeWidth="6" />
          <path d="M473.608 412.976L332.272 365.478" stroke="black" strokeWidth="6" />
          <path d="M560.671 359.824L450.994 364.347" stroke="black" strokeWidth="6" />
          <path d="M348.101 371.133L344.709 311.195" stroke="black" strokeWidth="6" />
          <path
            d="M281.391 11.5036L309.734 52.7389L324.598 74.3633L331.141 83.8817"
            stroke="black"
            strokeWidth="6"
          />
          <path d="M108.395 121.202L105.003 112.155" stroke="black" strokeWidth="6" />
          <path
            d="M306.266 108.762L319.148 128.566L334.655 152.406L367.323 202.627"
            stroke="black"
            strokeWidth="6"
          />
          <path
            d="M342.448 99.7145L372.089 95.5865L422.242 88.6017L521.096 74.8345"
            stroke="black"
            strokeWidth="6"
          />
          <path d="M297.22 184.533L551.625 320.242" stroke="black" strokeWidth="6" />
          <path d="M533.534 246.733L596.852 192.449" stroke="black" strokeWidth="6" />
          <path d="M153.623 87.2746L205.635 99.7146" stroke="black" strokeWidth="6" />
          <path
            d="M112.918 133.642L218.298 120.082L270.206 113.402L306.266 108.762"
            stroke="black"
            strokeWidth="6"
          />
          <path d="M76.7363 3.58722L3.2417 45.4309" stroke="black" strokeWidth="6" />
          <path d="M621.727 303.278L560.67 359.824" stroke="black" strokeWidth="6" />
          <path d="M450.993 364.347L449.863 405.06" stroke="black" strokeWidth="6" />
          <path d="M115.179 20.5509L76.7361 3.58722" stroke="black" strokeWidth="6" />
          <path d="M81.259 132.511L297.22 184.533" stroke="black" strokeWidth="6" />
          <path d="M265.561 113.285L311.919 124.595" stroke="black" strokeWidth="6" />
          <path d="M297.221 184.533L241.817 232.031" stroke="black" strokeWidth="6" />
          <path d="M41.6851 62.3945L3.2417 45.4308" stroke="black" strokeWidth="6" />
          <path d="M153.623 87.2745L115.18 20.5509" stroke="black" strokeWidth="6" />
          <path d="M247.47 14.8963L264.43 13.7654" stroke="black" strokeWidth="6" />
          <path d="M331.141 83.8818L360.606 79.9397L410.433 73.2738L508.659 60.1327" stroke="black" strokeWidth="6" />
          <path d="M113.5 132L108.396 121.202" stroke="black" strokeWidth="6" />
          <path d="M311.919 157.391V116.678" stroke="black" strokeWidth="6" />
          <path d="M342.448 99.7144L355.805 119.039L371.889 142.308L405.766 191.318" stroke="black" strokeWidth="6" />
          <path d="M105.003 112.155L208.536 98.5941L259.542 91.9134L294.959 87.2746" stroke="black" strokeWidth="6" />
          <path d="M247.47 14.8963L274.526 56.1335L288.717 77.7622L294.959 87.2745" stroke="black" strokeWidth="6" />
          <path d="M297.22 184.533L337.925 156.26" stroke="black" strokeWidth="6" />
          <path d="M368.454 137.034L596.852 192.449" stroke="black" strokeWidth="6" />
          <path d="M613.813 263.696L596.853 192.449" stroke="black" strokeWidth="6" />
          <path d="M116.31 111.024L153.623 87.2746" stroke="black" strokeWidth="6" />
          <path d="M533.534 246.733L297.22 184.533" stroke="black" strokeWidth="6" />
          <path d="M551.625 320.242L533.534 246.733" stroke="black" strokeWidth="6" />
          <path d="M613.813 263.696L551.625 320.242" stroke="black" strokeWidth="6" />
          <path d="M613.812 264.827L621.727 303.278" stroke="black" strokeWidth="6" />
          <path d="M405.766 196.973L367.323 202.627" stroke="black" strokeWidth="6" />
          <path d="M344.709 311.194L241.817 232.031" stroke="black" strokeWidth="6" />
          <path d="M36.0315 143.82L241.817 232.031" stroke="black" strokeWidth="6" />
          <path d="M344.709 311.195L450.994 364.347" stroke="black" strokeWidth="6" />
        </svg>
      </a>
    </Stack>
  );
};

export default LeftSide;

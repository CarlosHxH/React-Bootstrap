const Icons = {
  Menu: (props) => (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
        fill="#0D0D0D"
      />
    </svg>
  ),
  Home: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={22}
      height={22}
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M3 17 16 4l13 13"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M6 14v13h7V17h6v10h7V14"
      />
    </svg>
  ),
  userGear: (props) => (
    <svg
      width={22}
      height={22}
      viewBox="0 0 7.04 7.04"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.666 4.366a1.76 1.76 0 1 0 -1.391 0 3.185 3.185 0 0 0 -1.748 1.063 0.11 0.11 0 1 0 0.168 0.142 2.97 2.97 0 0 1 4.55 0 0.11 0.11 0 1 0 0.168 -0.142 3.185 3.185 0 0 0 -1.748 -1.063ZM1.43 2.75a1.54 1.54 0 1 1 1.54 1.54 1.542 1.542 0 0 1 -1.54 -1.54Zm5.342 1.28 -0.201 -0.116a0.542 0.542 0 0 0 0 -0.348l0.2 -0.116a0.11 0.11 0 0 0 -0.11 -0.19l-0.201 0.116a0.55 0.55 0 0 0 -0.301 -0.175V2.97a0.11 0.11 0 0 0 -0.22 0v0.231a0.55 0.55 0 0 0 -0.301 0.175l-0.201 -0.116a0.11 0.11 0 0 0 -0.11 0.191l0.201 0.116a0.542 0.542 0 0 0 0 0.348l-0.2 0.116a0.11 0.11 0 1 0 0.11 0.19l0.201 -0.116a0.55 0.55 0 0 0 0.301 0.175V4.51a0.11 0.11 0 0 0 0.22 0v-0.231a0.55 0.55 0 0 0 0.301 -0.175l0.201 0.116a0.11 0.11 0 0 0 0.11 -0.191ZM6.05 4.07a0.33 0.33 0 1 1 0.33 -0.33 0.33 0.33 0 0 1 -0.33 0.33Z" />
    </svg>
  ),
  Gear: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      {...props}
    >
      <g fill="none" stroke="#000" strokeWidth={2} strokeMiterlimit={10}>
        <path d="M32 1h-6v9l-6 2-6-6-8 8 6 6-2 6H1v12h9l2 6-6 6 8 8 6-6 6 2v9h12v-9l6-2 6 6 8-8-6-6 2-6h9V26h-9l-2-6 6-6-8-8-6 6-6-2V1z" />
        <circle cx={32} cy={32} r={6} />
      </g>
    </svg>
  ),
};
export default Icons;

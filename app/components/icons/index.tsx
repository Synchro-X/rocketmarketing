

export const ArrowDown = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <circle cx="28" cy="28" r="28" fill="#12141D" />
        <circle
          cx="28"
          cy="28"
          r="27"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="2"
        />
      </svg>
    );
}

export const Active = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="10"
        viewBox="0 0 11 10"
        fill="none"
      >
        <circle cx="5.33496" cy="5" r="5" fill="#27AE60" />
      </svg>
    );
}

export const Close = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
      >
        <rect
          x="0.5"
          y="0.5"
          width="32"
          height="32"
          rx="16"
          fill="#F6F6F6"
          fill-opacity="0.3"
        />
        <path
          d="M20.5 12.5L12.5 20.5"
          stroke="white"
          strokeWidth="2.73333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 12.5L20.5 20.5"
          stroke="white"
          strokeWidth="2.73333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
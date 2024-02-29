const CopyBtn = () => {
  return (
    <button className="map__contacts-copybtn">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.1429 8H9.85714C8.83147 8 8 8.83147 8 9.85714V19.1429C8 20.1685 8.83147 21 9.85714 21H19.1429C20.1685 21 21 20.1685 21 19.1429V9.85714C21 8.83147 20.1685 8 19.1429 8Z"
          stroke="#818181"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.85714 16C3.83571 16 3 15.1643 3 14.1429V4.85714C3 3.83571 3.83571 3 4.85714 3H14.1429C15.1643 3 16 3.83571 16 4.85714"
          stroke="#818181"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default CopyBtn;

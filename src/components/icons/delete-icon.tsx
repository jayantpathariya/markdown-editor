interface SvgIconProps {
  className?: string;
}

export const DeleteIcon = ({ className }: SvgIconProps = {}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fill="currentColor"
      d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1M17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2M7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
    ></path>
  </svg>
);

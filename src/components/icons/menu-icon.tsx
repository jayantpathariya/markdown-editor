interface SvgIconProps {
  className?: string;
}

export const MenuIcon = ({ className }: SvgIconProps = {}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="18"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 0h30v2H0zm0 8h30v2H0zm0 8h30v2H0z"
    ></path>
  </svg>
);

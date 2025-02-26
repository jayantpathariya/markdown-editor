interface SvgIconProps {
  className?: string;
}

export const CloseIcon = ({ className }: SvgIconProps = {}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fill="currentColor" fillRule="evenodd">
      <path d="M2.1.686 23.315 21.9 21.9 23.315.686 2.1z"></path>
      <path d="M.686 21.9 21.9.685 23.315 2.1 2.1 23.314z"></path>
    </g>
  </svg>
);

interface SvgIconProps {
  className?: string;
}

export const DocumentIcon = ({ className }: SvgIconProps = {}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fill="currentColor"
      d="M13.107 3.393q.25.25.429.678.178.429.178.786v10.286q0 .357-.25.607a.83.83 0 0 1-.607.25h-12a.83.83 0 0 1-.607-.25.83.83 0 0 1-.25-.607V.857Q0 .501.25.25A.83.83 0 0 1 .857 0h8q.357 0 .786.179.429.178.678.428zM9.143 1.214v3.357H12.5q-.09-.258-.196-.366L9.509 1.411q-.108-.108-.366-.197m3.428 13.643V5.714H8.857a.83.83 0 0 1-.607-.25.83.83 0 0 1-.25-.607V1.143H1.143v13.714z"
    ></path>
  </svg>
);

import React from 'react';

// interface to declare all our prop types
interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'link' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, variant = 'primary', size = 'md', disabled, ...rest }) => {
  return (
    <button className={`btn btn-${variant} btn-${size}` + (disabled ? ' disabled' : '')} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;

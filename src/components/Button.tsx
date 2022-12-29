import React from 'react';

// interface to declare all our prop types
interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, variant = 'default', size = 'md', disabled, ...rest }) => {
  return (
    <button className={`btn ${variant} ${size}` + (disabled ? ' disabled' : '')} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;

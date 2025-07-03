
import React from 'react';
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  href,
  fullWidth = false,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  
  const baseStyles = cn(
    'relative inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none',
    fullWidth && 'w-full',
    {
      'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'primary',
      'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
      'bg-transparent text-foreground border border-border hover:bg-secondary': variant === 'outline',
      'bg-transparent text-foreground underline-offset-4 hover:underline': variant === 'link',
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
    },
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 transform translate-y-1.5 translate-x-1.5 transition-transform duration-300 rounded-md bg-primary/10 opacity-0 group-hover:opacity-100 -z-10" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <button 
      className={cn(baseStyles, "group")}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;

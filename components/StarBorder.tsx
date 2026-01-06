"use client";

import './StarBorder.css';
import { ComponentType, ReactNode } from 'react';

interface StarBorderProps {
  as?: string | ComponentType<any>;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children?: ReactNode;
  [key: string]: any; // Allow any other props to be passed through
}

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps) => {
  // Handle both string components (like 'a', 'div') and React components (like Link)
  const isStringComponent = typeof Component === 'string';
  
  const borderGradients = (
    <>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content">
        {isStringComponent ? children : (
          <Component {...rest}>
            {children}
          </Component>
        )}
      </div>
    </>
  );

  if (isStringComponent) {
    const WrapperComponent = Component as keyof JSX.IntrinsicElements;
    return (
      <WrapperComponent
        className={`star-border-container ${className}`}
        style={{
          padding: `${thickness}px 0`,
          ...rest.style
        }}
        {...rest}
      >
        {borderGradients}
      </WrapperComponent>
    );
  }

  return (
    <div
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
    >
      {borderGradients}
    </div>
  );
};

export default StarBorder;


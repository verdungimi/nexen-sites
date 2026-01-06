"use client";

import './StarBorder.css';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}) => {
  // Handle both string components (like 'a', 'div') and React components (like Link)
  const isStringComponent = typeof Component === 'string';
  const WrapperComponent = isStringComponent ? Component : 'div';
  
  const wrapperProps = isStringComponent ? {
    className: `star-border-container ${className}`,
    style: {
      padding: `${thickness}px 0`,
      ...rest.style
    },
    ...rest
  } : {
    className: `star-border-container ${className}`,
    style: {
      padding: `${thickness}px 0`,
      ...rest.style
    }
  };

  const content = (
    <WrapperComponent {...wrapperProps}>
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
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;

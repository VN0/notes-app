import React from 'react';

const Icon = ({ className, color, icon, size = 24, ...rest }) => {
  return {
    play: () => (
      <svg className={className} fill={color} width={size} height={size} viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
    pause: () => (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
      </svg>
    ),
    plus: () => (
      <svg className={className} stroke={color || 'white'} width={size} height={size} viewBox="0 0 24 24">
        <path d="M11.5 4V20M12.5 20V4M20 11.5H4M20 12.5H4" />
      </svg>
    ),
  }[icon]();
};

export default Icon;

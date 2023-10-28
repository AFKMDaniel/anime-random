import React from 'react';

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        'border-2 rounded bg-green-600 p-2 border-black text-white text-base ' +
        (className || '')
      }
      {...props}
    >
      {children}
    </button>
  );
}
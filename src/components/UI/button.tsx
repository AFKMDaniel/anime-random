import React from 'react'

export default function Button({children, className, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={'border-2 rounded bg-white p-2 border-green-600 text-black text-base ' + (className || '')} {...props}>
            {children}
        </button>
    )
}
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface Props extends LinkProps {
    children: React.ReactNode
}

export default function ButtonLink({children, ...props}: Props) {
    return (
        <Link className='border-2 rounded bg-white p-2 font-bold border-green-600 text-black text-sm' {...props}>
            {children}
        </Link>
    )
}

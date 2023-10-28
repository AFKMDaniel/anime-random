import Link from 'next/link'
import React from 'react'
import { ButtonLinkProps } from '@/types/linkTypes'

export default function ButtonLink({children, className, ...props}: ButtonLinkProps) {
    return (
        <Link className={'border-2 rounded bg-white p-2 border-green-600 text-black text-base ' + (className || '')} {...props}>
            {children}
        </Link>
    )
}

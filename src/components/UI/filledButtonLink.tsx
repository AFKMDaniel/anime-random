import Link from 'next/link'
import React from 'react'
import { ButtonLinkProps } from '@/types/linkTypes'

export default function FilledButtonLink({children, className, ...props}: ButtonLinkProps) {
    return (
        <Link className={'border-2 rounded bg-green-600 p-2 border-black text-white text-base ' + (className || '')} {...props}>
            {children}
        </Link>
    )
}
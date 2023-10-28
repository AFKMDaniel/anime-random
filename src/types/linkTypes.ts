import { LinkProps } from "next/link";

export interface ButtonLinkProps extends LinkProps {
    className?: string,
    children: React.ReactNode
}
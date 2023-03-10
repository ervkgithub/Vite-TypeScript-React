import { ReactNode } from 'react'

type SectionProps = {
    title?:string,
    children:ReactNode
}

export const Section = ({children, title ="Section optional sub heading"}:SectionProps) => {
  return (
    <>
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
    </>
  )
}


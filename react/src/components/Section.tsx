import { ReactNode } from "react";

type SectionProps = {
  title?: string,
  children: ReactNode
}

export default ({ children, title = "My Subheading"}: SectionProps) => {
  return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
  )
}

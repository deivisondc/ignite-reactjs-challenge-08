import { memo } from "react";

type HeaderProps = {
  title: string
}

function HeaderComponent({ title }: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {title}</span></span>
    </header>
  )
}

export const Header = memo(HeaderComponent)
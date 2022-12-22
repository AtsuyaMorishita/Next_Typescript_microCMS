import Link from "next/link"

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/blog">BLOG</Link>
        </li>
      </ul>
    </nav>
  )
}

import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";


type Props = {
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Header />

        <main>{ children }</main>

      <Footer />
    </>
  )
}


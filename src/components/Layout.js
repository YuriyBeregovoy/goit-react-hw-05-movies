import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { HeaderStyles, LayoutStyles } from "./Layout.styied"
import { LinkNav, LinkStyles } from "./Header.styled"

export const Layout = () => {

  return (
    
     <div>
        <HeaderStyles>
        <LinkNav>
              <LinkStyles to="/">Home</LinkStyles>
              <LinkStyles to="/movies">Movies</LinkStyles>
          </LinkNav>
        </HeaderStyles>
      <LayoutStyles>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </LayoutStyles>
     </div>
    
)

}
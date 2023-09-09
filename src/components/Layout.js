import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { HeaderStyles, LayoutStyles } from "./Layout.styied"
import { LinkNav, LinkStylesMovies,  LinkStylesHome } from "./Header.styled"

export const Layout = () => {

  return (
    
     <div>
        <HeaderStyles>
        <LinkNav>
              <LinkStylesHome to="/">Home</LinkStylesHome>
              <LinkStylesMovies to="/movies">Movies</LinkStylesMovies>
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
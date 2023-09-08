import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { HeaderStyles, LayoutStyles } from "./Layout.styied"
import { LinkStyles } from "./Header.styled"

export const Layout = () => {

  return (
    
     <div>
        <HeaderStyles>
        <nav>
              <LinkStyles to="/">Home</LinkStyles>
              <LinkStyles to="/movies">Movies</LinkStyles>
          </nav>
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
import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { HeaderStyles, LayoutStyles } from "./Layout.styied"



export const Layout = () => {

  return (
    
     <div>
        <HeaderStyles>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/movies">Movies</NavLink>
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
import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { LayoutStyles } from "./Layout.styied"



export const Layout = () => {

  return (
    <LayoutStyles>
      <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </LayoutStyles>
    
)

}
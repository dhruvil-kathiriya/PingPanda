import { Children, ReactNode } from "react"
import { Navabar } from "../../components/navbar"


const Layout = ({ children }: { children: ReactNode }) => {
    return (

        <>

            <Navabar />
            {children}
        </>
    )
}
export default Layout
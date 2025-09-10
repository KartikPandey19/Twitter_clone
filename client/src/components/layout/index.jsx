import Sidebar from "../sideTaskBar"

export const Layout = ({children})=>{

    return(<>
    <Sidebar />
    <main>{children}</main>
    </>)
}
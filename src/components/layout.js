import React from "react"
//import Helmet from "react-helmet";
import Header from "./header"
import Footer from "./footer"
import About from "./about"

import WrapperContext from "../context/WrapperContext"
import Transition from "./transition"
import Cursor from "./ui/cursor"

require("../styles/index.scss")

//const LocaleContext = React.createContext()

//const Layout = ({ children, location, pageContext: { template } }) => (
export default ({ children, location, pageContext: { template } }) => (
    <WrapperContext.Consumer>
        {wrapper => (
            <div id="page">
                {/* {template} */}
                <Header />

                <main>
                    {/* {children} */}
                    <Transition location={location}>{children}</Transition>
                </main>

                {template !== "about" &&
                    <About active={false} />
                }
                
                <Footer />
                <Cursor />
            </div>
        )}
    </WrapperContext.Consumer>
)

//export { Layout }
//export default Layout

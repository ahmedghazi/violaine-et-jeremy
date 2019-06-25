import React from "react"
//import Helmet from "react-helmet";
import Header from "./header"
import Footer from "./footer"
import About from "./about"

import WrapperContext from "../context/WrapperContext"
import Transition from "./transition"

require('../styles/index.scss')

//const LocaleContext = React.createContext()

//const Layout = ({ children, location, pageContext: { template } }) => (
export default ({ children, location, pageContext: { template } }) => (
    
    <WrapperContext.Consumer>
        {wrapper => (
        <div id="page">
            <Header  />
            
            <main>
                {/* {children} */}
                <Transition location={location}>
                    {children}
                </Transition>
            </main>
            <About />
            <Footer />  
        </div>
        )}
    </WrapperContext.Consumer>
  
    
)

//export { Layout }
//export default Layout
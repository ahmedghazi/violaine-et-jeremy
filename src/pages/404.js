import React, { Component } from 'react';
//import { Link } from "gatsby"
//import LocalizedLink from '../components/LocalizedLink'
//import { LocaleContext } from "../components/layout"
//import Layout from "../components/layout"

class Page404 extends Component {
    render() {
        // const { locale } = React.useContext(LocaleContext)
        // console.log(locale)
        return (
            <div className="page404">
                <h1>Page Not Found</h1>
                <p>Oops, we couldn't find this page!</p>
            </div>
        );
    }
}

export default Page404;
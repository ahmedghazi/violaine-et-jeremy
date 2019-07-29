import React, { Component } from 'react';
// import { graphql } from "gatsby"
import SEO from "../components/SEO"
import About from "../components/about"

class PageAbout extends Component {
    render() {
        return (
            <div className="page-about">
                <SEO
                    pageTitle={"About"}
                    pageDescription={""}
                    //pageBanner={pageBanner.file.url}
                    page={true}
                    template="template-about"
                    // pathname={location.pathname}
                />

                <About active={true} />
            </div>
        );
    }
}

export default PageAbout;
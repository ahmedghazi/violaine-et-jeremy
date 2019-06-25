import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
//import PubSub from 'pubsub-js';
import SEO from "../components/SEO"

class PageProject extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {
            title,
            texte,
            date,
            tags,
            featuredImage,
            images,
        } = this.props.data.project

        return (
            <div className="project">
                <SEO
                    pageTitle={title}
                    pageDescription={texte.childMarkdownRemark.excerpt}
                    pageBanner={featuredImage.file.url}
                    page={true}
                    template="template-project"
                    // pathname={location.pathname}
                />

                <ul className="header">
                    <li className="title">
                        <h1 className="fM">{title}</h1>
                    </li>
                    <li className="metas">
                        <div className="tags">{tags.join()}</div>
                        <div className="date">{date}</div>
                    </li>
                    <li>
                        <div
                            className="texte"
                            dangerouslySetInnerHTML={{
                                __html: texte.childMarkdownRemark.html,
                            }}
                        ></div>
                    </li>
                    {/* <li><div className="credits">credits</div></li> */}
                </ul>

                <div className="images">
                    {images.map((image, key) => (
                        <Img key={key} fluid={image.fluid} />
                    ))}
                </div>
            </div>
        )
    }
}

export default PageProject

export const pageQuery = graphql`
    query ProjectBySlug($slug: String!) {
        project: contentfulProject(slug: { eq: $slug }) {
            ...projet
        }
    }
`

import React, { Component } from "react"
import { graphql, Link } from "gatsby"
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
            titleFormated,
            texte,
            texteAlt,
            date,
            color,
            tags,
            featuredImage,
            images,
        } = this.props.data.project
        const {
            previous,
            next
        } = this.props.pageContext
//console.log(this)
        // const _title = titleFormated 
        // ? titleFormated.childMarkdownRemark.rawMarkdownBody
        // : title
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
                        {titleFormated &&
                            <h1 dangerouslySetInnerHTML={{
                                __html: titleFormated.childMarkdownRemark.html,
                            }} />
                        }
                        {!titleFormated &&
                            <h1>{title}</h1>
                        }
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
                </ul>

                <div className="images" style={{background: color}}>
                    {images.map((image, key) => (
                        <Img key={key} fluid={image.fluid} />
                    ))}
                </div>
                
                {texteAlt &&
                    <div
                        className="texte-alt texte"
                        dangerouslySetInnerHTML={{
                            __html: texteAlt.childMarkdownRemark.html,
                        }}
                    ></div>
                }

                <div className="footer">
                    <ul className="pagination">
                    {previous &&
                        <li>
                            <Link to={"project/"+previous.slug}>
                                <div className="label">Previous project</div>
                                <div className="pipe"></div>
                                <div className="title">{previous.title}</div>
                            </Link>
                        </li>
                    }
                    {next &&
                        <li>
                            <Link to={"project/"+next.slug}>
                                <div className="title">{next.title}</div>
                                <div className="pipe"></div>
                                <div className="label">Next project</div>
                            </Link>
                        </li>
                    }
                    </ul>
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

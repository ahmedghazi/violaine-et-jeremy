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

    componentDidMount(){
        this._linkBlank()
    }

    _linkBlank(){
        const textAlt = this.refs.textAlt
        if(textAlt && textAlt.querySelectorAll("a").length > 0){
            textAlt.querySelectorAll("a").forEach(el => {
                el.target = "_blank"
            })
        }
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

        const pageBanner = featuredImage ? featuredImage : images[0]
        console.log(pageBanner.file.url)
        const tagList = tags ? tags : ""
//console.log(pageBanner)
        // const _title = titleFormated 
        // ? titleFormated.childMarkdownRemark.rawMarkdownBody
        // : title
        return (
            <div className="project">
                <SEO
                    pageTitle={title}
                    pageDescription={texte.childMarkdownRemark.excerpt}
                    pageBanner={pageBanner &&
                        pageBanner.file.url
                    }
                    page={true}
                    template="template-project"
                    // pathname={location.pathname}
                />
                <div className="wrapper">
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
                            <div className="tags">
                                {tagList &&
                                    tagList.map((tag,i) => (
                                        <div key={i}>{tag}</div>
                                    ))
                                }
                            </div>
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
                            ref="textAlt"
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

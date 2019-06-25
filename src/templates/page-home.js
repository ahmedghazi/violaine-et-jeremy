import React from "react"
import { graphql } from "gatsby"
//import PubSub from 'pubsub-js';
//import cookie from 'react-cookies'
import { debounce } from "throttle-debounce"
import SEO from "../components/SEO"
//import Draggable from 'react-interactjs'
import Interactive from "../core/Interactable"
import Card from "../components/card"

class PageHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isTouch: false,
            coverflowWidth: 0,
        }

        this._resize = debounce(250, this._resize.bind(this))
        this._move = this._move.bind(this)
    }

    componentWillUnmount() {
        document.removeEventListener("resize", this._resize)
    }

    componentDidMount() {
        if ("ontouchstart" in window && window.innerWidth <= 768) {
            this.setState({
                isTouch: true,
            })
        } else {
            document.addEventListener("resize", this._resize)
            setTimeout(() => {
                this._resize()
            }, 150)
        }
    }

    _resize() {
        let w = 0

        const cards = document.querySelectorAll(".card")
        cards.forEach(el => {
            w += el.getBoundingClientRect().width
        })

        //boundings
        const cardLeft = document.querySelector(".card").getBoundingClientRect()
            .left
        const scrollerWidth =
            document
                .querySelector(".projects-coverflow")
                .getBoundingClientRect().width - cardLeft
        this.setState({
            minX: -(w - scrollerWidth),
        })
    }

    _move(event) {
        const { minX } = this.state

        const target = event.target
        const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx
        // console.log(x)
        //console.log(minX, x)
        // translate the element
        if (x > 0 || x < minX) return

        this.setState({
            scrollerX: x,
        })
        target.style.webkitTransform = target.style.transform =
            "translateX(" + x + "px)"

        target.setAttribute("data-x", x)
    }

    render() {
        //console.log(this.props)
        const { isTouch, coverflowWidth, scrollerX } = this.state

        const style = {
            width: coverflowWidth + "px",
            opacity: 1,
        }

        const { options, home } = this.props.data

        const draggableOptions = {
            origin: "self",
            inertia: true,
            // modifiers: [
            //   interact.modifiers.restrict({
            //     restriction: 'self'            // keep the drag coords within the element
            //   })
            // ],
            onmove: this._move,
        }

        return (
            <>
                <div className="home">
                    <SEO
                        pageTitle={options.title}
                        pageDescription={options.description}
                        template="template-home"
                        // pathname={location.pathname}
                    />

                    <div className="projects-coverflow" ref="scroller">
                        {!isTouch && (
                            <Interactive
                                draggable={true}
                                draggableOptions={draggableOptions}
                            >
                                <div className="inner" style={style}>
                                    {home.projects.map((item, i) => (
                                        <Card
                                            key={i}
                                            data={item}
                                            x={scrollerX}
                                        />
                                    ))}
                                </div>
                            </Interactive>
                        )}
                        {isTouch && (
                            <div className="inner" style={style}>
                                {home.projects.map((item, i) => (
                                    <Card key={i} data={item} x={scrollerX} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }
}

export default PageHome

export const pageQuery = graphql`
    query homePage {
        options: contentfulOptions {
            ...options
        }
        home: contentfulHomePage {
            title
            projects {
                title
                slug
                tags
                date(formatString: "YYYY")
                featuredImage {
                    ...sharpM
                }
            }
        }
    }
`

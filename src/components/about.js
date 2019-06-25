import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import PubSub from "pubsub-js"
import { Samy } from "react-samy-svg"
import { removeClass } from "../core/utils"
import AboutPage from "../components/about-page"
import FoundrySvg from "../components/foundry-svg"
//import PubSub from 'pubsub-js';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            panelActive: false,
            panelWidth: 0,
            menu: [],
            isTouch: false,
        }

        this._format = this._format.bind(this)
        this._toggle = this._toggle.bind(this)
        this._toggleSection = this._toggleSection.bind(this)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._format)
    }

    componentDidMount() {
        const panelWidth = document
            .querySelector(".panel-btn")
            .getBoundingClientRect().width
        this.setState({ panelWidth: panelWidth })

        this._browser()

        const { pages } = this.props.data.about
        this.setState(
            {
                menu: pages,
            },
            () => {
                this._handleActive()
            }
        )

        window.addEventListener("resize", this._format)

        PubSub.subscribe("CLOSE_ABOUT", (e, d) => {
            const { active } = this.state
            if (active) {
                this._toggle()
            }
        })
    }

    _browser() {
        var ua = navigator.userAgent.toLowerCase()
        if (ua.indexOf("safari") !== -1) {
            if (ua.indexOf("chrome") > -1) {
                document.documentElement.classList.add("chrome")
            } else {
                document.documentElement.classList.add("safari")
            }
        }
        if (ua.indexOf("firefox") !== -1) {
            document.documentElement.classList.add("firefox")
        }

        if ("ontouchstart" in window && window.innerWidth <= 768) {
            this.setState({
                isTouch: true,
            })
        }
    }

    _format() {
        const { panelWidth, isTouch } = this.state

        if (isTouch) return

        const panels = document.querySelectorAll(".panel:not(.active)")
        panels.forEach((el, i) => {
            const right = panelWidth * i
            el.style.right = right + "px"
            el.dataset.right = right
            el.style.zIndex = 10 - i
        })

        const panelActive = document.querySelector(".panel.active")
        if (panelActive) {
            const accordionWidth = document
                .querySelector("#accordion")
                .getBoundingClientRect().width
            const right = accordionWidth - panelWidth
            panelActive.style.right = right + "px"
        }
    }

    _toggle() {
        //console.log("toggle")
        this.setState(
            {
                active: !this.state.active,
            },
            () => {
                //PubSub.publish("ABOUT", {active: this.state.active})
                this._handleActive()
            }
        )
    }

    _handleActive() {
        if (this.state.active) {
            document.documentElement.classList.add("is-about")
            this._format()
        } else {
            document.documentElement.classList.remove("is-about")
            this.setState({ panelActive: false })
            removeClass(".panel", "active")
        }
    }

    _toggleSection(slug) {
        const { panelWidth, isTouch } = this.state
        if (isTouch) return

        let _panelActive = false
        const accordionWidth = document
            .querySelector("#accordion")
            .getBoundingClientRect().width
        const panel = document.querySelector(".panel-header.panel-" + slug)
            .parentNode

        if (panel.classList.contains("active")) {
            removeClass(".panel", "active")

            document.querySelectorAll(".panel").forEach((el, i) => {
                el.style.right = i * panelWidth + "px"
            })
        } else {
            removeClass(".panel", "active")

            const right = accordionWidth - panelWidth
            panel.style.right = right + "px"
            panel.classList.add("active")

            document
                .querySelectorAll(".panel:not(.active)")
                .forEach((el, i) => {
                    el.style.right = i * panelWidth + "px"
                })

            _panelActive = true
        }
        this.setState({ panelActive: _panelActive })
    }

    render() {
        const { active, menu, panelActive, panelWidth } = this.state
        const { about } = this.props.data
        let _className = active ? "active" : ""
        _className += panelActive ? " is-nav" : ""
        //console.log(menu)
        return (
            <div className={"about " + _className}>
                <div className="about-toggle panel-btn " onClick={this._toggle}>
                    <div className="title serif fXL">{about.title}</div>
                    <FoundrySvg />
                </div>
                <div className="about-landing" id="about">
                    <div className="header-- serif fXL">
                        <div>VIOLAINE</div>
                        <div>JÉRÉMY</div>
                    </div>
                    <div className="inner">
                        <div className="row ">
                            <div className="col-xs-6"></div>
                            <div className="col-xs-6">
                                <div className="image">
                                    <Samy path={about.image.file.url} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <div
                                    className="texte fS"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            about.texte.childMarkdownRemark
                                                .html,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="accordion">
                    <div className="inner">
                        {menu.map((li, i) => (
                            <div
                                className="panel"
                                key={i}
                                data-right={(i + 1) * panelWidth}
                            >
                                <div
                                    className={
                                        "panel-header panel-btn panel-" +
                                        li.slug
                                    }
                                    style={{
                                        transitionDelay: "." + i + "s",
                                    }}
                                    onClick={() => this._toggleSection(li.slug)}
                                >
                                    <div className="title serif fXL">
                                        {li.title}
                                    </div>
                                    {li.slug === "fonts" && <FoundrySvg />}
                                </div>

                                <div className="panel-content" id={li.slug}>
                                    <AboutPage data={li} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="about-toggle panel-btn panel-btn-alt"
                    onClick={this._toggle}
                >
                    <div className="title serif fXL">PROJECTS</div>
                </div>
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query {
                about: contentfulAbout {
                    title
                    texte {
                        childMarkdownRemark {
                            html
                        }
                    }
                    image {
                        file {
                            url
                        }
                    }
                    pages {
                        title
                        slug
                        texte {
                            childMarkdownRemark {
                                html
                            }
                        }
                        texteAlt {
                            childMarkdownRemark {
                                html
                            }
                        }
                        image {
                            file {
                                url
                            }
                        }
                        images {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        `}
        render={data => <About data={data} />}
    />
)

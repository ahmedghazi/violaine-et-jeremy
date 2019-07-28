import React, { Component } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { debounce } from "throttle-debounce"
//import { removeClass } from "../core/utils"

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTouch: false,
            cardClass: "",
            cardWidth: 0,
            biseauxHeight: 0,
        }

        this._format = debounce(250, this._format.bind(this))

        this._mouseEnter = this._mouseEnter.bind(this)
        this._mouseLeave = this._mouseLeave.bind(this)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._format)
    }

    componentDidMount() {
        if ("ontouchstart" in window && window.innerWidth <= 768) {
            this.setState({
                isTouch: true,
            })
        } else {
            window.addEventListener("resize", this._format)
            //document.addEventListener("scroll", this._scroll)
            setTimeout(() => {
                this._format()
            }, 150)
        }
    }

    _format() {
        //const { width } = this.refs.card.getBoundingClientRect()
        const { width } = this.refs.link.getBoundingClientRect()
        const figureBounding = this.refs.card
            .querySelector("figure img")
            .getBoundingClientRect()

        const infosBounding = this.refs.card
            .querySelector(".infos")
            .getBoundingClientRect()

        const gap = infosBounding.top - figureBounding.bottom - 40
        this.setState(
            {
                cardWidth: width,
                gap: gap,
            },
            () => {
                this._activeOrInactive()
            }
        )
    }

    componentWillReceiveProps() {
        this._activeOrInactive()
    }

    _activeOrInactive() {
        //return
        // const { innerWidth } = window
        // const min = innerWidth / 4
        // const max = min * 2
        // const { x } = this.refs.card.getBoundingClientRect()
        // removeClass(".card", "active")
        // if (x > min && x < max) {
        //     this.refs.card.classList.add("active")
        //     this._active()
        // } else {
        //     this._inactive()
        // }
    }

    _active() {
        const { gap } = this.state
        const angle = this._getAngle()

        this.setState({
            biseauxHeight: gap,
            angle: angle,
        })
    }
    _inactive() {
        this.setState({
            biseauxHeight: 0,
            angle: 0,
        })
    }

    _getAngle() {
        const { cardWidth, gap } = this.state

        const adjacent = gap
        const hypotenuse = Math.hypot(cardWidth, adjacent)
        const radians = Math.acos(cardWidth / hypotenuse)

        return (radians * 180) / Math.PI
    }

    _mouseEnter() {
        this._active()
    }

    _mouseLeave() {
        //this._activeOrInactive()
        this._inactive()
    }

    render() {
        const {
            cardClass,
            // cardWidth,
            biseauxHeight,
            angle,
        } = this.state

        const { title, slug, tags, date, featuredImage } = this.props.data
        const tagList = tags ? tags.join(", ") : "";

        const style1 = {
            height: biseauxHeight + "px",
            top: -(biseauxHeight - 1) + "px",
        }
        const style2 = {
            transform: "skewY(" + angle + "deg)",
            WebkitTransform: "skewY(" + angle + "deg)",
        }

        return (
            <div
                className={"card " + cardClass}
                ref="card"
                onMouseEnter={this._mouseEnter}
                onMouseLeave={this._mouseLeave}
            >
                <Link ref="link" to={"/project/" + slug}>
                    <figure>
                        {featuredImage &&
                            <Img fluid={featuredImage.fluid} />
                        }
                    </figure>
                    <div className="infos " ref="infos">
                        <div className="biseaux">
                            <span style={style1}></span>
                            <span style={style2}></span>
                        </div>

                        <h2 className="fXS">{title}</h2>
                        <div className="metas fXS">
                            <p className="tags">{tagList}</p>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Card

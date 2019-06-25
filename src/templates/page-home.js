import React from "react"
import { graphql } from "gatsby"
//import PubSub from 'pubsub-js';
//import cookie from 'react-cookies'
import { debounce } from "throttle-debounce"
import ScrollBooster from 'scrollbooster'
import SEO from "../components/SEO"
//import Draggable from 'react-interactjs'
import Interactive from "../core/Interactable"
import Card from "../components/card"

class PageHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isTouch: false,
            coverflowWidth: '100vw',
        }

        

        this._resize = debounce(250, this._resize.bind(this))
        this._onUpdateEnd = debounce(50, this._onUpdateEnd.bind(this))
        //this._move = this._move.bind(this)
        // this._onMouseDown = this._onMouseDown.bind(this)
        // this._onMouseUp = this._onMouseUp.bind(this)
    }

    componentWillUnmount() {
        document.removeEventListener("resize", this._resize)
        // this.viewport.removeEventListener("mousedown", this._onMouseDown)
        // this.viewport.removeEventListener("mouseup", this._onMouseUp)
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
                this._scrollableDraggable()
            }, 150)
        }
    }

    _resize() {
        let w = 0

        const cardLeft = document.querySelector(".card").getBoundingClientRect().left
        const cards = document.querySelectorAll(".card")
        cards.forEach(el => {
            //console.log(el.getBoundingClientRect().width)
            w += el.getBoundingClientRect().width
            //console.log(w)
        })
        w += cardLeft*2
        //w += document.querySelector(".card").getBoundingClientRect().width
        //boundings
        //const cardLeft = document.querySelector(".card").getBoundingClientRect()
           
        const scrollerWidth =
            document
                .querySelector(".projects-coverflow")
                .getBoundingClientRect().width - cardLeft

        this.setState({
            coverflowWidth: w,
            minX: ((w - cardLeft) - scrollerWidth),
        }, () => {
            this._ScrollBooster.updateMetrics()
        })
    }

    _scrollableDraggable(){
        //return
        this.viewport = document.querySelector('.projects-coverflow')
        const content = document.querySelector('.projects-coverflow > .inner')
        this._ScrollBooster = new ScrollBooster({
            viewport: this.viewport,
            content: content,
            mode: 'x',
            emulateScroll: true,
            //bounce: false,
            onUpdate: (data)=> {
                //console.log(data.position.x, this.state.minX)
                //viewport.scrollLeft = data.position.x
                const x = this.viewport.getAttribute("data-x")
                this.viewport.setAttribute("data-x", data.position.x)
                
                if(data.position.x != x){
                    if(data.position.x < this.state.minX){
                        this.viewport.classList.add("p-e-n")
                        content.style.transform = `translateX(
                            ${-data.position.x}px
                          )`
                    }
                }
                
                this._onUpdateEnd()
                
            }
        })

        // this.viewport.addEventListener("mousedown", this._onMouseDown)
        // this.viewport.addEventListener("mouseup", this._onMouseUp)
    }

    // _onMouseDown(){
    //     this.viewport.classList.add("p-e-n")
    // }
    // _onMouseUp(){
    //     this.viewport.classList.remove("p-e-n")
    // }

    _onUpdateEnd(){
        console.log("_onUpdateEnd")
        this.viewport.classList.remove("p-e-n")
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
                            // <Interactive
                            //     draggable={true}
                            //     draggableOptions={draggableOptions}
                            // >
                            //     <div className="inner" style={style}>
                            //         {home.projects.map((item, i) => (
                            //             <Card
                            //                 key={i}
                            //                 data={item}
                            //                 x={scrollerX}
                            //             />
                            //         ))}
                            //     </div>
                            // </Interactive>
                            <div className="inner" style={style}>
                                {home.projects.map((item, i) => (
                                    <Card
                                        key={i}
                                        data={item}
                                        x={scrollerX}
                                    />
                                ))}
                            </div>
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

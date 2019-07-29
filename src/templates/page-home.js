import React from "react"
import { graphql } from "gatsby"
//import PubSub from 'pubsub-js';
//import cookie from 'react-cookies'
import { debounce } from "throttle-debounce"
import ScrollBooster from 'scrollbooster'
import SEO from "../components/SEO"
//import Draggable from 'react-interactjs'
//import Interactive from "../core/Interactable"
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
        this._onWheel = this._onWheel.bind(this)
    }

    componentWillUnmount() {
        document.removeEventListener("resize", this._resize)

        window.removeEventListener("wheel", this._onWheel, false);
    }

    componentDidMount() {
        if ("ontouchstart" in window && window.innerWidth <= 768) {
            this.setState({
                isTouch: true,
            })
        } else {
            
            this.viewport = document.querySelector('.projects-coverflow')
            window.addEventListener("wheel", this._onWheel, false);
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
            w += el.getBoundingClientRect().width
        })
        
        w += cardLeft*2

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

    _onWheel(e){
        //e.preventDefault();
        let x = this.viewport.getAttribute("data-x")
        x -= (e.wheelDelta || -e.detail);
        this._ScrollBooster.setPosition({
            x: x
        })
    }

    _scrollableDraggable(){
        //return
        
        const content = document.querySelector('.projects-coverflow > .inner')
        this._ScrollBooster = new ScrollBooster({
            viewport: this.viewport,
            content: content,
            mode: 'x',
            emulateScroll: true,
            //bounce: false,
            onUpdate: (data)=> {

                const x = parseFloat(this.viewport.getAttribute("data-x"))
                this.viewport.setAttribute("data-x", data.position.x)
                
                if(data.position.x !== x){
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

    }


    _onUpdateEnd(){
        console.log("_onUpdateEnd")
        this.viewport.classList.remove("p-e-n")
    }

    render() {
        //console.log(this.props)
        const { coverflowWidth } = this.state

        const style = {
            width: coverflowWidth + "px",
            opacity: 1,
        }

        const { options, home } = this.props.data

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
                        <div className="inner" style={style}>
                            {home.projects.map((item, i) => (
                                <Card 
                                    key={i} 
                                    data={item} 
                                    //x={scrollerX} 
                                />
                            ))}
                        </div>
                        {/* {!isTouch && (
            
                            <div className="inner" style={style}>
                                {home.projects.map((item, i) => (
                                    <Card
                                        key={i}
                                        data={item}
                                        //x={scrollerX}
                                    />
                                ))}
                            </div>
                        )}
                        {isTouch && (
                            <div className="inner" style={style}>
                                {home.projects.map((item, i) => (
                                    <Card 
                                        key={i} 
                                        data={item} 
                                        //x={scrollerX} 
                                    />
                                ))}
                            </div>
                        )} */}
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
                images {
                    ...sharpM
                }
            }
        }
    }
`

import React, { Component } from "react"
import { Samy } from "react-samy-svg"
import PubSub from 'pubsub-js';

class AboutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: null,
        }
        
        this._randomizeImages = this._randomizeImages.bind(this)
    }

    componentWillUnmount() {
        PubSub.unsubscribe("PANEL_CLOSE", this._randomizeImages)
    }
    
    componentDidMount() {
        this._randomizeImages()
        PubSub.subscribe("PANEL_CLOSE", this._randomizeImages)
    }

    // componentWillUpdate(){
    //     console.log("componentWillUpdate")
    //     //this._randomizeImages()
    // }

    _randomizeImages(){
        const { data } = this.props
        if (data.images) {
            const rand = Math.round(Math.random() * (data.images.length - 1))
            console.log(rand)
            this.setState({
                images: data.images[rand],
            })
        }
    }

    render() {
        const { images } = this.state
        const { data } = this.props

        const _className = images ? "has-images" : ""
        const isStudio = data.slug === "studio"
        
        return (
            <div className={"about-page " + _className + " page-" + data.slug}>
                <div className="inner">
                    {isStudio && (
                        <div className="row end-xs">
                            <div className="col-xs-12 col-md-8">
                                <div className="circle"></div>
                            </div>
                        </div>
                    )}
                    <div className="row middle-xs">
                        <div className={"col-xs-12 col-md-6 col-lg-4"}>
                            {data.image && (
                                <div className="image">
                                    <Samy path={data.image.file.url} />
                                </div>
                            )}
                            <div
                                className="texte "
                                dangerouslySetInnerHTML={{
                                    __html: data.texte.childMarkdownRemark.html,
                                }}
                            ></div>
                            {data.texteAlt && (
                                <div
                                    className="texte "
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            data.texteAlt.childMarkdownRemark
                                                .html,
                                    }}
                                ></div>
                            )}
                        </div>

                        {images && (
                            <div className="col-xs-12 col-md-6 col-lg-8">
                                <div className="images">
                                    <img src={images.file.url} alt="" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage

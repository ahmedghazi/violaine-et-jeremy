import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { Link } from 'gatsby';
import SvgLines from 'react-mt-svg-lines';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: true,
            playback: ''
        }
    }

    componentDidMount(){
        
        PubSub.subscribe('PRE_ROUTE_UPDATE', (e,d) => {
            // console.log(e)
            // document.body.classList.add("loading")
            // console.log(document.body.classList)
        })

        PubSub.subscribe('ROUTE_UPDATE', (e,d) => {
            // console.log(e)
            // setTimeout(() => {
            //     document.body.classList.remove("loading")
            // }, 1000)

            // const rand = Math.round(Math.random() * 1000)
            // this.setState({
            //     animate: rand
            // })
        })
    }

    _onClick(){
        PubSub.publish("CLOSE_ABOUT")
    }
    // _onMouseEnter(){
    //     const rand = Math.round(Math.random() * 1000)
    //     this.setState({
    //         animate: rand
    //     })
    // }

    render() {
        const {
            animate
        } = this.state

        return (
            <header>
                <Link to="/" onClick={() => this._onClick()}>
                    <div className="esperluette">
                        <SvgLines 
                        animate={ animate } 
                        duration={ 1500 }
                        timing="ease-in"
                        jsOnly={false}
                        //playback={playback}
                        //onMouseEnter={() => this._onMouseEnter()}
                        >
                            <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.62 211.35">
                                <path vectorEffect="non-scaling-stroke" className="cls-1" d="M114.7,86.37A69.48,69.48,0,1,0,120.6,189L220.41,74.86"/>
                                <path vectorEffect="non-scaling-stroke" className="cls-1" d="M254.65,205.18,114.7,86.37A46.61,46.61,0,1,1,177.75,19"/>
                            </svg>
                        </SvgLines>
                    </div>

                </Link>
            </header>
        );
    }
}

export default Header;
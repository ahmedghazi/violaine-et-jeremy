import React, { Component } from "react"
import Draggable from 'react-draggable';

class FoundrySvg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _className: "",
            compteur: 0,
        }
        this._wheeling = this._wheeling.bind(this)
        this._wheelingAfter = this._wheelingAfter.bind(this)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        window.removeEventListener("wheel", this._wheeling)
    }

    componentDidMount() {
        window.addEventListener("wheel", this._wheeling)
        this._animate()
    }

    _wheeling(e) {
        clearInterval(this.timer)
        const deltaY = Math.sign(e.deltaY)
        const deltaX = Math.sign(e.deltaX)
        let _className = "wheeling"
        let compteur = this.state.compteur
        if (deltaX > 0 ||  deltaY > 0) {
            compteur += 1
            //_className += ""
        } else {
            compteur -= 1
            //_className += " reverse"
        }
        this.refs.foundy.style.transform = "rotate(" + compteur + "deg)"

        this.setState({
            compteur: compteur,
            _className: _className,
        })

        clearTimeout(this.wheeling)
        this.wheeling = setTimeout(() => {
            this._wheelingAfter()
        }, 250)
    }

    _wheelingAfter() {
        //console.log('stop wheeling!');
        this.wheeling = undefined
        this.setState({
            _className: "",
        })
        this._animate()
    }

    _animate(){
        this.timer = setInterval(() => {
            let compteur = this.state.compteur
            compteur += 1
            this.refs.foundy.style.transform = "rotate(" + compteur + "deg)"
            this.setState({
                compteur: compteur
            })
        }, 20)
    }

    render() {
        const { _className } = this.state
        return (
            
            <div 
            onMouseEnter={() => clearInterval(this.timer)}
            onMouseLeave={() => this._animate()}
            className={"foundry " + _className} ref="foundy">
                <a
                    href="https://vj-type.com"
                    rel="noopener noreferrer"
                    target="_blank">
                    <svg
                        id=""
                        data-name="Calque 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 91.6 91.6"
                    >
                        <g>
                            <circle
                                className="cls-11"
                                cx="45.8"
                                cy="45.8"
                                r="44.89"
                            />
                            <path
                                className="cls-22"
                                d="M45.8,91.6A45.8,45.8,0,1,1,91.6,45.8,45.85,45.85,0,0,1,45.8,91.6Zm0-89.78a44,44,0,1,0,44,44A44,44,0,0,0,45.8,1.82Z"
                            />
                            <g>
                                <path
                                    className="cls-22"
                                    d="M11.25,55.33l-1-5,1.13-.22L11.77,52l6.68-1.33.23,1.17L12,53.18l.38,1.92Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M10.84,37.74l3.57,3.16,4,.54-.16,1.21-4-.54L10,44.22l.2-1.45,3-1.43-2.49-2.15Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M12.75,32.07l.95-2a2.33,2.33,0,0,1,3.13-1.06,2.29,2.29,0,0,1,1.1,3.11l-.44.9,2.92,1.42-.51,1.05Zm1.54-.55,2.17,1.05.42-.86a1.11,1.11,0,0,0-.59-1.55,1.11,1.11,0,0,0-1.58.5Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M26.25,24.36l.85.79L24,28.45,18.19,23l3.09-3.3.86.8L19.85,23l1.59,1.49,1.76-1.89.86.8L22.3,25.25,24,26.81Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M33.81,13.31l.72,2.15L37,14.63l.35,1-2.47.83L36,19.79l-1.11.37-2.53-7.54,4.33-1.45L37,12.23Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M50.2,14a4.08,4.08,0,0,1-4.1,4A3.79,3.79,0,0,1,42.17,14a3.84,3.84,0,0,1,4-3.92A4,4,0,0,1,50.2,14ZM49,14a2.82,2.82,0,1,0-2.86,2.87A2.79,2.79,0,0,0,49,14Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M61.62,13.62l-1.9,4.78A2.59,2.59,0,0,1,56.1,20a2.62,2.62,0,0,1-1.54-3.67l1.9-4.78,1.11.44-1.94,4.88A1.51,1.51,0,0,0,56.5,19a1.54,1.54,0,0,0,2.08-.91l1.94-4.88Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M72.24,21.52l-5.56,6.11-.13-7.71L63,23.85l-.87-.79L67.68,17l.14,7.7,3.56-3.92Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M77.34,28.9a4,4,0,0,1-7.08,3.63l-1.05-2.05,7.08-3.63ZM71.26,32a2.85,2.85,0,0,0,5.07-2.6l-.52-1L70.75,31Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M75.55,44.95l.15,1.23a1.84,1.84,0,0,1-2.06-1.61c-.1-.88.41-1.57,1.46-2a3.2,3.2,0,0,0,1.48-.9c.18-.3.17-.18,0-1.31l-3.4.4-.14-1.16L81,38.7l.24,2.05a2.26,2.26,0,0,1-2,2.53,2.29,2.29,0,0,1-1.88-.62,4.07,4.07,0,0,1-1.76,1.07c-.51.2-.72.4-.68.7A.59.59,0,0,0,75.55,44.95ZM79.93,40l-2.12.25.1.85a1,1,0,0,0,1.15.91,1,1,0,0,0,1-1.16Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M80.21,56.2l-3.36-3.39L72.94,52l.24-1.19,3.91.8,4.42-1.84-.29,1.44-3.07,1.23,2.35,2.31Z"
                                />
                            </g>
                            <g>
                                <path
                                    className="cls-22"
                                    d="M31.94,67.42l-7.52,4.69,2.63-8.47,1,.79L26.44,69.5l4.5-2.86Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M27.63,77.24h0a8.64,8.64,0,1,1,6.84-3.35A8.55,8.55,0,0,1,27.63,77.24Zm0-15.91a7.27,7.27,0,0,0,0,14.55h0a7.27,7.27,0,0,0,0-14.55Z"
                                />
                            </g>
                            <g>
                                <path
                                    className="cls-22"
                                    d="M61.25,64.54l3.63,4.21a2.24,2.24,0,1,1-3.26,3.07l.93-.8a1.06,1.06,0,0,0,1.53.21c.42-.37.6-.92-.17-1.81l-3.55-4.11Z"
                                />
                                <path
                                    className="cls-22"
                                    d="M62.53,77.42h0a8.64,8.64,0,1,1,5.64-2.1A8.63,8.63,0,0,1,62.53,77.42Zm0-15.91A7.27,7.27,0,1,0,68,64,7.28,7.28,0,0,0,62.53,61.51Z"
                                />
                            </g>
                            <path
                                className="cls-22"
                                d="M44.95,74.31l0-3.21h1.36l0,3.21,3.21,0v1.39l-3.21,0,0,3.21H44.9l0-3.21-3.21,0V74.28Z"
                            />
                            <path
                                className="cls-22"
                                d="M37.15,30.31a9.15,9.15,0,0,0-6.49,15.61L45.06,60.3a.9.9,0,0,0,1.23,0L60.7,45.93A9.16,9.16,0,0,0,47.73,33l-2,2L43.63,33a9.63,9.63,0,0,0-6.48-2.67Zm0,1.72a7.44,7.44,0,0,1,5.26,2.19l2.66,2.66a.9.9,0,0,0,1.23,0L49,34.23a7.44,7.44,0,0,1,10.53,0,7.35,7.35,0,0,1,0,10.48L45.68,58.46,31.89,44.69a7.35,7.35,0,0,1,0-10.48A7.44,7.44,0,0,1,37.15,32Z"
                            />
                        </g>
                    </svg>
                </a>
            </div>
      
        )
    }
}

export default FoundrySvg

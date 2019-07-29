import React, { Component } from 'react';

class Cursor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTouch: false,
        }

        this._onMouseMove = this._onMouseMove.bind(this)
        this.whiteList = ['a', '.panel-btn']
    }

    componentWillUnmount() {
        document.body.removeEventListener("mousemove", this._onMouseMove)
    }

    componentDidMount(){
        document.body.addEventListener("mousemove", this._onMouseMove)
    }

    _onMouseMove(e){
        let cursorClass = e.target.href ? "is-anchor" : "";
        // if(e.target.closest("a")){
        //     cursorClass = "is-anchor"
        // }
        // if(e.target.closest(".panel-btn")){
        //     cursorClass = "is-anchor"
        // }
        this.whiteList.forEach(el => {
            if(e.target.closest(el)){
                cursorClass = "is-anchor"
            }
        })
        // e.target.classList.forEach(element => {
        //     console.log(element)
        // });
      
        //console.log(e.target.classList)
        const x = e.clientX - 25
        const y = e.clientY - 25
        this.refs.cursor.style.left = x+"px"
        this.refs.cursor.style.top = y+"px"
        this.refs.cursor.style.opacity = 1

        this.refs.cursor.className = cursorClass
    }

    render() {
        return (
            <div id="cursor" ref="cursor">
                <div className="inner"></div>
            </div>
        );
    }
}

export default Cursor;
import React from 'react'

const WrapperContext = React.createContext()

class WrapperProvider extends React.Component {
    state = {
        lang: ''
    }
    
    toggleDark = () => {
        let lang = !this.state.lang
        //localStorage.setItem("lang", JSON.stringify(lang))
        this.setState({ lang })
    }

    render() {
        return (
            <WrapperContext.Provider
                value={{
                    ...this.state
                }}>
                {this.props.children}
            </WrapperContext.Provider>
        )
    }
}

export default WrapperContext

export { WrapperProvider }
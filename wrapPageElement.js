/* eslint react/prop-types: 0, react/display-name: 0 */
import React from 'react'

import { Layout } from './src/components/layout'

// const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>

// export default wrapPageElement
const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout 
    //template={props.pageContext.template}
    {...props}>{element}</Layout>
}
export default wrapPageElement
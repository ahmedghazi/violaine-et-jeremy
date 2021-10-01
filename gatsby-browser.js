//import React from 'react'
import PubSub from 'pubsub-js';
//import LocaleWrap from './wrapPageElement'

//export const wrapPageElement = LocaleWrap

export const onPreRouteUpdate = ({ location }) => {
    PubSub.publish('PRE_ROUTE_UPDATE', {
        location: location
    })
}
export const onRouteUpdate = ({ location }) => {
    //console.log('new pathname', location.pathname)
    PubSub.publish('ROUTE_UPDATE', {
        location: location
    })
}
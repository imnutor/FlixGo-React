import React, { Component } from 'react'
import ContentHead from "./contentHead"
import ContentBody from './contentBody'


export default class ContentComponent extends Component {
    render() {
        return (
            <section className="content">
                <ContentHead />
                <ContentBody />
                
            </section>
        )
    }
}

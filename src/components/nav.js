import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from '../components/layout';


class Nav extends Component {
    render() {
        const items = this.props.items

        return (
            <nav>
                <ul>

                </ul>
            </nav>
        )
    }
}

Nav.propTypes = {
    items: PropTypes.object.isRequired,
}

export default Nav

import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: "Welcome to Manny's Shop",
    description: "I make the best websites, apps and paintings",
    keywords: 'art, design, code'
}

export default Meta

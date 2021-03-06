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
    title: "Cannabis Shop",
    description: "The best flowers in San Francisco",
    keywords: 'art, design, code'
}

export default Meta

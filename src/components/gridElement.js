import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import Image from "../components/image"
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    grid__item: {
        textDecoration: 'none',
        fontWeight: '300',
        color: '#111111',
    },
    grid__item__title: {
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '400',
        color: '#111111',
    }
})

export default function GridElement({ content }) {

    const classes = useStyles();

    const items = content.map(( item ) => {
        return <div key={item.node.slug}>
            <Link className={classes.grid__item}  to={item.node.slug}>
                <h2 classes={grid__item__title}>{item.node.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
                {item.node.featured_media &&
                    <Image imageData={item.node.featured_media.source_url} />
                }
            </Link>
        </div>
    })

    return (
        <div>
            { items }
        </div>
    )
}

GridElement.propTypes = {
    content: PropTypes.array,
}

GridElement.defaultProps = {
    content: [],
}

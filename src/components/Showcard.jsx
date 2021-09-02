import PropTypes from 'prop-types'
import Card from "react-bootstrap/Card";
import { useState } from 'react'
import Preloader from './Preloader';
import ImgNotFound from '../resource/img-not-found.png'

const Showcard = ({title, images, releaseYear}) => {
    const poster = images['Poster Art']
    const originalposterurl = poster.url
    
    const [loaded, setLoaded] = useState(false)
    const [haserror, setError] = useState(false)

    const classActual = !loaded ? 'd-none': ''

    return (
        <Card tag="a" style={defaultStyle}>
            <Preloader loading={!loaded}/>
            {
                haserror ?
                <Card.Img src={ImgNotFound} />
                :
                <Card.Img src={originalposterurl} alt={'poster '+title} className={classActual} 
                onLoad={() => {setLoaded(true); setError(false)}} 
                onError={() => {setLoaded(true); setError(true)}}/>
            }
            <Card.Body>
                <Card.Text>{title} - {releaseYear}</Card.Text>
            </Card.Body>
        </Card>
    )
}

Showcard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.object,
    releaseYear: PropTypes.number,
    onClick: PropTypes.func
}

Showcard.defaultProps = {
    title: '',
    description: '',
    images: '',
    releaseYear: ''
}


const defaultStyle = {
    width: '15em'
}

export default Showcard

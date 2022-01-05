import React from 'react';
import { Link } from 'react-router-dom';

const TileInternal = ({ BgImg, tileTitle, pathURL }) => {
    return (
        <div>
            <Link to={pathURL}>
                <div className='tileImage'>
                    <img alt={tileTitle} src={BgImg} />
                </div>
                <div className='tileTitleContainer'>
                    <h2>{tileTitle}</h2>
                </div>
            </Link>
        </div>
    )
}

export default TileInternal

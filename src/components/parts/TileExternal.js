import React from 'react';

const TileExternal = ({ BgImg, tileTitle, pathURL }) => {
    return (
        <div>
            <a target='_blank' rel="noreferrer" href={pathURL}>
                <div className='tileImage'>
                    <img alt={tileTitle} src={BgImg} />
                </div>
                <div className='tileTitleContainer'>
                    <h2>{tileTitle}</h2>
                </div>
            </a>
        </div>
    )
}

export default TileExternal

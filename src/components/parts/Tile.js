import React from 'react';

const Tile = ({ BgImg, tileTitle, pathURL }) => {
    return (
        <div>
            <a href={pathURL}>
                <div className='tileImage'>
                    <img src={BgImg} />
                </div>
                <div className='tileTitleContainer'>
                    <h2>{tileTitle}</h2>
                </div>
            </a>
        </div>
    )
}

export default Tile

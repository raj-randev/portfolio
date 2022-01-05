import React from 'react';
import projects from '../database/WebsitesArray';
import TileExternal from '../parts/TileExternal';

const Websites = () => {
    return (
        <div className='projects'>
            <h1 style={{textAlign: 'center', color: '#ffffff', margin: 0, padding: '20px 0'}}>Websites</h1>
            <div className='projectHolder'>
                {projects.map(project => {
                    return (
                        <div key={project.id} className='tileHolder'>
                        <TileExternal BgImg={project.image} tileTitle={project.name} pathURL={project.path}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Websites

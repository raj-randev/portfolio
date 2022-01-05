import React from 'react'
import projects from '../database/Animation2DArray'
import TileInternal from '../parts/TileInternal'

const Animation2D = () => {
    
    return (
        
        <div className='projects'>
            <h1 style={{textAlign: 'center', color: '#ffffff', margin: 0, padding: '20px 0'}}>2D Animations</h1>
            <div className='projectHolder'>
                {projects.map(project => {
                    return (
                        <div key={project.id} className='tileHolder'>
                        <TileInternal BgImg={project.image} tileTitle={project.name} pathURL={project.path}/>
                        </div>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Animation2D

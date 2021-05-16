import React from 'react'




function PhotoCard({img_src, id}){
    return(
       
        <div className="photo-card">
            <img src={img_src} alt={id} className="photo-card__image"/>
        </div>
     
        

    )
}

export default PhotoCard
import React from 'react'
import {getLatestPhotos} from '../lib/api'
import PhotoCard from './PhotoCard'

function Photos(){
    const [photos, setPhotos] = React.useState()

    React.useEffect(() => {
        const getData = async () => {
            try{
                const {data} = await getLatestPhotos()
                setPhotos(data.photos)
            }catch(err){
                console.log(err)
            }
        }
        getData()
    }, [])




   console.log(photos)

    return(
        <>
        <main className="page-container">
            <div className="page-title">
                <h1>Curiosity's Latest Photos</h1>
                <h5>The latest photos taken by the Curiosity rover. Sourced from Nasa's open API</h5>
            </div>
            <article className="photos-container">
               {photos ?
                photos.map(photo => (
                    <PhotoCard key={photo.id} {...photo}/>
                ))
                :
                <p>Loading</p>
               }
            </article>
        </main>
        </>
    )
}

export default Photos
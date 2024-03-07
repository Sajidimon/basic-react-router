import { useLoaderData } from "react-router-dom";
import SinglePhoto from "../SinglePhoto/SinglePhoto";
import './Photos.css'


const Photos = () => {


    const photos = useLoaderData();

    return (
        <div className="photostyle">
            {
                photos.map(photo => <SinglePhoto key={photo.id } photo = {photo} ></SinglePhoto>)
            }
        </div>
    );
};

export default Photos;
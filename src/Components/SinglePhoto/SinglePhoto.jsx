import { Link } from "react-router-dom";


const SinglePhoto = ({ photo }) => {
    
    const { id, title, url, thumbnailUrl } = photo;

    return (
        <div>
            <h2>Photo title: {title}</h2>
            <img src={thumbnailUrl} alt="" />
            <Link to={`/photo/${id}`}><h4><button>Show big image</button></h4></Link>
        </div>
    );
};

export default SinglePhoto;
import { useLoaderData, useNavigate } from "react-router-dom";


const BigPhoto = () => {


    const bigphoto = useLoaderData();

    const navigate = useNavigate();

    const { url } = bigphoto;

    const handlegoback = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Here is your big photo</h3>
            <img src={url} alt="" />
            <h4><button onClick={handlegoback}>Go Back</button></h4>
        </div>
    );
};

export default BigPhoto;
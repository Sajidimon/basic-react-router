import { useLoaderData } from "react-router-dom";


const Userdetails = () => {

    const userDetail = useLoaderData();

    const { name, email, phone} = userDetail;

    return (
        <div>
            <h2>My name is {name}</h2>
            <p>My email is {email}</p>
            <p>My phone no is { phone}</p>
        </div>
    );
};

export default Userdetails;
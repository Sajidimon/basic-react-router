import { useLoaderData } from "react-router-dom";
import User from "../User/User";



const Users = () => {

    const users = useLoaderData();

    return (
        <div className="userstyle">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            
        </div>
    );
};

export default Users;
import { Link } from 'react-router-dom';
import './User.css'

const User = ({ user }) => {
    
    const { id, name, email, phone } = user;
    
    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>User Details</Link>
        </div>
    );
};

export default User;
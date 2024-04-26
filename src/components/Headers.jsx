import { NavLink } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <button className='btn'><NavLink to='/'>Home</NavLink></button>
            <button className="btn"><NavLink to='/users'>Users</NavLink></button>
            <button className="btn"><NavLink to='/login'>Login</NavLink></button>
            <button className="btn"><NavLink to='/signup'>SignUp</NavLink></button>
        </div>
    );
};

export default Headers;
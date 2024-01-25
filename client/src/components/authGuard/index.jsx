import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function AuthGuard({
    children,
}) {
    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    const isAuthenticated = user?.isLoggedIn && user?.currentUser?.user_id;
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [user, navigate]);

    return isAuthenticated ? <> {children} </> : null;
};

export default AuthGuard;

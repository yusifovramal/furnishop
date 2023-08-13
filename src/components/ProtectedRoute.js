import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Navigate } from 'react-router-dom';
import Checkout from '../pages/Checkout';

function ProtectedRoute({ page }) {
    const { isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        Navigate({ to: "/" })
        return
    }
    return page
}

export default ProtectedRoute
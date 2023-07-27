import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'

function AuthWrapper({ children }) {
        return (
            <Auth0Provider
                domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
                clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
                authorizationParams={{
                    redirect_uri: window.location.origin
                }}
            >
            {children}</Auth0Provider>
        )

}

export default AuthWrapper
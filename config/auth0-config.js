// Auth0 Configuration
// Replace these values with your Auth0 application credentials
const AUTH0_CONFIG = {
    domain: 'YOUR_AUTH0_DOMAIN.auth0.com',
    clientId: 'YOUR_AUTH0_CLIENT_ID',
    redirectUri: window.location.origin + '/dashboard.html',
    responseType: 'token id_token',
    scope: 'openid profile email',
    audience: 'https://YOUR_AUTH0_DOMAIN.auth0.com/api/v2/'
};

// For development/testing, you can use these placeholder values
// In production, replace with actual Auth0 credentials
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUTH0_CONFIG;
}

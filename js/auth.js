// Authentication utilities using Auth0
class AuthService {
    constructor() {
        this.auth0 = null;
        this.accessToken = null;
        this.idToken = null;
        this.profile = null;
        this.initAuth0();
    }

    initAuth0() {
        if (typeof auth0 !== 'undefined' && AUTH0_CONFIG) {
            this.auth0 = new auth0.WebAuth({
                domain: AUTH0_CONFIG.domain,
                clientID: AUTH0_CONFIG.clientId,
                redirectUri: AUTH0_CONFIG.redirectUri,
                responseType: AUTH0_CONFIG.responseType,
                scope: AUTH0_CONFIG.scope,
                audience: AUTH0_CONFIG.audience
            });
            console.log('Auth0 initialized');
        }
    }

    login() {
        if (this.auth0) {
            this.auth0.authorize();
        } else {
            console.error('Auth0 not initialized. Please configure AUTH0_CONFIG.');
            alert('Authentication is not configured. Please set up Auth0 credentials.');
        }
    }

    logout() {
        // Clear local session
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user_profile');
        
        this.accessToken = null;
        this.idToken = null;
        this.profile = null;

        // Redirect to home page
        window.location.href = '/index.html';
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            if (!this.auth0) {
                reject('Auth0 not initialized');
                return;
            }

            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve(authResult);
                } else if (err) {
                    console.error('Authentication error:', err);
                    reject(err);
                }
            });
        });
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );

        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;

        // Store tokens in localStorage
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);

        // Get user profile
        this.getUserProfile();
    }

    getUserProfile() {
        if (!this.auth0 || !this.accessToken) {
            return;
        }

        this.auth0.client.userInfo(this.accessToken, (err, profile) => {
            if (profile) {
                this.profile = profile;
                localStorage.setItem('user_profile', JSON.stringify(profile));
                console.log('User profile loaded:', profile);
            } else if (err) {
                console.error('Error loading user profile:', err);
            }
        });
    }

    isAuthenticated() {
        // Check whether the current time is past the access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '0');
        return new Date().getTime() < expiresAt;
    }

    getProfile() {
        if (this.profile) {
            return this.profile;
        }
        
        const stored = localStorage.getItem('user_profile');
        if (stored) {
            this.profile = JSON.parse(stored);
            return this.profile;
        }
        
        return null;
    }

    getAccessToken() {
        return this.accessToken || localStorage.getItem('access_token');
    }

    requireAuth() {
        if (!this.isAuthenticated()) {
            alert('Please log in to access this page.');
            window.location.href = '/index.html';
            return false;
        }
        return true;
    }
}

// Create global auth service instance
const authService = new AuthService();

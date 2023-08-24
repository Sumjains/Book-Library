export const oktaConfig = {
    clientId: '{Client ID}',
    issuer: 'https://{issuer ID}/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}

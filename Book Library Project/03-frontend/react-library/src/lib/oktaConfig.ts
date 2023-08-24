export const oktaConfig = {
    clientId: '0oaawdofq55RPajTy5d7',
    issuer: 'https://dev-06606713.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}
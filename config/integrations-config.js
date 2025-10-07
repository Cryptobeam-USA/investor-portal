// DocuSign API Configuration
const DOCUSIGN_CONFIG = {
    // Replace with your DocuSign integration key
    integratorKey: 'YOUR_DOCUSIGN_INTEGRATOR_KEY',
    // DocuSign environment (demo or production)
    environment: 'demo',
    // Base URL for DocuSign API
    baseUrl: 'https://demo.docusign.net/restapi',
    // Account ID
    accountId: 'YOUR_DOCUSIGN_ACCOUNT_ID',
    // Template IDs
    templates: {
        nda: 'YOUR_NDA_TEMPLATE_ID',
        lpa: 'YOUR_LPA_TEMPLATE_ID',
        subscriptionAgreement: 'YOUR_SUBSCRIPTION_TEMPLATE_ID'
    }
};

// Plaid Configuration for accreditation verification
const PLAID_CONFIG = {
    // Replace with your Plaid credentials
    clientId: 'YOUR_PLAID_CLIENT_ID',
    secret: 'YOUR_PLAID_SECRET',
    publicKey: 'YOUR_PLAID_PUBLIC_KEY',
    env: 'sandbox', // sandbox, development, or production
    products: ['assets', 'income'],
    countryCodes: ['US']
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DOCUSIGN_CONFIG, PLAID_CONFIG };
}

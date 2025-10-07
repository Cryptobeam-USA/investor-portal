# Cryptobeam Fund - Investor Portal

Secure investor portal for accredited investors supporting SEC Regulation D 506(b) compliance, digital onboarding, NDA signing, and secure fund document access.

## Overview

This investor portal provides a complete solution for managing accredited investor onboarding and document access for a private investment fund operating under SEC Regulation D, Rule 506(b).

### Key Features

- 🔐 **Secure Authentication** - Auth0-powered authentication with multi-factor authentication support
- ✅ **Accreditation Verification** - Plaid integration for automated investor accreditation verification
- 📝 **Digital Signatures** - DocuSign API integration for NDA and Limited Partnership Agreement signing
- 📄 **Document Management** - Secure access to Form D filings and partnership agreements
- 🔒 **Compliance** - Full Reg D 506(b) compliance with investor tracking and reporting
- 📊 **Investor Dashboard** - Personalized dashboard showing onboarding status and documents

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Authentication:** Auth0
- **Database:** Firebase Firestore
- **E-Signatures:** DocuSign API
- **Financial Verification:** Plaid API
- **Hosting:** Webflow (or any static hosting service)

## Project Structure

```
investor-portal/
├── index.html                  # Landing page
├── dashboard.html              # Investor dashboard (authenticated)
├── documents.html              # Document library (authenticated)
├── about.html                  # About the fund
├── config/
│   ├── auth0-config.js        # Auth0 configuration
│   ├── firebase-config.js     # Firebase configuration
│   └── integrations-config.js # DocuSign and Plaid configuration
├── js/
│   ├── auth.js                # Authentication utilities
│   ├── main.js                # Landing page logic
│   ├── dashboard.js           # Dashboard functionality
│   └── documents.js           # Document management
├── styles/
│   └── main.css               # Main stylesheet
├── templates/
│   ├── Form_D_Template.md     # SEC Form D filing template
│   └── Limited_Partnership_Agreement.md  # LPA template
├── package.json               # Project dependencies
└── README.md                  # This file
```

## Setup Instructions

### 1. Prerequisites

- Node.js 16+ (for local development server)
- Auth0 account (free tier available)
- Firebase project (free tier available)
- DocuSign developer account (sandbox available)
- Plaid developer account (sandbox available)

### 2. Clone the Repository

```bash
git clone https://github.com/REDDNoC/investor-portal.git
cd investor-portal
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Authentication (Auth0)

1. Create an Auth0 account at https://auth0.com
2. Create a new Single Page Application
3. Configure the following settings:
   - **Allowed Callback URLs:** `http://localhost:8080/dashboard.html` (add production URL later)
   - **Allowed Logout URLs:** `http://localhost:8080/index.html`
   - **Allowed Web Origins:** `http://localhost:8080`
4. Update `config/auth0-config.js` with your credentials:
   ```javascript
   domain: 'your-tenant.auth0.com',
   clientId: 'your_client_id',
   ```

### 5. Configure Firebase

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Firestore Database
3. Get your Firebase config from Project Settings
4. Update `config/firebase-config.js` with your credentials

### 6. Configure DocuSign (Optional)

1. Create a DocuSign developer account
2. Create templates for NDA and LPA documents
3. Update `config/integrations-config.js` with your credentials

### 7. Configure Plaid (Optional)

1. Create a Plaid account at https://plaid.com
2. Get your API keys
3. Update `config/integrations-config.js` with your credentials

### 8. Run Locally

```bash
npm start
```

Visit http://localhost:8080 in your browser.

## Deployment

### Deploy to Webflow

1. Export your Webflow site
2. Copy HTML files to your Webflow pages
3. Upload CSS and JS files to Webflow Assets
4. Update URLs in HTML files to reference Webflow-hosted assets
5. Configure custom domain and SSL

### Deploy to Static Hosting

The portal can be deployed to any static hosting service:

- **Netlify:** Drop the folder or connect to GitHub
- **Vercel:** Import from GitHub repository  
- **AWS S3 + CloudFront:** Upload files to S3 bucket
- **GitHub Pages:** Enable in repository settings

### Environment Variables

For production deployment, update all configuration files with production credentials:
- Use production Auth0 tenant
- Use production Firebase project
- Use production DocuSign account
- Use production Plaid environment

**Security Note:** Never commit real API keys to version control. Use environment variables or secure configuration management.

## Usage

### For Investors

1. **Landing Page:** Visit the portal homepage
2. **Registration:** Click "New Investor Registration" to create an account
3. **Authentication:** Log in with Auth0 (supports email/password, social login, MFA)
4. **Onboarding:**
   - Complete accreditation verification via Plaid
   - Review and sign NDA via DocuSign
   - Review and sign Limited Partnership Agreement via DocuSign
5. **Dashboard:** Access investor dashboard to view status and documents
6. **Documents:** Access fund documents, Form D filings, and agreements

### For Fund Administrators

1. Monitor investor onboarding status via Firebase
2. Review completed DocuSign envelopes
3. Verify accreditation documentation
4. Manage document access and permissions

## Regulatory Compliance

### SEC Regulation D, Rule 506(b)

This portal is designed to support compliance with SEC Regulation D, Rule 506(b):

- **Accredited Investors Only:** Portal verifies accredited investor status
- **No General Solicitation:** Portal requires authentication before viewing offering details
- **Form D Filing:** Includes Form D template for SEC filing
- **Investor Limits:** Tracks number of investors for compliance
- **Documentation:** Maintains records of investor accreditation and agreements

### Accredited Investor Definition (SEC Rule 501)

An accredited investor is defined as:
- Individual with net worth exceeding $1 million (excluding primary residence), OR
- Individual with income exceeding $200,000 ($300,000 joint) in prior 2 years, OR
- Certain entities with assets exceeding $5 million

### Required Filings

1. **Form D:** File within 15 days of first sale (template included)
2. **State Blue Sky Filings:** May be required in states where investors are located
3. **Annual Amendment:** File Form D amendments annually

## Document Templates

### Form D Template

Location: `templates/Form_D_Template.md`

Pre-configured template for SEC Form D filing under Rule 506(b). Update with fund-specific information before filing.

### Limited Partnership Agreement

Location: `templates/Limited_Partnership_Agreement.md`

Comprehensive LPA template including:
- Capital contribution terms
- Distribution waterfall
- Management provisions
- Accredited investor representations
- Transfer restrictions

**Legal Disclaimer:** Templates are for informational purposes only. Consult with legal counsel before use.

## Security Features

- **Authentication:** Auth0 with MFA support
- **Authorization:** Role-based access control
- **Data Encryption:** All data encrypted in transit (HTTPS) and at rest (Firebase)
- **Audit Trail:** All document access and signatures logged
- **Secure Storage:** Documents stored in Firebase with access controls
- **Session Management:** Secure token-based session handling

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

### Running Tests

```bash
npm test
```

### Code Style

Follow standard JavaScript conventions and existing code patterns.

## Support

For technical support or questions:
- Open an issue on GitHub
- Contact the development team

## License

MIT License - see [LICENSE](LICENSE) file for details

## Disclaimer

This software is provided for informational purposes only and does not constitute legal, financial, or investment advice. Consult with qualified legal and financial professionals before using this portal for actual fund operations.

**Investment Warning:** Investing in private funds involves substantial risk of loss. Past performance is not indicative of future results.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgments

- Auth0 for authentication services
- Firebase for cloud infrastructure
- DocuSign for e-signature capabilities
- Plaid for financial verification

---

**© 2025 REDDNoC - Cryptobeam Fund LP**

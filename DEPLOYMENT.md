# Deployment Guide

## Quick Start

### Local Development

```bash
npm install
npm start
```

The portal will be available at http://localhost:8080

### Production Deployment

#### Option 1: Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: (leave empty for static site)
   - Publish directory: `/`
3. Add environment variables in Netlify dashboard
4. Deploy

#### Option 2: Vercel

1. Import project from GitHub
2. Configure as static site
3. Add environment variables
4. Deploy

#### Option 3: AWS S3 + CloudFront

1. Create S3 bucket with static website hosting enabled
2. Upload all files to bucket
3. Create CloudFront distribution
4. Configure SSL certificate
5. Update DNS records

#### Option 4: GitHub Pages

1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select branch and root folder
4. Save and wait for deployment

### Configuration for Production

Before deploying to production, update the following configuration files:

1. **config/auth0-config.js**
   - Update with production Auth0 tenant
   - Update redirect URIs to production domain

2. **config/firebase-config.js**
   - Update with production Firebase project

3. **config/integrations-config.js**
   - Update DocuSign to production environment
   - Update Plaid to production environment

### DNS and SSL

- Configure custom domain
- Enable SSL/TLS (Let's Encrypt or cloud provider)
- Set up HTTPS redirect

### Security Checklist

- [ ] All API keys are production credentials
- [ ] Auth0 callback URLs are production URLs
- [ ] HTTPS is enforced
- [ ] Content Security Policy headers configured
- [ ] CORS settings are restrictive
- [ ] Rate limiting enabled on APIs
- [ ] MFA enabled for admin accounts
- [ ] Regular security audits scheduled

### Monitoring

Consider adding:
- Google Analytics or similar for usage tracking
- Error monitoring (Sentry, LogRocket)
- Uptime monitoring (Pingdom, UptimeRobot)
- Security monitoring (Cloudflare, AWS WAF)

### Backup and Recovery

- Regular backups of Firebase data
- Version control for all code
- Disaster recovery plan documented

### Compliance

- Review with legal counsel before launch
- File Form D with SEC within 15 days of first sale
- Maintain investor records per SEC requirements
- Annual Form D amendments

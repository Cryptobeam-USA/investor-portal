// Dashboard page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Require authentication
    if (!authService.requireAuth()) {
        return;
    }

    // Handle authentication callback
    if (window.location.hash) {
        authService.handleAuthentication()
            .then(() => {
                initDashboard();
            })
            .catch(err => {
                console.error('Authentication failed:', err);
                alert('Authentication failed. Please try again.');
                window.location.href = '/index.html';
            });
    } else {
        initDashboard();
    }

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            authService.logout();
        });
    }
});

function initDashboard() {
    // Load user profile
    const profile = authService.getProfile();
    if (profile) {
        const investorName = document.getElementById('investorName');
        if (investorName) {
            investorName.textContent = profile.name || profile.email || 'Investor';
        }
    }

    // Initialize Firebase
    const firebase = initFirebase();
    
    // Load investor status
    loadInvestorStatus();

    // Set up action buttons
    setupActionButtons();
}

function loadInvestorStatus() {
    // In a real implementation, this would fetch from Firebase
    // For now, show mock data
    const accreditationStatus = document.getElementById('accreditationStatus');
    const ndaStatus = document.getElementById('ndaStatus');
    const lpaStatus = document.getElementById('lpaStatus');

    // Check localStorage for demo purposes
    const investorData = JSON.parse(localStorage.getItem('investor_status') || '{}');

    if (accreditationStatus) {
        accreditationStatus.textContent = investorData.accredited ? '✓ Verified' : 'Pending';
        accreditationStatus.className = investorData.accredited ? 'status-value status-complete' : 'status-value status-pending';
    }

    if (ndaStatus) {
        ndaStatus.textContent = investorData.ndaSigned ? '✓ Signed' : 'Pending';
        ndaStatus.className = investorData.ndaSigned ? 'status-value status-complete' : 'status-value status-pending';
    }

    if (lpaStatus) {
        lpaStatus.textContent = investorData.lpaSigned ? '✓ Signed' : 'Pending';
        lpaStatus.className = investorData.lpaSigned ? 'status-value status-complete' : 'status-value status-pending';
    }

    // Show recent documents if onboarding complete
    if (investorData.accredited && investorData.ndaSigned && investorData.lpaSigned) {
        displayRecentDocuments();
    }
}

function setupActionButtons() {
    const verifyBtn = document.getElementById('verifyAccreditationBtn');
    const ndaBtn = document.getElementById('signNDABtn');
    const lpaBtn = document.getElementById('signLPABtn');
    const viewDocsBtn = document.getElementById('viewDocumentsBtn');

    if (verifyBtn) {
        verifyBtn.addEventListener('click', function() {
            initiateAccreditationVerification();
        });
    }

    if (ndaBtn) {
        ndaBtn.addEventListener('click', function() {
            initiateDocuSignNDA();
        });
    }

    if (lpaBtn) {
        lpaBtn.addEventListener('click', function() {
            initiateDocuSignLPA();
        });
    }

    if (viewDocsBtn) {
        viewDocsBtn.addEventListener('click', function() {
            window.location.href = '/documents.html';
        });
    }
}

function initiateAccreditationVerification() {
    // In production, this would integrate with Plaid
    alert('Plaid accreditation verification flow would start here.\n\nFor demo: You would connect your financial accounts to verify accredited investor status (net worth > $1M or income > $200K/year).');
    
    // Simulate verification
    if (confirm('Simulate successful accreditation verification?')) {
        const investorData = JSON.parse(localStorage.getItem('investor_status') || '{}');
        investorData.accredited = true;
        localStorage.setItem('investor_status', JSON.stringify(investorData));
        loadInvestorStatus();
    }
}

function initiateDocuSignNDA() {
    // In production, this would integrate with DocuSign API
    alert('DocuSign NDA signing flow would start here.\n\nThis would open a DocuSign envelope with the NDA for electronic signature.');
    
    // Simulate signing
    if (confirm('Simulate NDA signing?')) {
        const investorData = JSON.parse(localStorage.getItem('investor_status') || '{}');
        investorData.ndaSigned = true;
        localStorage.setItem('investor_status', JSON.stringify(investorData));
        loadInvestorStatus();
    }
}

function initiateDocuSignLPA() {
    // In production, this would integrate with DocuSign API
    alert('DocuSign Limited Partnership Agreement signing flow would start here.\n\nThis would open a DocuSign envelope with the LPA for electronic signature.');
    
    // Simulate signing
    if (confirm('Simulate LPA signing?')) {
        const investorData = JSON.parse(localStorage.getItem('investor_status') || '{}');
        investorData.lpaSigned = true;
        localStorage.setItem('investor_status', JSON.stringify(investorData));
        loadInvestorStatus();
    }
}

function displayRecentDocuments() {
    const recentDocs = document.getElementById('recentDocuments');
    if (recentDocs) {
        recentDocs.innerHTML = `
            <div class="document-list">
                <div class="document-item-mini">
                    <span>📄</span>
                    <span>Form D - Initial Filing</span>
                    <a href="documents.html">View</a>
                </div>
                <div class="document-item-mini">
                    <span>📋</span>
                    <span>Limited Partnership Agreement</span>
                    <a href="documents.html">View</a>
                </div>
                <div class="document-item-mini">
                    <span>📊</span>
                    <span>Private Placement Memorandum</span>
                    <a href="documents.html">View</a>
                </div>
            </div>
        `;
    }
}

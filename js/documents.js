// Documents page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Require authentication
    if (!authService.requireAuth()) {
        return;
    }

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            authService.logout();
        });
    }

    // Initialize Firebase
    initFirebase();

    // Load document status
    loadDocumentStatus();
});

function loadDocumentStatus() {
    // Load investor status to check what they can access
    const investorData = JSON.parse(localStorage.getItem('investor_status') || '{}');

    // Update NDA status
    const ndaDocStatus = document.getElementById('ndaDocStatus');
    if (ndaDocStatus) {
        ndaDocStatus.textContent = investorData.ndaSigned ? 'Signed ✓' : 'Not Signed';
        ndaDocStatus.className = investorData.ndaSigned ? 'status-complete' : 'status-pending';
    }

    // Update accreditation status
    const accreditationDocStatus = document.getElementById('accreditationDocStatus');
    if (accreditationDocStatus) {
        accreditationDocStatus.textContent = investorData.accredited ? 'Verified ✓' : 'Pending';
        accreditationDocStatus.className = investorData.accredited ? 'status-complete' : 'status-pending';
    }
}

function viewDocument(documentId) {
    // Check if user has completed onboarding
    const investorData = JSON.parse(localStorage.getItem('investor_status') || '{}');
    
    if (!investorData.accredited || !investorData.ndaSigned) {
        alert('Please complete investor onboarding (accreditation verification and NDA signing) to access fund documents.');
        return;
    }

    // In production, this would fetch the actual document from Firebase Storage
    alert(`Viewing document: ${documentId}\n\nIn production, this would open the secure document viewer or download the PDF.`);
    
    // Could implement document viewer here
    console.log('Viewing document:', documentId);
}

function signDocument(documentType) {
    // Route to appropriate signing flow
    if (documentType === 'nda') {
        alert('Redirecting to NDA signing via DocuSign...\n\nThis would open the DocuSign signing interface.');
        
        // Simulate signing
        if (confirm('Simulate NDA signing?')) {
            const investorData = JSON.parse(localStorage.getItem('investor_status') || '{}');
            investorData.ndaSigned = true;
            localStorage.setItem('investor_status', JSON.stringify(investorData));
            loadDocumentStatus();
        }
    } else {
        alert(`Signing flow for ${documentType} would be initiated here.`);
    }
}

// Make functions globally available
window.viewDocument = viewDocument;
window.signDocument = signDocument;

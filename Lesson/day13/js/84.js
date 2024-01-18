const bsOffcanvas = new bootstrap.Offcanvas('#privacyOffCanvas');
const isPrivacyPolicyAccepted = localStorage.getItem('privacy-policy');

if (!isPrivacyPolicyAccepted) {
    bsOffcanvas.show();
}

document.getElementById('btnAccept').addEventListener('click', () => {
    localStorage.setItem('privacy-policy', true);
    bsOffcanvas.hide();
});

const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer p');
if (footer) {
    footer.textContent = `${footer.textContent.replace(/©\s*\d{4}\s*\|/, '©')} © ${currentYear} | بورتفوليو بساط كريم الدين`;
}

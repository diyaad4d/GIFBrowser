
function copyToClipboard(link){
    navigator.clipboard.writeText(link)
    .then(()=>alert("Copied to clipboard"))
    .catch(err => console.error('Failed to copy link:', err));
}

function setQuickSearch(item){
    document.getElementById('searchInput').value = item;
}

function goHome(){
    window.location.href="/";
}
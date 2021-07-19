const clearContent = () => {
    const content = document.querySelector('#content');
    while (content.hasChildNodes) {
        content.removeChild(content.firstChild);
    }
}
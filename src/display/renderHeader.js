const renderHeader = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    header.innerHTML = '<span class="tabs"><span id="menu">Menu </span><span id="home">BARATIE</span><span id="about"> About</span></span>'
    content.appendChild(header);
    console.log("header rendered");
}

export default renderHeader;
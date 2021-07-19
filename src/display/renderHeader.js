const renderHeader = () => {
    const body = document.querySelector('body');
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = '<span class="tabs">Menu <span id="header-title">0ne Piece Izakaya</span> About</span>'
    body.appendChild(header);
    console.log("header rendered");
}

export default renderHeader;
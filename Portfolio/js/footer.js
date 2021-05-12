class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
        <a href="mailto:alexhaefner@live.com"><img src="img/email.svg" title="Email me" width="16px"></img></i></a> /
        <a href="https://www.linkedin.com/in/alexhaefner/" title="My Linkedin" target='blank'><img src="img/linkedin.svg" width="16px"></img></a> /
        <a href="https://www.youtube.com/user/bellevueuniversity" title="Bellevue University's Youtube"  target='blank'><img src="img/youtube.svg" width="16px"></img></a> 
        <br>
        <a href="https://github.com/AlexH893" title="My GitHub"  target='blank'><img src="img/github.svg" width="16px"></img></a> /
        <a href="https://github.com/buwebdev" title="Courses Repository"  target='blank'><img src="img/github.svg" width="16px"></img></a>


     </div>
        `;
    }
}

customElements.define("footer-component", Footer);
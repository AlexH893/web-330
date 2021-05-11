class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <a href="https://www.linkedin.com/in/alexhaefner/" target='blank'><img src="img/linkedin.svg" width="16px"></img></a>
     </div>
        `;
    }
}

customElements.define("footer-component", Footer);
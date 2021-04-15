class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <img src="linkedin.svg" width="16px"></img>
     </div>
        `;
    }
}

customElements.define("footer-component", Footer);
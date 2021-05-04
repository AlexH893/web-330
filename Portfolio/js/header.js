class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <div class="col w-25">
        <div class="navbar navbar-inverse navbar-fixed-left mt-4">
           <a href="index.html">
           <img class="navImg" src="img/signature.png"></img>
           </a>
           <ul class="nav navbar-nav">
               <li><a href="about.html">About</a></li>
               <li><a href="resume.html">Resume</a></li>
               <li><a href="projects.html">Projects</a></li>
               <li><a href="databasediagram.html">Database Diagrams</a></li>
               <li><a href="apiunittests.html">API Unit Tests</a></li>
               <li><a href="#">Bucket List</a></li>
           </ul>
        </div>
     </div>`;

    }
}

customElements.define("header-component", Header);
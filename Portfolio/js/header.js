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
               <li><a href="about.html" style="color: #634240">About</a></li>
               <li><a href="resume.html" style="color: #634240">Resume</a></li>
               <li><a href="projects.html" style="color: #634240">Projects</a></li>
               <li><a href="databasediagram.html" style="color: #634240">Database Diagrams</a></li>
               <li><a href="apiunittests.html" style="color: #634240">API Unit Tests</a></li>
               <li><a href="bucketlist.html#" style="color: #634240">Bucket List</a></li>
           </ul>
        </div>
     </div>`;

    }
}

customElements.define("header-component", Header);
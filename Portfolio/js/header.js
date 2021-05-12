class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <div class="col w-25">
        <div class="navbar navbar-fixed-left mt-4">
           <a href="index.html">
           <img class="navImg" src="img/sig.png"></img>
           </a>
           <ul class="navList">
               <li><a class="link link-ltr" href="about.html" >About</a></li>
               <li><a class="link link-ltr" href="resume.html">Resume</a></li>
               <li><a class="link link-ltr" href="projects.html">Projects</a></li>
               <li><a class="link link-ltr" href="databasediagram.html">Database Diagrams</a></li>
               <li><a class="link link-ltr" href="apiunittests.html">API Unit Tests</a></li>
               <li><a class="link link-ltr" href="bucketlist.html#">Bucket List</a></li>
           </ul>
        </div>
     </div>`;

    }
}

customElements.define("header-component", Header);
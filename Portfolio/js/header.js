class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
            <html>
            <head>
            <meta charset="UTF-8">
            <title>title</title>
            <link rel="stylesheet" href="css/styles.css">
            <script src="js/footer.js"></script>
            <script src="https://use.fontawesome.com/d4276bd064.js"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="js/FadeTransition.js"></script>
            </head>`;

    }
}

customElements.define("header-component", Header);
export class HttpClient {

    async get(url, params) {

        params = "";

        //Instantiate new URL object, supply it the url parameter, assign the results to the url parameter
        url = new URL(url);

        url.search = new URLSearchParams(params);

        const res = await fetch(url.toString(), {

            method: "GET"

                .then(response => response.json(res))


        })

    }




}
export class HttpClient {

    async get(url, params = "") {


        //Instantiate new URL object, supply it the url parameter, assign the results to the url parameter
        let urlOb = new URL(url);

        let paramOb = new URLSearchParams(params);
        urlOb.search = paramOb;

        const res = await fetch(urlOb.toString(), {

            method: "GET",
        })

            return res.json();

        

    }




}
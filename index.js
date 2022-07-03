const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    const localHostURL = `http://localhost:8080${url}`;

    const myURL = new URL(localHostURL);


    const object = myURL.searchParams.get('object');

    const metric = myURL.searchParams.get('metric');

    const radius = myURL.searchParams.get('radius');


    if (url === `/metrices?object=${object}&metric=${metric}&radius=${radius}`) {


        res.writeHead(200, { 'content-type': 'text/html' });

        // sample url => http://localhost:8080/metrices?object=circle&metric=area&radius=5
        if (object === 'circle' && metric === 'area') {

            const area = 3.14 * (radius * radius);

            res.write(`area of circle is ${area}`);

            res.end();

        // sample url => http://localhost:8080/metrices?object=sphere&metric=volume&radius=5
        } else if (object === 'sphere' && metric === 'volume') {

            const area = (4 * (3.14 * (radius * radius * radius))) / 3;

            res.write(`volume of sphere is ${area}`);

            res.end();

        } else {

            res.write('please enter the queries correctly');

            res.end();
        }

    }

});


const PORT = 8080;

server.listen(PORT, () => {
    console.log(`server lstening at PORT ${PORT}`);
});
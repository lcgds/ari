addEventListener('message', function(event) {
    for (let index = 0; index < event.data; index++) {
        console.log('Hello World!');
    }

    postMessage(`${event.data} linhas enviadas ao console.`);
});
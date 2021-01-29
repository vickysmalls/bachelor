export const fetchWrapper = {
    get,
    post,
};

function get(url) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(url, requestOptions);
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

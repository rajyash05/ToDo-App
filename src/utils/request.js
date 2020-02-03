const getRequest = async (url) => {
    try {
        let response = await fetch(url);
        response = await response.json();
        return response;
    } catch (err) {
        // Handle Error
        console.error(err);
    }
}

const postRequest = async (url, body) => {
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        response = await response.json();
        return response;
    } catch (err) {
        // Handle Error
        console.error(err);
    }
}

const patchRequest = async (url, body) => {
    try {
        let response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        response = await response.json();
        return response;
    } catch (err) {
        // Handle Error
        console.error(err);
    }
}

const deleteRequest = async (url) => {
    try {
        await fetch(url, { method: 'DELETE' });
        return;
    } catch (err) {
        // Handle Error
        console.error(err);
    }
}

export default {
    get: getRequest,
    post: postRequest,
    patch: patchRequest,
    delete: deleteRequest
}
class Queries {

    static runQuery = (query) => {
        const packageJson = {
            query: query
        };
        return fetch("http://localhost:8084/security/api/queries/execute", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(packageJson)
        })
            .then(response => response.json())
    }

    static runNotSafeQuery = (query) => {
        const packageJson = {
            query: query
        };
        return fetch("http://localhost:8084/security/api/queries/notSafeExecute/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': window.localStorage.getItem('auth')
            },
            body: JSON.stringify(packageJson)
        })
            .then(response => response.json())
    }

    static runSafeQuery = (query) => {
        return fetch("http://localhost:8084/security/api/queries/safeExecute/" + query, {
            method: "GET"
        })
            .then(response => response.json())
    }
}

export default Queries;
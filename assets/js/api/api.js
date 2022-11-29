class ApiConfig {
    constructor(production) {
        if(production) {
            this.server = "https://api.onetapfivem.com/v4";
        } else {
            this.server = "http://localhost/onetap-rest-api";
        }
    }
}
class ApiResponse {
    constructor(code, status, message, data = []) {
        this.code = code;
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
class Api {
    constructor(config) {
        this.config = config;
    }

    headers = {};
    setHeaders(headers) {
        this.headers = headers;
    }
    setAuthentication(scheme, token) {
        this.headers["Authentication"] = `${scheme} ${token}`;
    }
    setAcceptLanguage(lang) {
        this.headers["Accept-Language"] = lang;
    }
    async request(method, endpoint, dataBody = null, contentType = "application/x-www-form-urlencoded; charset=UTF-8") {
        try {
            const response = await $.ajax({
                url: `${this.config.server}${endpoint}`,
                type: method,
                data: dataBody,
                headers: this.headers,
                contentType: contentType,
            });
            return new ApiResponse(response["code"], response.status, response["message"], response["data"]);
        } catch (exception) {
            if(exception["responseJSON"] !== undefined) {
                const response = exception["responseJSON"];
                return new ApiResponse(response["code"], response["status"], response["message"], response["data"]);
            }
            return new ApiResponse(0, 500, "API unavailable.");
        }
    }
    async fetchBinaryRequest(endpoint, dataBody = null, contentType = "application/x-www-form-urlencoded; charset=UTF-8") {
        return await new Promise(function (resolve) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `https://api.onetapfivem.com/v4${endpoint}?${dataBody}`, true);
            xhr.responseType = "blob";
            xhr.setRequestHeader("Content-Type", contentType);
            xhr.onload = async function () {
                if (this.status >= 200 && this.status < 300) {
                    const response = new ApiResponse(1, 200, "OK.", await new Promise((resolve, _) => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.readAsDataURL(xhr.response);
                    }));
                    resolve(response);
                } else {
                    const response = JSON.parse(await this.response.text());
                    resolve(new ApiResponse(response["code"], this.status, response["message"], response["data"]));
                }
                xhr.onerror = function () {
                    resolve(new ApiResponse(0, 500, "FAILED."));
                };
            };
            xhr.send();
        });
    }
}
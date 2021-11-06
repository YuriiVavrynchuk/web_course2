const BASE_URL = "http://localhost:5501";
const RESOURCE_URL = `${BASE_URL}/printers`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


export const getAllPrinters = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};

export const postPrinter = (body) => baseRequest({ method: "POST", body });

export const updatePrinter = (id, body) => 
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deletePrinter = (id) => 
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });
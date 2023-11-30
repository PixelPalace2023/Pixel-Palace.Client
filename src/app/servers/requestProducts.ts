// URL base de la API
const BASE_URL = 'http://localhost:8082/api/v1';
// Función para manejar las respuestas de la API
const handleResponse = async (response: Response): Promise<any> => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error en la solicitud');
    }
    return response.json();
};
export const fetchData = async (url: string, method: string = 'GET', data?: any) => {
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
    };

    try {
        const response = await fetch(url, options);
        
        const responseData = await handleResponse(response);
        
        return { data: responseData, response };
    } catch (error) {
        console.error(`Error ${method} request to ${url}:`, error);
        throw error;
    }
};

// Función para obtener todos los productos
export const getAllProducts = async () => {
    try {
        const url = `${BASE_URL}/product/games`;
        return fetchData(url, 'GET');
    } catch (error) {
        console.error('Error fetching all products:', error);
        throw error;
    }
};


class ApiResponse<T> {
    success: boolean;
    statusCode: number
    message: string;
    data: T | null

    constructor(message: string, statusCode: number, data: T | null = null) {
        this.success = true;
        this.message = message;
        this.statusCode = statusCode;
        this.data = data
    }
}

export default ApiResponse
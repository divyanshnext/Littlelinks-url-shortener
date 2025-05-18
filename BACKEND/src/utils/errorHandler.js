// This file contains the error handling middleware and custom error classes for the application.
// It provides a centralized way to handle errors and send appropriate responses to the client.
export const errorHandler = (err, req, res, next) => {
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    }
    console.error(err);
    res.status(500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
};

export class AppError extends Error {
    statusCode;
    isOperational;
    constructor(message, statusCode=500, isOperational=true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true; // To differentiate between operational and programming errors
        Error.captureStackTrace(this, this.constructor);
    }
}

export class NotFoundError extends AppError {
    constructor(message) {
        super(message, 404);
    }
}

export class ConflictError extends AppError {
    constructor(message) {
        super(message, 409);
    }
}

export class BadRequestError extends AppError {
    constructor(message) {
        super(message, 400);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message) {
        super(message, 401);
    }
}
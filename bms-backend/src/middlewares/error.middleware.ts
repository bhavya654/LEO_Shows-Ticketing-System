import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const globalErrorHandler =(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction      
)=>{
    //Default Response 
    let statusCode = 500;
    let message = "Internal Server Error";
    let errors: {
        field?: string;
        message: string;
    }[] = [];

    //Handle Zod Validation Errors
    if(err instanceof ZodError){
        statusCode = 400;
        message = "Validation Error";
        errors = err.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
        }));
    }else if (err instanceof Error) {
        //Handle Generic Errors
        message = err.message;
    }

    //Send the error response
    res.status(statusCode).json({
        success: false,
        message,
        errors
    });
    
};
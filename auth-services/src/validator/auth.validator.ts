import { body } from 'express-validator';



export const registerValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name is must be String")
        .isLength({ min: 2 })
        .withMessage("Name must be contain at least 2 character"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("please enter valid email"),

    body("passowrd")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password must be string")
        .isLength({ min: 8 })
        .withMessage("Password must contain at least 8 characters")


]

export const loginValidator = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter a valid email"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Password contain at least 8 character")

]
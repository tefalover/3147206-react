// backend/src/features/auth.service.js
// Logica de autenticacion + JWT

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authRepository } from "./auth.repository.js";

export const authService = {
    async login({ userEmail, userPassword }) {
          console.log("EMAIL RECIBIDO:", userEmail);
        const user = await authRepository.findByEmail(userEmail);

        console.log("USER ENCONTRADO: ", user);

        if (!user) {
            throw new Error("Credenciales invalidas");
        }

        const isMatch = await bcrypt.compare(userPassword, user.password);
        // const isMatch = password === user.password;

        if (!isMatch) {
            throw new Error("Credenciales invalidas");
        }

        if (!user.is_active) {
            throw new Error("Usuario inactivo");
        }

        const token = jwt.sign(
            { id: user.id, email: user.user_email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES },
        );

        return {
            token,
            user: {
                id: user.id,
                email: user.user_email
            },
        };
    },
};
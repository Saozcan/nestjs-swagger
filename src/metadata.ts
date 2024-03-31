/* eslint-disable */
export default async () => {
    const t = {
        ["./app.dto"]: await import("./app.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./app.dto"), { "CreateUserDto": { email: { required: true, type: () => String }, password: { required: true, type: () => String }, roles: { required: true, enum: t["./app.dto"].RoleEnum, isArray: true }, isEnabled: { required: false, type: () => Boolean, default: true } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String }, "createUser": { type: String } } }]] } };
};
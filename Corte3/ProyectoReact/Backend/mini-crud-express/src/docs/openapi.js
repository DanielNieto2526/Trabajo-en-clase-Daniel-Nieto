module.exports = {
    openapi: "3.0.3",
    info: {
        title: "Tareas API",
        version: "1.0.0",
        description: "API para consultar, crear, actualizar y eliminar tareas.",
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Servidor local de desarrollo",
        },
    ],
    tags: [
        { name: "Tareas", description: "Operaciones CRUD de tareas" },
    ],
    components: {
        schemas: {
            Tarea: {
                type: "object",
                required: ["id", "titulo", "completada"],
                properties: {
                    id: {
                        type: "integer",
                        description: "Identificador único de la tarea",
                        example: 1,
                    },
                    titulo: {
                        type: "string",
                        minLength: 3,
                        example: "Aprender OpenAPI",
                    },
                    completada: {
                        type: "boolean",
                        example: false,
                    },
                },
            },
            NuevaTarea: {
                type: "object",
                required: ["titulo"],
                properties: {
                    titulo: {
                        type: "string",
                        minLength: 3,
                        example: "Aprender OpenAPI",
                    },
                },
            },
            CambioTarea: {
                type: "object",
                minProperties: 1,
                properties: {
                    titulo: {
                        type: "string",
                        minLength: 3,
                        example: "Terminar documentación",
                    },
                    completada: {
                        type: "boolean",
                        example: true,
                    },
                },
            },
            Error: {
                type: "object",
                required: ["error"],
                properties: {
                    error: {
                        type: "string",
                        example: "No existe la tarea con id 1",
                    },
                },
            },
        },
        parameters: {
            IdTarea: {
                name: "id",
                in: "path",
                required: true,
                description: "Identificador único de la tarea",
                schema: { type: "integer", example: 1 },
            },
        },
    },
    paths: {
        "/tareas": {
            get: {
                tags: ["Tareas"],
                summary: "Obtener todas las tareas",
                responses: {
                    "200": {
                        description: "Lista de tareas",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Tarea" },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ["Tareas"],
                summary: "Crear una tarea",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/NuevaTarea" },
                        },
                    },
                },
                responses: {
                    "201": {
                        description: "Tarea creada",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Tarea" },
                            },
                        },
                    },
                    "400": {
                        description: "Solicitud inválida",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Error" },
                            },
                        },
                    },
                },
            },
        },
        "/tareas/{id}": {
            parameters: [{ $ref: "#/components/parameters/IdTarea" }],
            get: {
                tags: ["Tareas"],
                summary: "Obtener una tarea por su identificador",
                responses: {
                    "200": {
                        description: "Tarea encontrada",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Tarea" },
                            },
                        },
                    },
                    "404": {
                        description: "La tarea no existe",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Error" },
                            },
                        },
                    },
                },
            },
            patch: {
                tags: ["Tareas"],
                summary: "Actualizar el título o estado de una tarea",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/CambioTarea" },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Tarea actualizada",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Tarea" },
                            },
                        },
                    },
                    "400": {
                        description: "Solicitud inválida",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Error" },
                            },
                        },
                    },
                    "404": {
                        description: "La tarea no existe",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Error" },
                            },
                        },
                    },
                },
            },
            delete: {
                tags: ["Tareas"],
                summary: "Eliminar una tarea",
                responses: {
                    "204": {
                        description: "Tarea eliminada",
                    },
                    "404": {
                        description: "La tarea no existe",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Error" },
                            },
                        },
                    },
                },
            },
        },
    },
};

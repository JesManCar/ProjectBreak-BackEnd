module.exports = { 
    "tags": [
    {
      "name": "Middlewares",
      "description": "Funciones intermedias utilizadas para control de acceso y subida de archivos."
    }
  ],
  "paths": {},
  "components": {
  },
  "security": [],
  "x-middlewares": {
    "authMiddleware": {
      "description": "Middleware que protege las rutas del panel de administraci\u00f3n. Verifica que el usuario est\u00e9 autenticado mediante la sesi\u00f3n (cookie).",
      "appliesTo": [
        "/admin/*"
      ],
      "securityScheme": "cookieAuth"
    },
    "authApiMiddleware": {
      "description": "Middleware que protege las rutas de la API. Requiere una clave de API v\u00e1lida en el header `x-api-key`.",
      "appliesTo": [
        "/api/*"
      ],
      "securityScheme": "ApiKeyAuth"
    },
    "uploadMiddleware": {
      "description": "Middleware personalizado de Multer con almacenamiento en Cloudinary. Configura la subida de archivos al directorio definido din\u00e1micamente.",
      "appliesTo": [
        "/create",
        "/admin/create"
      ],
      "limits": {
        "fileSize": "5MB"
      },
      "storage": "Cloudinary"
    }
  }
}
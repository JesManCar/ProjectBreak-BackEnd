module.exports = { 
  "paths": {
    "/products": {
      "get": {
        "summary": "Obtener todos los productos",
        "tags": [
          "Products"
        ],
        "responses": {
          "200": {
            "description": "Lista de productos",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Product"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/products/{cat}": {
      "get": {
        "summary": "Obtener productos por categor\u00eda",
        "tags": [
          "Products"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "cat",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Productos por categor\u00eda",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Product"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/product/{id}": {
      "get": {
        "summary": "Obtener un producto por ID",
        "tags": [
          "Products"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Producto encontrado",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Product"
                }
              }
            }
          },
          "404": {
            "description": "Producto no encontrado"
          }
        }
      }
    },
    "/": {
      "get": {
        "summary": "Mostrar formulario de autenticaci\u00f3n",
        "tags": [
          "Auth"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "error",
            "schema": {
              "type": "string"
            },
            "description": "Mensaje de error en el login"
          }
        ],
        "responses": {
          "200": {
            "description": "Formulario de autenticaci\u00f3n renderizado"
          }
        }
      }
    },
    "/api/products": {
      "get": {
        "summary": "Obtener todos los productos",
        "tags": [
          "API"
        ],
        "responses": {
          "200": {
            "description": "Lista de productos",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Product"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/products/{cat}": {
      "get": {
        "summary": "Obtener productos por categor\u00eda",
        "tags": [
          "API"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "cat",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Productos filtrados por categor\u00eda",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Product"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/product/{id}": {
      "get": {
        "summary": "Obtener un producto por ID",
        "tags": [
          "API"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Producto encontrado",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Product"
                }
              }
            }
          },
          "404": {
            "description": "Producto no encontrado"
          }
        }
      }
    },
    "/api/create": {
      "post": {
        "summary": "Crear un nuevo producto",
        "tags": [
          "API"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "image": {
                    "type": "string",
                    "format": "binary"
                  },
                  "category": {
                    "type": "string"
                  },
                  "size": {
                    "type": "string"
                  },
                  "price": {
                    "type": "number"
                  }
                },
                "required": [
                  "name",
                  "description",
                  "image",
                  "category",
                  "size",
                  "price"
                ]
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Producto creado"
          },
          "500": {
            "description": "Error al crear el producto"
          }
        }
      }
    },
    "/api/edit/{id}": {
      "get": {
        "summary": "Actualizar producto por ID",
        "tags": [
          "API"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Producto actualizado (respuesta simulada en GET)",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Product"
                }
              }
            }
          },
          "404": {
            "description": "Producto no encontrado"
          }
        }
      }
    },
    "/auth": {
      "post": {
        "summary": "Autenticaci\u00f3n del usuario",
        "tags": [
          "Auth"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "username": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  }
                },
                "required": [
                  "username",
                  "password"
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Autenticaci\u00f3n exitosa"
          },
          "400": {
            "description": "Credenciales faltantes"
          },
          "401": {
            "description": "Credenciales incorrectas"
          }
        }
      }
    },
    "/out": {
      "get": {
        "summary": "Cerrar sesi\u00f3n",
        "tags": [
          "Auth"
        ],
        "responses": {
          "200": {
            "description": "Sesi\u00f3n cerrada"
          }
        }
      }
    },
    "/admin/products": {
      "get": {
        "summary": "Obtener todos los productos (admin)",
        "tags": [
          "Admin"
        ],
        "responses": {
          "200": {
            "description": "Lista de productos",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Product"
                  }
                }
              }
            }
          }
        },
        "security": [
          {
            "cookieAuth": []
          }
        ]
      }
    },
    "/admin/products/{cat}": {
      "get": {
        "summary": "Obtener productos por categor\u00eda (admin)",
        "tags": [
          "Admin"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "cat",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Productos por categor\u00eda"
          }
        },
        "security": [
          {
            "cookieAuth": []
          }
        ]
      }
    },
    "/admin/product/{id}": {
      "get": {
        "summary": "Obtener un producto por ID (admin)",
        "tags": [
          "Admin"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Producto encontrado"
          }
        },
        "security": [
          {
            "cookieAuth": []
          }
        ]
      }
    },
    "/admin/product/edit/{id}": {
      "get": {
        "summary": "Mostrar formulario de edici\u00f3n de producto",
        "tags": [
          "Admin"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Formulario de edici\u00f3n"
          }
        },
        "security": [
          {
            "cookieAuth": []
          }
        ]
      }
    },
    "/admin/edit/{id}": {
      "put": {
        "summary": "Actualizar producto por ID",
        "tags": [
          "Admin"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Product"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Producto actualizado"
          },
          "404": {
            "description": "Producto no encontrado"
          }
        },
        "security": [
          {
            "cookieAuth": []
          }
        ]
      }
    },
    "/admin/new": {
      "get": {
        "summary": "Mostrar formulario para nuevo producto",
        "tags": [
          "Admin"
        ],
        "responses": {
          "200": {
            "description": "Formulario de nuevo producto"
          }
        },
        "security": [
          {
            "cookieAuth": []
          }
        ]
      }
    },
    "/admin/create": {
      "post": {
        "summary": "Crear nuevo producto (admin)",
        "tags": [
          "Admin"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "image": {
                    "type": "string",
                    "format": "binary"
                  },
                  "category": {
                    "type": "string"
                  },
                  "size": {
                    "type": "string"
                  },
                  "price": {
                    "type": "number"
                  }
                },
                "required": [
                  "name",
                  "description",
                  "image",
                  "category",
                  "size",
                  "price"
                ]
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Producto creado exitosamente"
          }
        },
        "security": [
          {
            "cookieAuth": []
          }
        ]
      }
    },
    "/admin/delete/{id}": {
      "get": {
        "summary": "Mostrar formulario de eliminaci\u00f3n de producto",
        "tags": [
          "Admin"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Formulario de eliminaci\u00f3n"
          }
        },
        "security": [
          {
            "cookieAuth": []
          }
        ]
      },
      "delete": {
        "summary": "Eliminar un producto",
        "tags": [
          "Admin"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Producto eliminado"
          }
        },
        "security": [
          {
            "cookieAuth": []
          }
        ]
      }
    }
  },
  "tags": [
    {
      "name": "Products",
      "description": "Rutas de usuario final para visualizar productos."
    },
    {
      "name": "API",
      "description": "API autenticada para operaciones sobre productos (protegida con middleware)."
    },
    {
      "name": "Admin",
      "description": "Panel de administraci\u00f3n con operaciones CRUD sobre productos (requiere autenticaci\u00f3n)."
    },
    {
      "name": "Auth",
      "description": "Rutas de autenticaci\u00f3n de administrador (login/logout)."
    }
  ],
}
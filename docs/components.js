module.exports = {
    "components": {
    "schemas": {
      "Product": {
        "type": "object",
        "properties": {
          "_id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "image": {
            "type": "string"
          },
          "category": {
            "type": "string",
            "enum": ["Camisetas", "Pantalones", "Zapatos", "Accesorios"]
          },
          "size": {
            "type": "string",
            "enum": ["XS", "S", "M", "L", "XL"]
          },
          "price": {
            "type": "number"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "updatedAt": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "ProductInput": {
        "type": "object",
        "required": ["name", "description", "image", "category", "size", "price"],
        "properties": {
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "image": {
            "type": "string"
          },
          "category": {
            "type": "string",
            "enum": ["Camisetas", "Pantalones", "Zapatos", "Accesorios"]
          },
          "size": {
            "type": "string",
            "enum": ["XS", "S", "M", "L", "XL"]
          },
          "price": {
            "type": "number"
          }
        }
      }
    }
  }
}

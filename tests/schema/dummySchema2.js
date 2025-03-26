const schema_get = {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer"
      },
      "products": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "title": {
                "type": "string"
              },
              "price": {
                "type": "number"
              },
              "quantity": {
                "type": "integer"
              },
              "total": {
                "type": "number"
              },
              "discountPercentage": {
                "type": "number"
              },
              "discountedTotal": {
                "type": "number"
              },
              "thumbnail": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "title",
              "price",
              "quantity",
              "total",
              "discountPercentage",
              "discountedTotal",
              "thumbnail"
            ]
          },
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "title": {
                "type": "string"
              },
              "price": {
                "type": "number"
              },
              "quantity": {
                "type": "integer"
              },
              "total": {
                "type": "number"
              },
              "discountPercentage": {
                "type": "number"
              },
              "discountedTotal": {
                "type": "number"
              },
              "thumbnail": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "title",
              "price",
              "quantity",
              "total",
              "discountPercentage",
              "discountedTotal",
              "thumbnail"
            ]
          },
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "title": {
                "type": "string"
              },
              "price": {
                "type": "number"
              },
              "quantity": {
                "type": "integer"
              },
              "total": {
                "type": "number"
              },
              "discountPercentage": {
                "type": "number"
              },
              "discountedTotal": {
                "type": "number"
              },
              "thumbnail": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "title",
              "price",
              "quantity",
              "total",
              "discountPercentage",
              "discountedTotal",
              "thumbnail"
            ]
          },
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "title": {
                "type": "string"
              },
              "price": {
                "type": "number"
              },
              "quantity": {
                "type": "integer"
              },
              "total": {
                "type": "number"
              },
              "discountPercentage": {
                "type": "number"
              },
              "discountedTotal": {
                "type": "number"
              },
              "thumbnail": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "title",
              "price",
              "quantity",
              "total",
              "discountPercentage",
              "discountedTotal",
              "thumbnail"
            ]
          }
        ]
      },
      "total": {
        "type": "number"
      },
      "discountedTotal": {
        "type": "number"
      },
      "userId": {
        "type": "integer"
      },
      "totalProducts": {
        "type": "integer"
      },
      "totalQuantity": {
        "type": "integer"
      }
    },
    "required": [
      "id",
      "products",
      "total",
      "discountedTotal",
      "userId",
      "totalProducts",
      "totalQuantity"
    ]
  }
  
export default schema_get
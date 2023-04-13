# SHOPPING CART API 

## Installation and Setup

```bash
npm init -y && mkdir -p src/{config,users,auth,models,products,carts} && touch README.md routes.js server.js .gitignore .env .env.example src/config/{mongodb.js,express.js,secrets.js} src/models/{products.models.js,user.models.js,cart.models.js} src/users/{user.controller.js,user.routes.js} src/auth/{auth.controller.js,auth.middleware.js,auth.routes.js} src/carts/{cart.controller.js,cart.routes.js} src/products/{product.controller.js,product.routes.js} && npm i mongoose express dotenv jsonwebtoken cookie-parser cors bcryptjs
```

import express, { Request, Response } from "express";
import cors from "cors";
import { products } from "./data";
import { Product } from "./type";

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

//Exercicio1
app.get("/test", (req, res) => {
  res.send("API online!")
})


// Exercício 4 e 8
app.post("/products", (req: Request, res: Response) => {
  try {
    const name = req.body.name
    const price = req.body.price

    if (!name || !price) {
      throw new Error("Um ou mais campos faltando: 'name', 'price'")
    }

    if (typeof name !== "string") {
      throw new Error("O campo 'name' deve ser uma string")
    }

    if (typeof price !== "number" || price <= 0) {
      throw new Error("O campo 'price' deve ser um number e maior que zero")
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      price
    }

    products.push(newProduct)

    res.send(products)

  } catch (error: any) {
    switch (error.message) {
      case "Um ou mais campos faltando: 'name', 'price'":
        res.status(422)
        break
      case "O campo 'name' deve ser uma string":
        res.status(422)
        break
      case "O campo 'price' deve ser um number maior que zero":
        res.status(422)
        break
      default:
        res.status(500)
    }

    res.send(error.message || "Erro inesperado")
  }
})

// Exercício 5
app.get("/products", (req: Request, res: Response) => {
  try {
    res.send(products)

  } catch (error: any) {
    res.send(error.message || "Erro inesperado")
  }
})


// Exercício 6 e 9
app.put("/products/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const newPrice = req.body.price

    if (!newPrice && newPrice !== 0) {
      throw new Error("Path param faltando: 'price'")
    }

    if (typeof newPrice !== "number" || newPrice <= 0) {
      throw new Error("O path param 'price' deve ser um number e maior que zero")
    }

    let isProductFound = false

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products[i].price = newPrice
        isProductFound = true
      }
    }

    if (!isProductFound) {
      throw new Error("Produto não encontrado")
    }

    res.send(products)

  } catch (error: any) {
    switch (error.message) {
      case "Path param faltando: 'price'":
        res.status(422)
        break
      case "O path param 'price' deve ser um number maior que zero":
        res.status(422)
        break
      case "Produto não encontrado":
        res.status(404)
        break
      default:
        res.status(500)
    }

    res.send(error.message || "Erro inesperado")
  }
})

// Exercício 7 e 10
app.delete("/products/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id

    let isProductFound = false

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1)
        isProductFound = true
      }
    }

    if (!isProductFound) {
      throw new Error("Produto não encontrado")
    }

    res.send(products)

  } catch (error: any) {
    switch (error.message) {
      case "Produto não encontrado":
        res.status(404)
        break
      default:
        res.status(500)
    }
    
    res.send(error.message || "Erro inesperado")
  }
})
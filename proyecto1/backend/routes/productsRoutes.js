import express from "express"
import { getProducts, postProduct, deleteProductbyId,putProductbyId} from "../cotrollers/productsControllers.js"
const  productsRouter = express.Router()
productsRouter.get("/obtenerProductos",getProducts);
productsRouter.post("/registrarProducto",postProduct);
productsRouter.delete("/eliminarProducto/:_id",deleteProductbyId);
productsRouter.put("/actualizarProducto/:_id",putProductbyId);


export default productsRouter;


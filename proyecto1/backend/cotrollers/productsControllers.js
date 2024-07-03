import { productModel } from "../models/productModel.js";


export const getProducts = async (req, res) => {
   

    try {

        
        let products = await productModel.find();

        
        if (products.length === 0) {
          
            return res.status(404).json({ message: 'no se encontraron productos' });
        }

     
        return res.status(200).send(products);

    } catch (error) {
      
        return res.status(500).json({ message: error.message });
    }
}



export const postProduct = async (req, res) => {
  
    const { nombre, imagen, precio } = req.body;

   
    if (!nombre || !imagen || !precio) {
        return res.status(400).json({ message: 'Debe ingresar todos los campos requeridos, nombre, imagen y precio' });
    }

    try {
        const newProduct = await productModel.create(req.body);
        //201 -> se creo correctamente
        return res.status(201).json(newProduct);

    } catch (error) {
        //500 -> error inesperado en el servidor
        return res.status(500).json({ message: error.message });
    }


}


export const deleteProductbyId = async (req, res) => {
    try {
        let idForDelete = req.params._id;
        let productDeleted = await productModel.findByIdAndDelete(idForDelete);

   
        if (!productDeleted) {
            return res.status(404).json({ message: 'Lo siento! no se encontró producto para borrar' });
        }

        return res.status(200).json({ msg: 'Producto eliminado correctamente' });
    } catch (error) {
      
        return res.status(500).json({ message: error.message });
    }
}


export const putProductbyId = async (req, res) => {
    try {
      
        let idForUpdate = req.params._id;
      
       
        let productUpdated = await productModel.findByIdAndUpdate(idForUpdate, req.body);

      
        if (!productUpdated) {
            return res.status(404).json({ message: 'Lo siento! no se encontró producto para modificar' });
        }

        return res.status(200).json({ message: 'Producto actualizado correctamente' });

    } catch (error) {
       
        return res.status(500).json({ message: error.message });
    }
}
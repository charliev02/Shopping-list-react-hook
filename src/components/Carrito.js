import React, {UseState, useState} from 'react'


function Carrito(){

    const[product, setProduct] = useState("");
    const[qty, setQty] = useState(0);
    const[price, setPrice] = useState(0);
    const[list, setList] = useState([])
    const addProduct = (e) => {
        e.preventDefault();
        //alert("Item: " + product + " Qty: "+ qty + " Price: "+price);

        setList([
            ...list,{
                product: product,
                qty: qty,
                price: price
            }
        ])
    }

    return (
        <div className="container my-3">
            <div className="row">
                <form className="col-12" onSubmit={addProduct}>
                    <div className="form-group col-12">
                        <input
                         placeholder="Product Name"
                         type="string" className="form-control" id="product"
                        onChange = { (e) => setProduct(e.target.value) }
                        />
                    </div>
                    <div className="form-group col-12">
                        <input 
                        placeholder="Product Quantity"
                        type="decimal" className="form-control" id="quantity"
                        onChange={(e) => setQty(e.target.value)}/>
                    </div>
                    <div className="form-group col-12">
                        <input 
                        placeholder="Product Price"
                        type="decimal" className="form-control" id="price"
                        onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <input type="submit" className="form-control"/>
                    </div>
                </form>
                <ul>
                    {
                        list.map((item, index) => (
                            <li key={index} className="text-white">
                                {item.product} - {item.qty} -
                                {item.price}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}


export default Carrito;
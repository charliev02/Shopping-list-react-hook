import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";

function Pratica1() {
  const { register, handleSubmit, errors } = useForm();
  const [lista, setLista] = useState([]);
  const onSubmit = (data, e) => {
    console.log("desde onSubmit " + data);
    setLista([...lista, data]);
    //localStorage.setItem("shopping", JSON.stringify(data));
    e.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="row mt-2">
        <label className="col-sm-12 ">
          <input
            type="text"
            name="product"
            placeholder="Add your products"
            defaultValue="Test"
            className="col-12 rounded inputs"
            ref={register({
              required: {
                value: true,
                message: "Hold on! You need to type a product",
              },
            })}
          />
          <span className="text-danger text-small mb-2 d-block">
            {errors?.product?.message}
          </span>
        </label>
        <label className="col-sm-12 ">
          <input
            type="text"
            name="quantity"
            placeholder="How many?"
            defaultValue="2"
            className="col-12 rounded inputs"
            ref={register({
              required: {
                value: true,
                message: "We're missing a value over here",
              },
            })}
          />
          <span className="text-danger text-small mb-2 d-block">
            {errors?.quantity?.message}
          </span>
        </label>
        <label className="col-sm-12 ">
          <input
            type="text"
            name="price"
            placeholder="How much?"
            defaultValue="2"
            className="col-12 rounded inputs"
            ref={register({
              required: { value: true, message: "Is it free?" },
            })}
          />
          <span className="text-danger text-small mb-2 d-block">
            {errors?.price?.message}
          </span>
        </label>
        <div className="col-12">
          <button
            type="submit"
            className="btn border-rounded float-right circle-button">
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>
      </form>
      <div className="card">
        <div className="card-header">Shopping List</div>
        <ul className="list-group list-group-flush">
          {lista.map((item, index) => (
            <li key={index} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="mb-0 ">
                    <h5 className="m-0">{item.product} </h5>
                    <p className="m-0">
                      <small>${item.price * item.quantity}</small>
                    </p>
                  </div>
                </div>
                <div className="">
                  <button className=" btn text-info">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                  <button className=" btn text-danger">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pratica1;

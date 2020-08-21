import React from 'react';
import { useForm } from 'react-hook-form';

function HookForm(){
    const {register, handleSubmit, watch, errors} = useForm();
    console.log(watch("titulo"));
    const onSubmit = (data, e) => {
        console.log("desde onSubmit "+data)
        e.target.reset()
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="row">
                <div className="col">
                    <input type="text" 
                    name="titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true, message: 'Titulo obligatorio'}
                        })
                    }
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.titulo?.message}
                    </span>
                    <button type="submit"
                    className="btn btn-info"
                    >Send</button>
                </div>
            </form>
        </div>
    )
}


export default HookForm;
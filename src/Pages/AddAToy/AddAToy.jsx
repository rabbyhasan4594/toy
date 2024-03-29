import React, { useContext } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hook/Hook';
import Footer from '../Shared/Footer/Footer';

const AddAToy = () => {
    useTitle('AddAToy')
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {


        fetch("https://toy-galaxy-server-lake.vercel.app/addAToy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            });



    }







    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='bg-slate-500 lg:p-14 p-5'>
                <div className='bg-cyan-600 lg:w-1/3 lg:mx-96 py-5 rounded-lg'>
                    <h1 className='text-center text-2xl mb-4 text-white'>Add Toys</h1>
                    <form className='grid grid-cols-1 text-center' onSubmit={handleSubmit(onSubmit)}>

                        <div className=''>
                            <div className='mb-2'>
                                <h1>Picture URL</h1>
                                <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    {...register("image", { required: true })}
                                    placeholder="image link"
                                    type="url"
                                    defaultValue=""
                                />
                            </div>

                            <div className='mb-2'>
                                <h1>Toy Name</h1>
                                <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    {...register("toyName", { required: true })}
                                    placeholder="Toy Name"
                                    defaultValue=""
                                />
                            </div>
                            <div className='mb-2'>
                                <h1>Seller Name</h1>
                                <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    value={user?.displayName}
                                    {...register("sellerName", { required: true })}
                                    placeholder="Seller Name"
                                    type="name"
                                />
                            </div>
                            <div className='mb-2'>
                                <h1>Seller Email</h1>
                                <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    value={user?.email}
                                    {...register("sellerEmail", { required: true })}
                                    placeholder="your email"
                                    type="email"
                                />
                            </div>

                            <div className='mb-2'>
                                <h1>Sub Category </h1>
                                <select className="text-input ps-14 pe-24 py-2 rounded-lg" {...register("category")}>
                                    <option value="sportsCar">Sports Car</option>
                                    <option value="truck">Truck</option>
                                    <option value="policeCar">Police car</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <h1>Price</h1>
                                <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                />
                            </div>
                            <div className='mb-2'>
                                <h1>Rating</h1>
                                <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    {...register("rating", { required: true })}
                                    placeholder="Rating"
                                    type="text"
                                />
                            </div>
                            <div className='mb-2'>
                                <h1>Available quantity</h1>
                                <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    {...register("quantity", { required: true })}
                                    placeholder="quantity"
                                    type="number"
                                />
                            </div>
                            <div className='mb-2'>
                                <h1>Detail description</h1>
                                <input
                                    className="text-input px-10 py-2 rounded-lg"
                                    {...register("description")}
                                    placeholder="description"
                                />
                            </div>

                            <div className='pt-2'>
                                <input className="btn text-white bg-orange-600" value="Post Toy" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddAToy;
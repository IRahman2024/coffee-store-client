import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, photo, supplier, details, taste, category } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const taste = form.taste.value;
        const category = form.category.value;

        const updateCoffee = { name, quantity, photo, supplier, details, taste, category }

        //send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee update was Successful',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })

        console.log(updateCoffee);
    }

    return (
        <div className="m-24">
            <h1 className="text-6xl text-center">Update Coffee details</h1>
            <form onSubmit={handleUpdateCoffee}>
                <div className="md:flex gap-2 my-2 justify-evenly">
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black">Name</span>
                            </div>
                            <div className="join">
                                <input type="text" placeholder="Enter Coffee name" defaultValue={name} className="input input-bordered join-item w-full bg-[#ede3c7ac]"
                                    name='name' />
                            </div>
                        </label>
                    </div>
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black">Quantity</span>
                            </div>
                            <div className="join">
                                <input type="text" placeholder="Enter quantity" defaultValue={quantity} className="input input-bordered join-item w-full bg-[#ede3c7ac]"
                                    name='quantity' />

                            </div>
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-2 my-2 justify-evenly">
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black">Supplier</span>
                            </div>
                            <div className="join">
                                <input type="text" defaultValue={supplier} placeholder="Enter coffee Supplier" className="input input-bordered join-item w-full bg-[#ede3c7ac]"
                                    name='supplier' />

                            </div>
                        </label>
                    </div>
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black">Taste</span>
                            </div>
                            <div className="join">
                                <input type="text" defaultValue={taste} placeholder="enter taste here" className="input input-bordered join-item w-full bg-[#ede3c7ac]"
                                    name='taste' />

                            </div>
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-2 my-2 justify-evenly">
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black">Category</span>
                            </div>
                            <div className="join">
                                <input type="text" defaultValue={category} placeholder="enter category here" className="input input-bordered join-item w-full bg-[#ede3c7ac]"
                                    name='category' />

                            </div>
                        </label>
                    </div>
                    <div className="w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black">Details</span>
                            </div>
                            <div className="join">
                                <input type="text" defaultValue={details} placeholder="enter details here" className="input input-bordered join-item w-full bg-[#ede3c7ac]"
                                    name='details' />

                            </div>
                        </label>
                    </div>
                </div>
                <div className="my-2 justify-evenly">
                    <div className="w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black">Photo</span>
                            </div>
                            <div className="join">
                                <input type="text" defaultValue={photo} placeholder="enter Photo Url here" className="input input-bordered join-item w-full bg-[#ede3c7ac]"
                                    name='photo' />

                            </div>
                        </label>
                    </div>
                </div>

                <button
                    type="submit" className="bg-[#D2B48C] text-black font-semibold w-full p-3 rounded-xl mt-5">Update Coffee</button>
            </form>
        </div>
    );
};

export default UpdateCoffee;
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, photo, supplier, details, taste, category } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-2xl font-bold"><span className="font-medium">Name:</span> {name}</h1>
                        <p><span className="font-bold">Chef: </span>{supplier}</p>
                        <p><span className="font-bold">Quantity: </span>{quantity}</p>
                    </div>
                    <div>
                        <div className="join join-vertical space-y-3">
                            <button className="btn join-item bg-amber-600">VIew</button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn join-item bg-black">Edit</button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn join-item bg-red-500">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
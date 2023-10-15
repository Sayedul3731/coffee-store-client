import Swal from 'sweetalert2'
import { Link } from "react-router-dom"


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        })


    }

    return (
        <div className="relative flex justify-center text-center w-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-[400px] w-[350px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img className="h-full w-full" src={photo} alt="profile-picture" />
            </div>
            <div className="flex justify-between item-center w-3/4">
                <div className="p-6 text-center flex justify-center items-center flex-col">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Name: {name}
                    </h4>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Total: {quantity}
                    </h4>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Taste: {taste}
                    </h4>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        Supplier: {supplier}
                    </p>
                </div>
                <div className="flex justify-center items-center flex-col gap-7 p-6 pt-2">
                    <button className="btn">View</button>
                    <Link to={`/updateCoffee/${_id}`}> <button className="btn">Edit</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn">X</button>
                </div>
            </div>
        </div>
    );
};
export default CoffeeCard;
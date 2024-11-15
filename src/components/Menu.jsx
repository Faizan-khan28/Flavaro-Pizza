

export default function Menu () {
    return(
        <div className="ml-6">
            <h3 className="text-xl font-semibold">Find The Best Pizza's</h3>
            <div className="my-5 flex gap-3 overflow-x-scroll overflow-smooth sm:overflow-x-hidden">
                <button className="px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg">All</button>
                <button className="px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg">Breakfast</button>
                <button className="px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg">Lunch</button>
                <button className="px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg">Snacks</button>
                <button className="px-3 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg">Dinner</button>
            </div>
        </div>
    )
}


export default function NavBar () {
    return (
        <nav className="flex flex-col sm:flex-row justify-between py-3 mx-6">
            <div>
                <h3 className=" text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0 ,16)}</h3>
                <h1  className="text-2xl font-bold">Flavaro Faizan</h1>
            </div>
            <div>
              <input className=" border p-3 outline-none text-sm rounded-lg w-full sm:w-[25vw] " type="search" name="search" id="" placeholder="Search here" autoComplete="off" />
            </div>
        </nav>
    )
}
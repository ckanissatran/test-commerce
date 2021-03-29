
export default function Contact() {
    return (<>
        <h1 className='mt-6 text-center'>Let's Chat</h1>

        <div className="lg:w-5/12 md:6/12 w-10/12 m-auto my-10">
            <div className="my-5 text-sm">
                <label htmlFor="name" className="block text-white">Name*</label>
                <input type="text" autoFocus id="name" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-600 w-full" placeholder="Jon Doe" />
            </div>
            <div className="my-5 text-sm">
                <label htmlFor="email" className="block text-white">Email*</label>
                <input type="text" id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-600 w-full" placeholder="jon@doe.com" />
            </div>
            <div className="my-5 text-sm">
                <label htmlFor="textBox" className="block text-white">How can we help?*</label>
                <textarea type="text" id="textBox" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-600 w-full" placeholder="What can we do for you?" />
            </div>

            <div>
                <button className="text-center w-full text-white bg-blue-800 p-3 duration-300 rounded-sm hover:bg-blue-600">SEND</button>
            </div>
        </div>

    </>
    )
}

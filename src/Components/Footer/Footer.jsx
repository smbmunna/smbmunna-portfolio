


const Footer = () => {
    return (
        <div className=" bg-gray-900 mt-16  pb-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-0 justify-between text-white px-8 py-8  max-w-7xl mx-auto">
                <div className="flex flex-col">
                    <h1 className="text-center md:text-left flex-grow text-3xl pt-8 md:pt-0 md:text-4xl font-bold">Let's design something together!</h1>
                    <div className="grid mt-4 md:mt-0">
                        <button className="mx-auto md:mx-0 btn btn-outline pb-8 pt-1 px-8 rounded-full text-2xl font-bold h-2 text-white">Contact Me</button>
                    </div>
                </div>
                <div>
                    <h1 className="md:text-4xl font-bold text-3xl">Find me on Social Media</h1>
                    <div className="space-x-4 mt-8">
                        <div className="grid gap-4 justify-center">
                            <a href="https://www.linkedin.com/in/smb-munna-75849772"><button className="btn btn-outline pb-8 pt-1 px-8 rounded-full text-2xl font-bold h-2 text-white">LinkedIn</button></a>
                            <a href="https://instagram.com/smbmunna"><button className="btn btn-outline pb-8 pt-1 px-8 rounded-full text-2xl font-bold h-2 text-white">Instagram</button></a>
                            <a href="https://www.facebook.com/smbmunna"><button className="btn btn-outline pb-8 pt-1 px-8 rounded-full text-2xl font-bold h-2 text-white">Facebook</button></a>
                        </div>
                    </div>
                </div>

            </div>
            <h3 className="text-center font-bold text-white text-xl mt-8 md:mt-16">Copyright © 2023</h3>
        </div>
    );
};

export default Footer;
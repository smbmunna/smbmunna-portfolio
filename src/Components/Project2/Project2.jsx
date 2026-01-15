import Button from "../Button/Button";

const Project2 = () => {
    return (
        <div className="text-center md:text-left grid md:grid-cols-2 mt-16 items-center  max-w-7xl mx-auto">
            <div data-aos="fade-left" data-aos-duration="1000" className="mt-4 mx-4 md:mx-0 md:mt-0">
                <img src="https://i.ibb.co/bXm4FqC/bookshelf.png" alt="" />
            </div>
            <div className="text-right" data-aos="fade-left" data-aos-duration="1000">
                <h2 className="text-center md:text-right md:mt-0 mt-4 text-4xl font-bold md:text-6xl mb-12">Bookshelf</h2>
                <h3 className="text-center md:text-right text-lg mx-4 md:mx-0 font-semibold md:text-3xl">An online library where users see book preview, Borrow books and Return when finished reading.</h3>
                <div className="grid mt-8 gap-4">
                    <div className="mx-auto flex gap-4">
                        <a href="https://bookshelf-e4b68.web.app/"><Button text='Visit' /></a>
                        <a href="https://github.com/smbmunna/bookshelf"><Button text='See Code' /></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Project2;
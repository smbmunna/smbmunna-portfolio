import Button from "../Button/Button";

const Project1 = () => {
    return (
        <div className="text-center md:text-left grid md:grid-cols-2 mt-16 items-center  max-w-7xl mx-auto">
            <div data-aos="fade-right" data-aos-duration="1000">
                <h2 className="text-4xl font-bold md:text-6xl mb-12">Inventify</h2>
                <h3 className="text-lg mx-4 md:mx-0 font-semibold md:text-3xl">A Multistore Inventory Management System where shop managers can open multiple shops to maintain their product invengory</h3>
                <div className="grid mt-8 gap-4">
                    <div className="mx-auto flex gap-4">
                        <a href="https://fresh-bites-6a368.web.app/"><Button text='Visit' /></a>
                        <a href="https://github.com/smbmunna/inventify"><Button text='See Code' /></a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className="mt-4 mx-4 md:mx-0 md:mt-0">
                <img src="https://i.ibb.co/RHpnG5Y/inventify.png" alt="" />
            </div>
        </div>
    );
};

export default Project1;
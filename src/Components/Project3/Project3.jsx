import Button from "../Button/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Project3 = () => {
    return (
        <div className="text-center md:text-left grid md:grid-cols-2 mt-16 items-center  max-w-7xl mx-auto">
            <div data-aos="fade-right" data-aos-duration="1000">
                <h2 className="text-4xl font-bold md:text-6xl mb-12">Tech Garage</h2>
                <h3 className="text-lg mx-4 md:mx-0 font-semibold md:text-3xl">An online gadget shop where users can choose from various gadgets and add those gadets to their carts and make purchase if confirmed.</h3>
                <div className="grid mt-8 gap-4">
                    <div className="mx-auto flex gap-4">
                        <a href="https://tech-garage-9e1a9.web.app/"><Button text='Visit' /></a>
                        <a href="https://github.com/smbmunna/tech-garage"><Button text='See Code' /></a>
                    </div>
                </div>

            </div>
            <div data-aos="fade-left" data-aos-duration="1000"  className="mt-4 mx-4 md:mx-0 md:mt-0">
                <img src="https://i.ibb.co/YL2MmJF/tech-garage.png" alt="" />
            </div>
        </div>
    );
};

export default Project3;
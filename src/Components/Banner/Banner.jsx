import { MdOutlineWavingHand } from "react-icons/md";

const Banner = () => {
    return (
        <div className="mt-8 md:mt-20">
            <h1 className="text-5xl md:text-9xl font-bold text-center">Web Developer</h1>
            <div className=" mt-8 md:mt-20">
                <MdOutlineWavingHand className="mx-auto text-4xl md:text-7xl"/>
                <h2 className="text-4xl text-center md:text-7xl font-bold ">Hi, I'm Mahmud Munna </h2>
            </div>
        </div>
    );
};

export default Banner;
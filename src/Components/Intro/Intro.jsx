

const Intro = () => {
    return (
        <div className="grid md:grid-cols-2 justify-between w-full mt-20 mx-auto items-center gap-8  max-w-7xl">
            <div  data-aos="flip-left" data-aos-duration="1000" className="border-4 border-gray-600 p-4 rounded-3xl mx-4 md:mx-0">
                <p className="md:text-2xl font-semibold ">
                    <span className="font-bold text-3xl">Welcome!</span> <br /><br />
                    I am a frontend developer focused on React.js.<br />

                    I design and develop websites with a focus on immersive interactions and beautiful typography. <br /> <br />
                    I am open to networking, collaboration, and learning from the vibrant community of developers. <br />
                    <br />
                    Let's code, innovate, and create together!
                </p>
            </div>
            <div>
                <div className="grid gap-4 mx-4 md:mx-0">
                    <div data-aos="flip-up" data-aos-duration="1000" className="text-center shadow-md  card bg-base-200 border-4 border-gray-600 p-4 rounded-3xl ">
                        <div className="card-body text-lg md:text-2xl font-semibold">Proficient in: HTML, CSS, JavaScript (ES6+)</div>
                    </div>
                    <div data-aos="flip-up" data-aos-duration="1000" className="text-center shadow card bg-base-200 border-4 border-gray-600 p-4 rounded-3xl ">
                        <div className="card-body  text-lg md:text-2xl font-semibold">Hands-on experience with React.js.</div>
                    </div>
                    <div data-aos="flip-up" data-aos-duration="1000" className="text-center shadow-sm card bg-base-200 border-4 border-gray-600 p-4 rounded-3xl ">
                        <div className="card-body  text-lg md:text-2xl font-semibold">Backend Technologies: Familiar with Node.js, Express.js and MongoDB database</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;

const Education = () => {
    return (
        <div className="mt-20  max-w-7xl md:mx-auto mx-4">
            <h2  data-aos="fade-right" data-aos-duration="1000" className="font-bold text-3xl text-center md:text-left md:text-6xl mb-12">Educational Qualification</h2>
            <div className="grid md:grid-cols-2 text-center md:text-left gap-8 md:gap-0">
                <div  data-aos="fade-right" data-aos-duration="1000" >
                    <h2 className="text-3xl mb-4 font-bold">Bachelor of Science (BSc)</h2>
                    <p className="text-lg font-semibold">Population Science & Human Resource Development</p>
                    <p className="text-lg font-semibold">University of Rajshahi</p>
                    <p className="text-lg font-semibold">2012-2016</p>
                </div>
                <div  data-aos="fade-left" data-aos-duration="1000">
                    <h2 className="text-3xl mb-4 font-bold">Masters of Science (MSc)</h2>
                    <p className="text-lg font-semibold">Population Science & Human Resource Development</p>
                    <p className="text-lg font-semibold">University of Rajshahi</p>
                    <p className="text-lg font-semibold">2018</p>
                </div>

            </div>
        </div>
    );
};

export default Education;
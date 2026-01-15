import Project1 from "../Project1/Project1";
import Project2 from "../Project2/Project2";
import Project3 from "../Project3/Project3";

const Projects = () => {
    return (
        <div className="mt-20  max-w-7xl mx-auto">
            <h2 className="text-4xl text-center md:text-left md:text-8xl font-bold">Selected Works</h2>
            <Project1/>
            <Project2/>
            <Project3/>
        </div>
    );
};

export default Projects;
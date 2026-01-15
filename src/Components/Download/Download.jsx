import Button from "../Button/Button";


const Download = () => {
    const handleDownload = () => {
        // Provide the correct relative path to your PDF file
        const pdfUrl = './resume.pdf';

        // Create a link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_self';

        // Set the download attribute with the desired file name
        link.download = 'Sheikh_Mahmud_Boksho_Munna_Resume.pdf';

        // Append the link to the document body
        document.body.appendChild(link);

        // Trigger the click event to start the download
        link.click();

        // Remove the link from the document body
        document.body.removeChild(link);
    };

    return (
        <div className="grid"  onClick={handleDownload} >
            <div className="mt-8 mx-auto">
                <Button text="Download My Resume"/>
            </div>
        </div>
    );
};

export default Download;
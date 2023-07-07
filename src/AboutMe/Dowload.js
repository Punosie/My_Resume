function DownloadBtn() {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('../Assets/img/Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }
    return (
            <button className="my-5 px-4 py-2 btn00 clk" onClick={onButtonClick}>
                Download CV
            </button>
    );
};

export default DownloadBtn;

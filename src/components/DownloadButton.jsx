import download from "../assets/icons/file.svg"

function DownloadButton() {
  const pdfUrl = "https://drive.google.com/uc?export=download&id=1m4YgwVO6QnV00MQdeaoTO73Yn0w1yoD5";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Ana_Badolato.pdf"; 
    link.click();
  };

  return (
    <button onClick={handleDownload} className="download-button">
      <img src={download} alt="" />
      <p>Download my CV</p>
    </button>
  );
}

export default DownloadButton


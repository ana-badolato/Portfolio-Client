import download from "../assets/icons/file.svg"

function DownloadButton() {
  const pdfUrl = "https://drive.google.com/uc?export=download&id=1RY95BM3nBpfTRMyigg1VlC95-mQqi9Am";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Ana_Badolato.pdf"; 
    link.click();
  };

  return (
    <button onClick={handleDownload} className="main-button">
      <img src={download} alt="" />
      <p>Download my CV</p>
    </button>
  );
}

export default DownloadButton


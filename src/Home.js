import React from "react";
import "./App.css";
// import UploadModal from "./UploadModal";
import WebCamUpload from "./WebCamUpload";
import FileInputUpload from "./FileInputUpload";
const Home = () => {
  return (
    <>
      {/* <UploadModal />*/}
      <WebCamUpload />
      <FileInputUpload />
    </>
  );
};

export default Home;

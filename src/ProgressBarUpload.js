import React from "react";

import Uppy from "@uppy/core";
import { ProgressBar } from "@uppy/react";
import Webcam from "@uppy/webcam";

import "@uppy/core/dist/style.css";
import "@uppy/progress-bar/dist/style.css";
import XHRUpload from "@uppy/xhr-upload";

const ProgressBarUpload = () => {
  const uppy = Uppy({
    meta: { type: "avatar" },
    autoProceed: true,
    restrictions: {
      maxFileSize: null,
      maxNumberOfFiles: null,
      minNumberOfFiles: null
    }
  });
  uppy.use(Webcam, {
    onBeforeSnapshot: () => Promise.resolve(),
    countdown: false,
    modes: ["picture"],
    mirror: true,
    facingMode: "user",
    showRecordingLength: false
  });
  uppy.on("file-removed", file => {
    console.log("Removed file", file);
  });
  uppy.on("upload-error", (file, error, response) => {
    console.log("error with file:", file.id);
    console.log("error message:", error);
  });
  uppy.on("restriction-failed", (file, error) => {
    // do some customized logic like showing system notice to users
    alert(error);
  });

  uppy.use(XHRUpload, {
    endpoint: "http://localhost:2200/api/upload"
  });

  uppy.on("complete", result => {
    console.log("Completed upload, result:", result);
    const id = result.successful[0].id;
    const url = result.successful[0].uploadURL;

    console.log(id, url);
  });
  // And display uploaded files
  uppy.on("upload-success", (file, response) => {
    const url = response.body.uploadURL;
    const fileName = response.body.fileName; //file.name;
  });

  uppy.on("file-added", file => {
    // Do something
    console.log(file);
    //setData(file);
  });

  uppy.on("upload", data => {
    // Do something
    console.log(data);
  });

  uppy.run();

  return <ProgressBar uppy={uppy} />;
};

export default ProgressBarUpload;

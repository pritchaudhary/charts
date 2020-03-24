import React, { useState } from "react";

import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import Webcam from "@uppy/webcam";
import StatusBar from "@uppy/status-bar";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/webcam/dist/style.css";
import "@uppy/status-bar/dist/style.css";
import XHRUpload from "@uppy/xhr-upload";

const WebCamUpload = () => {
  const [state, setState] = useState([]);

  const uppy = Uppy({
    meta: { type: "avatar" },
    autoProceed: true,
    restrictions: {
      maxFileSize: null,
      maxNumberOfFiles: null,
      minNumberOfFiles: null
    }
  });

  uppy.use(StatusBar, {
    id: "StatusBar",
    target: "body",
    hideAfterFinish: true,
    showProgressDetails: false,
    hideUploadButton: false,
    hideRetryButton: false,
    hidePauseResumeButton: false,
    hideCancelButton: false,
    locale: {}
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
    setState([...state, { fileName: file.name }]);
  });

  uppy.on("file-added", file => {
    // Do something
    console.log(file);
    //setData(file);
  });

  uppy.on("upload-progress", (file, progress) => {
    // file: { id, name, type, ... }
    // progress: { uploader, bytesUploaded, bytesTotal }
    console.log(file.id, progress.bytesUploaded, progress.bytesTotal);
  });

  uppy.on("upload", data => {
    // Do something
    console.log(data);
  });

  uppy.run();

  return (
    <>
      {" "}
      <Dashboard
        uppy={uppy}
        plugins={["Webcam"]}
        width={1500}
        height={200}
        showProgressDetails={true}
        waitForThumbnailsBeforeUpload
        disableStatusBar={true}
      />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default WebCamUpload;

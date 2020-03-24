import React, { useState } from "react";

import Uppy from "@uppy/core";
import { DashboardModal, Dashboard } from "@uppy/react";
import Tus from "@uppy/tus";
import Webcam from "@uppy/webcam";
import AwsS3 from "@uppy/aws-s3";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/webcam/dist/style.css";
import XHRUpload from "@uppy/xhr-upload";

const UploadModal = () => {
  const [state, setState] = useState({ modalOpen: false });

  const [data, setData] = useState({ name: "", url: "" });

  const handleUploadModalOpen = () => setState({ modalOpen: true });
  const handleUploadModalClose = data => {
    setState({ modalOpen: false });
    setData({ name: "id", url: " url" });
  };

  const uppy = Uppy({
    meta: { type: "avatar" },
    autoProceed: true,
    restrictions: {
      maxFileSize: null,
      maxNumberOfFiles: null,
      minNumberOfFiles: null
      //allowedFileTypes: ["image/*", ".jpg", ".jpeg", ".png", ".gif", ".pdf"], // null
      // onBeforeFileAdded: (currentFile, files) => {
      //   if (!currentFile.type) {
      //     // log to console
      //     uppy.log(`Skipping file because it has no type`);
      //     // show error message to the user
      //     uppy.info(`Skipping file because it has no type`, "error", 500);
      //     return false;
      //   }
      // }
    }
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

  uppy.on("info-visible", () => {
    const info = uppy.getState().info;
    // info: {
    //  isHidden: false,
    //  type: 'error',
    //  message: 'Failed to upload',
    //  details: 'Error description'
    // }
    //alert(`${info.message} ${info.details}`);
  });

  uppy.use(Webcam, {
    onBeforeSnapshot: () => Promise.resolve(),
    countdown: false,
    modes: ["picture"],
    mirror: true,
    facingMode: "user",
    showRecordingLength: false
    // locale: {
    //   strings: {
    //     // Shown before a picture is taken when the `countdown` option is set.
    //     smile: "Smile!",
    //     // Used as the label for the button that takes a picture.
    //     // This is not visibly rendered but is picked up by screen readers.
    //     takePicture: "Take a picture",
    //     // Used as the label for the button that starts a video recording.
    //     // This is not visibly rendered but is picked up by screen readers.
    //     startRecording: "Begin video recording",
    //     // Used as the label for the button that stops a video recording.
    //     // This is not visibly rendered but is picked up by screen readers.
    //     stopRecording: "Stop video recording",
    //     // Title on the “allow access” screen
    //     allowAccessTitle: "Please allow access to your camera",
    //     // Description on the “allow access” screen
    //     allowAccessDescription:
    //       "In order to take pictures or record video with your camera, please allow camera access for this site."
    //   }
    // }
  });

  //uppy.use(Tus, { endpoint: "https://master.tus.io/files/" });
  //uppy.use(Tus, { endpoint: "http://localhost:2200/api/Values" });
  uppy.use(XHRUpload, {
    endpoint: "http://localhost:2200/api/upload"
  });

  // uppy.use(Tus, { endpoint: "/dd" });
  // uppy.use(AwsS3, {
  //   companionUrl: "https://uppy-companion.my-app.com/",
  //   strings: {
  //     // Shown in the StatusBar while the upload is being signed.
  //     preparingUpload: "Preparing upload..."
  //   }
  // });
  const dd = (id, url) => {
    // setData({ name: id, url: url });
  };
  uppy.on("complete", result => {
    console.log("Completed upload, result:", result);
    const id = result.successful[0].id;
    const url = result.successful[0].uploadURL;

    console.log(id, url);
    dd(id, url);
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

  return (
    <div>
      {/*<Dashboard/>*/}

      {/* <Dashboard
        uppy={uppy}
        plugins={["Webcam"]}
        //metaFields={[{ id: "name", name: "Name", placeholder: "File name" }]}
        //proudlyDisplayPoweredByUppy={false}
        // width={1050}
        // // /height={200}
        // showLinkToFileUploadResult={true}
        // target='#dd'
        // height={550}
        // thumbnailWidth={280}
      /> */}
      <DashboardModal
        plugins={["Webcam"]}
        uppy={uppy}
        closeModalOnClickOutside
        open={state.modalOpen}
        onRequestClose={handleUploadModalClose}
      />
      <button onClick={handleUploadModalOpen}>add new files</button>
      <div id='dd'></div>

      {data !== null && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default UploadModal;

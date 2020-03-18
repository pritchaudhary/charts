import React, { useState } from "react";

import Uppy from "@uppy/core";
import { DashboardModal, Dashboard } from "@uppy/react";
import Tus from "@uppy/tus";
import Webcam from "@uppy/webcam";
import AwsS3 from "@uppy/aws-s3";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/webcam/dist/style.css";

const UploadModal = () => {
  const [state, setState] = useState({ modalOpen: false });

  const handleUploadModalOpen = () => setState({ modalOpen: true });
  const handleUploadModalClose = () => setState({ modalOpen: false });

  const uppy = Uppy({
    meta: { type: "avatar" },
    autoProceed: true
  });

  uppy.use(Webcam, {
    onBeforeSnapshot: () => Promise.resolve(),
    countdown: false,
    modes: ["video-audio", "video-only", "audio-only", "picture"],
    mirror: true,
    facingMode: "user",
    showRecordingLength: false,
    locale: {}
  });

  uppy.use(Tus, { endpoint: "https://master.tus.io/files/" });
  // uppy.use(Tus, { endpoint: "/dd" });
  // uppy.use(AwsS3, {
  //   companionUrl: "https://uppy-companion.my-app.com/",
  //   strings: {
  //     // Shown in the StatusBar while the upload is being signed.
  //     preparingUpload: "Preparing upload..."
  //   }
  // });

  uppy.on("complete", result => {
    console.log("Completed upload, result:", result);
    const id = result.successful[0].id;
    const url = result.successful[0].uploadURL;
    console.log(id, url);
  });

  uppy.on("file-added", file => {
    // Do something
    console.log(file);
  });

  uppy.on("upload", data => {
    // Do something
    console.log(data);
  });

  uppy.run();

  return (
    <div>
      {/*<Dashboard/>*/}
      <Dashboard
        uppy={uppy}
        plugins={["GoogleDrive", "Webcam"]}
        metaFields={[{ id: "name", name: "Name", placeholder: "File name" }]}
      />
      <DashboardModal
        plugins={["Webcam"]}
        uppy={uppy}
        closeModalOnClickOutside
        open={state.modalOpen}
        onRequestClose={handleUploadModalClose}
      />
      <button onClick={handleUploadModalOpen}>add new files</button>
    </div>
  );
};

export default UploadModal;

import React, { useState, useEffect } from "react";
import Uppy from "@uppy/core";
import FileInput from "@uppy/file-input";
import ProgressBar from "@uppy/progress-bar";
import "@uppy/core/dist/style.css";
import "@uppy/file-input/dist/style.css";
import "@uppy/progress-bar/dist/style.css";
import XHRUpload from "@uppy/xhr-upload";

const FileInputUpload = () => {
  const [state, setState] = useState({
    response: null,
    errors: null
  });

  useEffect(() => {
    const uppy = Uppy({
      meta: { type: "avatar" },
      autoProceed: true,
      restrictions: {
        maxFileSize: null,
        maxNumberOfFiles: null,
        minNumberOfFiles: null
      }
    })
      .use(FileInput, {
        target: "#file-upload",
        inputName: "files[]",
        pretty: true,
        locale: {
          chooseFile: "asdasdasd"
        }
      })
      .use(ProgressBar, {
        target: "body",
        fixed: true
      })
      .use(XHRUpload, {
        endpoint: "http://localhost:2200/api/upload"
      });

    uppy.on("upload-error", (file, error, response) => {
      console.log("error with file:", file.id);
      console.log("error message:", error);
    });

    uppy.on("complete", result => {
      console.log("Upload complete! We’ve uploaded these files:", result.successful);
    });

    uppy.on("restriction-failed", (file, error) => {
      // do some customized logic like showing system notice to users
      console.error({ file, error: error.message });
    });

    uppy.on("file-added", file => {
      console.log("file-added", { file });
      setState({ errors: null, response: null });
      const startTime = Date.now();

      uppy
        .upload()
        .then(result => {
          const finishTime = Date.now();

          console.warn("Successful uploads:", result.successful, {
            uploadTime: (finishTime - startTime) / 1000,
            uploadTimeCalcFromResponse: (finishTime - result.successful[0].progress.uploadStarted) / 1000
          });
          uppy.reset();
          setState({ ...state, response: result.successful[0] });

          if (result.failed.length > 0) {
            console.error("Errors:");
            result.failed.forEach(file => {
              console.error(file.error);
            });
          }
        })
        .catch(error => {
          console.warn(error);
          setState({ errors: error });
        });
    });
  }, [state]);

  //const setupUppy = () => {};
  return (
    <>
      <div id='file-upload' />
      {state.errors ? <pre>{`An error occured ${state.errors}`}</pre> : null}
      {state.response ? (
        <>
          <pre>
            `File uploaded:`
            <img src={state.response.uploadURL} alt='' style={{ maxWidth: "100%" }} />
            <div>Filename: {state.response.name}</div>
            <div>UploadUrl: {state.response.uploadURL}</div>
          </pre>
          <div id='dd'></div>
        </>
      ) : null}
      <pre>{JSON.stringify(state)}</pre>
    </>
  );
};

export default FileInputUpload;

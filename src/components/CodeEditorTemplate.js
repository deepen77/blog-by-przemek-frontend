import React from 'react';
import CodeEditor from "@uiw/react-textarea-code-editor";

const CodeEditorTemplate = ({value}) => {
  return (
    <>
      <CodeEditor
        value={value}
        language="js"
        padding={15}
        style={{
          background:
            "linear-gradient(90deg, rgba(42,41,41,1) 0%, rgba(68,71,75,1) 100%)",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          fontSize: 12,
          minWidth: "300px",
          margin: "0 auto",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      />
      ;
    </>
  );
};

export default CodeEditorTemplate;

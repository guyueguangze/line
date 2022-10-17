import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'
export default function Edit() {
  return (
    <div className="reactAceEdit">
      <AceEditor
        mode="javascript"
        theme="github"
        name="ACE-EDITOR"
        width="100%"
        height="100%"
        editorProps={{ $blockScrolling: true }}
        highlightActiveLine={false}
        // setOptions={{
        //   wrap: true,
        //   enableLiveAutocompletion: true,
        // }}
      />
    </div>
  )
}

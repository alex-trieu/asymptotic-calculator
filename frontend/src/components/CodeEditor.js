// src/components/CodeEditor.js
import React, { useEffect, useRef } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { oneDark } from '@codemirror/theme-one-dark';

const CodeEditor = ({ code, setCode }) => {
    const editor = useRef();

    useCodeMirror({
        container: editor.current,
        value: code,
        extensions: [java(), oneDark],
        onChange: (value, viewUpdate) => {
            setCode(value);
        },
    });

    return <div ref={editor} style={{ height: '400px', border: '1px solid #ccc' }} />;
};

export default CodeEditor;

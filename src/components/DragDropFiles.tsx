import { styled } from '@nextui-org/react';
import React, { useMemo, useRef, useState } from 'react'

type Props = {
    isDemo: boolean
}

const DragDropFiles = ({ isDemo }: Props) => {

    const [draggedFiles, setDraggedFiles] = useState<any>([]);
    const fileInputRef = useRef(null);

    const filesArray = useMemo(() => {
        return Array.from(draggedFiles)
    }, [draggedFiles])

    console.log(filesArray)

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDraggedFiles(event.dataTransfer.files);
    };
 
    const handleClick = () => {
        if(fileInputRef) fileInputRef.current.click();
      };
      
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDraggedFiles(event.target.files);
      };

    // console.log(draggedFiles)
    return (
        <FileInput
            className="file-input"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={handleClick}
            css={{
                cursor: isDemo ? 'not-allowed' : 'pointer'
            }}
        >
            {draggedFiles.length > 0 ? (
                <>
                    <p>{draggedFiles.length} files selected:</p>
                    <ul>
                        {filesArray.map((file: any, index: number) => (
                            <li key={index}>
                                <p>{file.name}</p>
                                <p>{file.size} bytes</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    Drag and drop files here, or click to select files
                </p>
            )}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                style={{ display: 'none' }} />
        </FileInput>
    )
}

const FileInput = styled('div', {
    borderRadius: '$md',
    background: 'whitesmoke',
    border: '2px dashed #ccc',
    padding: '1em',
    textAlign: 'center',

})

export default DragDropFiles
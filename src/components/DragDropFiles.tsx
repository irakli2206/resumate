import { Col, styled, Text, Button } from '@nextui-org/react';
import React, { useMemo, useRef, useState } from 'react'
import { FaFolderOpen } from 'react-icons/fa'

type Props = {
    isDemo: boolean
}

const DragDropFiles = ({ isDemo }: Props) => {

    const [draggedFiles, setDraggedFiles] = useState<any>([]);
    const fileInputRef = useRef(null);

    const filesArray = useMemo(() => {
        return Array.from(draggedFiles)
    }, [draggedFiles])


    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDraggedFiles(event.dataTransfer.files);
    };

    const handleClick = () => {
        if (fileInputRef) fileInputRef.current.click();
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDraggedFiles(event.target.files);
    };

    return (
        <Wrapper>
            <InputLabel htmlFor="file-input">Upload Resumes (PDF)</InputLabel>
            <FileInput
                id='file-input'
                className="file-input"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                // css={{
                //     cursor: isDemo ? 'not-allowed' : 'pointer'
                // }}
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
                    <InnerInput>
                        <FaFolderOpen color='grey' size={36} />
                        <Text css={{color: '$accents7', fontWeight: '$semibold'}} >Drag and Drop Files Here</Text>
                        <Text css={{color: '$accents6', fontWeight: '$light', fontSize: '$sm'}} >File Types Supported: PDF</Text>
                        <Button disabled={isDemo} onClick={handleClick} color='secondary' css={{background: 'grey'}}>Choose Files</Button>
                        <Text css={{color: '$accents6', fontWeight: '$light', fontSize: '$sm'}}  >Maximum Size: 5MB</Text>
                    </InnerInput>
                )}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    multiple
                    style={{ display: 'none' }} />
            </FileInput>
        </Wrapper>
    )
}

const Wrapper = styled('div', {

})

const InnerInput = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$4'
})

const InputLabel = styled('label', {
    mb: '$3',
    d: 'inline-block'
})

const FileInput = styled('div', {
    borderRadius: '$md',
    background: 'whitesmoke',
    border: '2px dashed #ccc',
    padding: '1em',
    textAlign: 'center',
    ds: '$lg'

})

export default DragDropFiles
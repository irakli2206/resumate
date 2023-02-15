import { Modal, Text } from '@nextui-org/react'
import React from 'react'
import usePdfViewer from '../hooks/usePDFViewer'
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import PDFViewerControls from './PDFViewerControls';
import '../styles/PDFViewer.scss'

type Props = {
    fileSource: string
    visible: boolean
    closeHandler: () => void
}

const pdfViewerOptions = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
};

const PDFModal = ({ fileSource, visible, closeHandler }: Props) => {
    const { file, setFile, curPage, totalPageNum, toNextPage, toPrevPage, onFileChange, onDocumentLoadSuccess } = usePdfViewer(fileSource)
    return (
        <>
            {file && <Modal blur
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                width='clamp(300px, 80%, 800px)'
            >
                <Modal.Header >
                    <Text h2>Resume</Text>
                </Modal.Header>
                <Modal.Body>
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className='pdf-viewer' >
                        <Page pageNumber={curPage} />
                        <PDFViewerControls curPage={curPage} totalPages={totalPageNum} toNextPage={toNextPage} toPrevPage={toPrevPage} />
                    </Document>
                </Modal.Body>
            </Modal>}
        </>
    )
}

export default PDFModal
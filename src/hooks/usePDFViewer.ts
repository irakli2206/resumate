import { useState } from "react";

type Props = {
    fileSource: string
}

const usePdfViewer = (fileSource: string) => {
    const [file, setFile] = useState(fileSource);
    const [curPage, setCurPage] = useState(1);
    const [totalPageNum, setTotalPageNum] = useState(0)

    function onFileChange(event: any) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess(docData: any) {
        setTotalPageNum(docData._pdfInfo.numPages)
    }

    function toNextPage() {
        if(curPage < totalPageNum) setCurPage(curPage + 1)
    }

    function toPrevPage() {
        if(curPage > 1) setCurPage(curPage - 1)
    }


    return { file, setFile, totalPageNum, curPage, toNextPage, toPrevPage, onFileChange, onDocumentLoadSuccess }
}

export default usePdfViewer
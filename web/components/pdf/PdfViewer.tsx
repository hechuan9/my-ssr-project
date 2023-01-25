import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = '/js/pdf.worker.min.js'

function PdfViewer (props) {
  const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess ({ numPages }) {
    setNumPages(numPages)
  }

  const { pdf } = props

  return (
    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  )
}

export default PdfViewer

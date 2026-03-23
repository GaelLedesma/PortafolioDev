import { useState } from "react";
import { WindowControls } from "@components/index.js";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>CV.pdf</h2>

        <a
          href="/files/CV_Gael.pdf"
          download
          className="cursor-pointer"
          title="descargar cv"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
          disabled={pageNumber === 1}
          className="px-3 py-1 rounded bg-gray-100 disabled:opacity-50"
        >
          Anterior
        </button>

        <p>
          Página {pageNumber} de {numPages}
        </p>

        <button
          onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
          disabled={pageNumber === numPages}
          className="px-3 py-1 rounded bg-gray-100 disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>

      <div className="h-[calc(100%-96px)] overflow-auto bg-white p-4 flex justify-center">
        <Document
          file="/files/CV_Gael.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} renderTextLayer renderAnnotationLayer />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;

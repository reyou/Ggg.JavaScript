declare global {
  interface Window {
    PDFViewerApplication: any;
  }
}
export default class PdfContainer {
  public run() {
    let pdfIframe = <HTMLIFrameElement>document.getElementById("pdfIframe");

    let pdfAppInterval = setInterval(() => {
      if (pdfIframe.contentWindow.PDFViewerApplication.eventBus) {
        clearInterval(pdfAppInterval);
      }
    }, 2000);

    document.getElementById("btnPrev").addEventListener("click", () => {
      pdfIframe.contentWindow.PDFViewerApplication.page -= 1;
    });

    document.getElementById("btnNext").addEventListener("click", () => {
      pdfIframe.contentWindow.PDFViewerApplication.page += 1;
    });

    document.getElementById("btnLoadPdf").addEventListener("click", () => {
      let pdfSourceUrl = (<HTMLInputElement>(
        document.getElementById("inputPdfSource")
      )).value;

      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      // https://developer.mozilla.org/en-US/docs/Web/API/Response
      // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      // https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
      // https://developer.mozilla.org/en-US/docs/Web/API/Body/blob
      fetch(pdfSourceUrl).then((response: Response) => {
        response.blob().then((blob) => {
          var url = URL.createObjectURL(blob);
          pdfIframe.src = `pdfjs/web/viewer.html?file=${url}`;
        });
      });
    });
  }
}
new PdfContainer().run();

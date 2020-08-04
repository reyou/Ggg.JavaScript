declare global {
  interface Window {
    PDFViewerApplication: any;
  }
}
export default class PdfContainer {
  public run() {
    let pdfIframe = <HTMLIFrameElement>document.getElementById("pdfIframe");

    let pdfAppInterval = setInterval(() => {
      console.log({
        title: "PDFViewerApplication",
        pages: pdfIframe.contentWindow.PDFViewerApplication.pagesCount,
        eventBus: pdfIframe.contentWindow.PDFViewerApplication.eventBus,
      });
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
      alert(pdfSourceUrl);
    });
  }
}
new PdfContainer().run();

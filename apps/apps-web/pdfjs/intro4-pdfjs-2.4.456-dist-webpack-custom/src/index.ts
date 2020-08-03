declare global {
  interface Window {
    PDFViewerApplication: any;
  }
}
export default class PdfContainer {
  public run() {
    let pdfIframe = document.getElementById("pdfIframe");
    pdfIframe.addEventListener("load", (event: Event) => {
      let iframe = <HTMLIFrameElement>event.srcElement;
      if (iframe.contentWindow.PDFViewerApplication) {
        console.log({
          title: "PDFViewerApplication",
          pages: iframe.contentWindow.PDFViewerApplication.pagesCount,
        });
      } else {
        console.log("Not here!");
      }
    });
  }
}
new PdfContainer().run();

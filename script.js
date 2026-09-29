function downloadPDF() {
    const element = document.querySelector('#pdf-content');

    const opt = {
        margin: [10, 5, 15, 5],
        filename: 'Hoja_de_vida_Frank_Angel_Giraldo.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    html2pdf().set(opt).from(element).save();
}

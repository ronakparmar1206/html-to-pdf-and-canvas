  const handleDownload=async()=>{
const element=document.getElementById('print'); //--common for both
await  html2PDF(element, {
  jsPDF: {
    format: 'a6',
  },
  imageType: 'image/jpeg',
  output: 'ktw_agb.pdf'
}).then((res)=>{
    // console.log()
    alert("Himvbvb")
})}
// ------------html to pdf-------------npm i jspdf-html2canvas//
canvas=await html2canvas(element),
data=canvas.toDataURL('image/pdf'),
link=document.createElement('a');
console.log(link)
link.href=data;
link.download='download-image.pdf';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
// ----------------html to canvas----------------//npm i html2canvas
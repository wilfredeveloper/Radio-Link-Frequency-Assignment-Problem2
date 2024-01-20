import { jsPDF } from "jspdf";

const doc = new jsPDF();
// I have a button in my html page with id of download
// write code to download the table in table.html with the class name of table as pdf when the button is clicked
const download = document.getElementById("download");
download.addEventListener("click", () => {
  doc.autoTable({ html: "#table" });
  doc.save("table.pdf");
});

import { IconDownload } from '@tabler/icons-react';

const ExportarCSV = ({ datos }) => {
  const columnas = ["name", "description", "category", "stock", "price", "createdAt"];

  const formatearDato = (valor) => {
    if (typeof valor === "number") {
      return valor.toFixed(2);
    }
    return `"${(valor || "").toString().replace(/"/g, '""')}"`; // escapa comillas
  };

  const exportar = () => {
    if (!datos || datos.length === 0) {
      alert("No hay datos para exportar");
      return;
    }

    const encabezados = columnas.join(",");
    const filas = datos.map(item =>
      columnas.map(col => formatearDato(item[col])).join(",")
    );

    const contenido = [encabezados, ...filas].join("\n");

    const blob = new Blob([contenido], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `inventario_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <IconDownload stroke={2} size={40} className='active:scale-90 text-fuchsia-500 hover:text-purple-500' onClick={exportar} />
  );
};




export default ExportarCSV
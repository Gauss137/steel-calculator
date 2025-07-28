import { SteelCalculatorData, SteelCalculatorResults } from '@/types';
import { STEEL_CSV_CONFIG as CSV_CONFIG, STEEL_DEFAULT_UNITS as DEFAULT_UNITS } from './steel-constants';

export function generateCSVContent(
  inputData: SteelCalculatorData, 
  results: SteelCalculatorResults,
  selectedTab: 'table1' | 'table2' | 'table3'
): string {
  const fecha = new Date().toLocaleDateString('es-ES');
  const hora = new Date().toLocaleTimeString('es-ES');
  
  let csvContent = [
    CSV_CONFIG.HEADERS.TITLE,
    CSV_CONFIG.HEADERS.COMPANY,
    `Fecha: ${fecha}`,
    `Hora: ${hora}`,
    "",
    CSV_CONFIG.HEADERS.INPUT_DATA,
  ];

  // Agregar datos según la tabla seleccionada
  switch (selectedTab) {
    case 'table1':
      csvContent.push(
        "Diámetro,Cantidad,Unidad",
        ...Object.entries(inputData.table1.quantities)
          .filter(([_, quantity]) => quantity > 0)
          .map(([diameter, quantity]) => `Ø${diameter}mm,${quantity},${DEFAULT_UNITS.QUANTITY}`)
      );
      csvContent.push(
        "",
        CSV_CONFIG.HEADERS.RESULTS,
        "Concepto,Valor,Unidad",
        `Área Total de Acero,${results.table1.totalArea.toFixed(2)},${DEFAULT_UNITS.AREA}`
      );
      break;

    case 'table2':
      csvContent.push(
        "Concepto,Valor,Unidad",
        `Área Total Deseada,${inputData.table2.targetArea},${DEFAULT_UNITS.AREA}`,
        "",
        "Diámetro,Cantidad Sugerida,Unidad"
      );
      Object.entries(results.table2.suggestedQuantities).forEach(([diameter, quantity]) => {
        csvContent.push(`Ø${diameter}mm,${quantity.toFixed(2)},${DEFAULT_UNITS.QUANTITY}`);
      });
      break;

    case 'table3':
      csvContent.push(
        "Barras Seleccionadas:",
        ...Object.entries(inputData.table3.selectedBars)
          .filter(([_, selected]) => selected)
          .map(([diameter, _]) => `Ø${diameter}mm`)
      );
      
      if (inputData.table3.steelRatio !== undefined) {
        csvContent.push(
          "",
          "Cuantía de Acero,Separación Calculada,Unidad",
          `${inputData.table3.steelRatio},${results.table3.spacing?.toFixed(2) || 'N/A'},${DEFAULT_UNITS.SPACING}`
        );
      } else if (inputData.table3.spacing !== undefined) {
        csvContent.push(
          "",
          "Separación de Barras,Cuantía Calculada,Unidad",
          `${inputData.table3.spacing},${results.table3.steelRatio?.toFixed(2) || 'N/A'},${DEFAULT_UNITS.STEEL_RATIO}`
        );
      }
      break;
  }

  csvContent.push(
    "",
    CSV_CONFIG.HEADERS.NOTE,
    "Los resultados fueron calculados considerando las especificaciones",
    "de barras de acero estructural. Verificar la aplicabilidad según",
    "las condiciones reales del proyecto."
  );

  return csvContent.join('\n');
}

export function downloadCSV(
  inputData: SteelCalculatorData, 
  results: SteelCalculatorResults,
  selectedTab: 'table1' | 'table2' | 'table3'
): void {
  const csvContent = generateCSVContent(inputData, results, selectedTab);
  const fecha = new Date().toLocaleDateString('es-ES').replace(/\//g, '-');
  const filename = `${CSV_CONFIG.FILENAME_PREFIX}${fecha}.csv`;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
} 
function hexToRgb(hex) {
    // Remove the hash sign if present
    hex = hex.replace(/^#/, '');
  
    // Parse the hex value
    const bigint = parseInt(hex, 16);
  
    // Extract RGB components
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    // Return the formatted RGB string
    return `${r}, ${g}, ${b}`;
}
  
  
export default hexToRgb
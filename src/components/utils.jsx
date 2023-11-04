export default function formatNumberWithCommas(number) {
    if (isNaN(number)) {
      return 'Invalid Number';
    }
  
    const parts = number.toString().split('.');
  
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    return parts.join('.');
  }
// Formatting date

export const dateFormate = (date) => {
    const months = ["January", "Febuary", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dd = new Date(date);
    return months[dd.getMonth()] + " " + dd.getDate() + ", " + dd.getFullYear();
  }
  
  // Removing the host from the url
  
  export const removePre = (url) => {    
    if(url !== undefined){
      var newUrl = url.replace (/^[a-z]{5}:\/{2}[a-z]{1,}\.[a-z]{3}.(.*)/, '$1');
      const catUrl = newUrl.substr(newUrl.indexOf('/', 7) + 1);
      //console.log(newUrl);
      return newUrl;
    }
    
  }
  
  // To remove special characters from title
  // replace unicode characters
  
  export const removeSpecialSymbols = (str) => {
    return str.replace(/&#([0-9]{1,4});/gi, function(match, numStr) {
        var num = parseInt(numStr, 10); // read num as normal number
        return String.fromCharCode(num);
    });
  }
  
  export const removeSpaceAndConvertToLower = (str) => {
    return str.replace(/\s+/g, '-').toLowerCase();
  }
  
  
  
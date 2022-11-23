export const handleValidate = (formValues) => {
   let message = null;
   let date = new Date();
   let cardNumberRegEx = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/g

   // Desestructuring for easy to use access
   const { cardHolder, cardNumber, expirationMonth, expirationYear, cvc } = formValues;

   // Validate each input field to not be empty
   if(( cardHolder === '' ) ||
      ( cardNumber === '' ) ||
      ( expirationMonth === '' ) ||
      (expirationYear === '')||
      (cvc === '')) {
      message = 'Asegurate de llenar todos los campos del formulario';
      return message;
   };

   // Validate if cardholder name is more than 3 characters
   if( cardHolder.length < 3 ) {
      message = 'El nombre del titular de la tarjeta debe de ser mayor a 3 caractéres';
      return message;
   };

   // Validate if cardNumber is a real number of card using regular expressions.
   if( !cardNumberRegEx.test(cardNumber) ) {
      message = 'Introduce un número válido de tarjeta de credito o debito';
      return message;
   };

   // Validate if expiration date is older than this year
   if( Number(expirationYear) < date.getFullYear().toString().slice(-2) ) {
      message = `El año de expiración debe de ser mayor ${ date.getFullYear() }`;
      return message;
   };

   // Validate if security number, at the reverse, is more than 3 digits
   if ( cvc.length !== 3 && isNaN(cvc) ) {
      message = 'El código de seguridad al reverso de tu tarjeta debe de tener 3 caractéres';
      return message;
   };

   return message;
};
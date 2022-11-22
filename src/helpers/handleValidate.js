export const handleValidate = (formValues) => {
   let message = null;
   let date = new Date();
   let creditNumberRegEx = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/g

   // Desestructuring for easy to use access
   const { cardHolder, cardNumber, expirationMonth, expirationYear, cvc } = formValues;

   // Validate each input field
   if(( cardHolder === '' ) ||
      ( cardNumber === '' ) ||
      ( expirationMonth === '' ) ||
      (expirationYear === '')||
      (cvc === '')) {
      message = 'Asegurate de llenar todos los campos del formulario';
      return;
   };

   if( cardHolder.length >= 3 ) {
      message = 'El nombre del titular de la tarjeta debe de ser mayor a 3 caractéres';
      return;
   };

   if( +expirationYear < date.getFullYear() ) {
      message = `El año de expiración debe de ser mayor ${ date.getFullYear() }`;
      return;
   };

   if ( cvc.length !== 3 ) {
      message = 'El código de seguridad al reverso de tu tarjeta debe de tener 3 caractéres';
      return;
   };
};
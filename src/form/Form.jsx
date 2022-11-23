import React, { useState } from 'react';
/* helpers */
import { handleFormatCardNumber } from '../helpers/handleFormatCardNumber';
import { handleValidate } from '../helpers/handleValidate';

export const Form = ({ formValues, handleChange }) => {
   /* state */
   const [alertState, setAlertState] = useState({
      state: false,
      content: null
   });

   /* Functions */
   const handleSubmit = (e) => {
      e.preventDefault();

      // Validations
      const message = handleValidate(formValues);
      if( message !== null ) {
         setAlertState({ state: true, content: message });
         return;
      };

      // set alert state as if there is any problem
      setAlertState({ state: false, content: null });

      // Try on submit form
      try {
         alert("Submiting form...")
      } catch(error) {
         setAlertState({ state: true, content: 'Ha habido un problema, vuelve a intentarlo más tarde' });
      };
   };
   
   return (
      <section className='form-container'>
         <form className='form' autoComplete='off' onSubmit={ handleSubmit }>
            <article className="input-field">
               <label htmlFor="cardHolder">Cardholder Name</label>
               <input
                  type="text"
                  name='cardHolder'
                  id='cardHolder'
                  placeholder='e.g. Fernando Ortiz'
                  value={ formValues.cardHolder }
                  onChange={ handleChange }
               />
            </article>
            <article className="input-field">
               <label htmlFor="cardNumber">Card Number</label>
               <input
                  type="text"
                  id='cardNumber'
                  name='cardNumber'
                  placeholder='e.g. 1234 5678 0000'
                  value={ handleFormatCardNumber(formValues.cardNumber) }
                  onChange={ handleChange }
               />
            </article>
            <article className="fields">
               <article className="input-field-flex">
                  <article className="input-mid-field">
                     <label htmlFor="expiration-date">Exp. Date (MM/YY)</label>
                     <input
                        type="text"
                        name='expirationMonth'
                        id='expiration-date'
                        placeholder='MM'
                        value={ formValues.expirationMonth }
                        onChange={ handleChange }
                     />
                  </article>
                  <article className="input-mid-field">
                     <label className='opacity-0' htmlFor="">Hola Mundo</label>
                     <input
                        type="text"
                        name='expirationYear'
                        placeholder='YY'
                        value={ formValues.expirationYear }
                        onChange={ handleChange }
                     />
                  </article>
                  <article className="input-mid-field">
                     <label htmlFor="cvc">CVC</label>
                     <input
                        type="text"
                        name='cvc'
                        id='cvc'
                        placeholder='123'
                        value={ formValues.cvc }
                        onChange={ handleChange }
                     />
                  </article>
               </article>
            </article>
            { alertState?.state && <small className='form-error'>{ alertState?.content }</small> }
            <button className='btn btn-submit'>
               Confirm
            </button>
         </form>
      </section>
   );
};
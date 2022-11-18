import React from 'react';

export const Form = () => {
   return (
      <section className='form-container'>
         <form className='form'>
            <article className="input-field">
               <label htmlFor="cardHolder">Cardholder Name</label>
               <input
                  type="text"
                  name='cardHolder'
                  id='cardHolder'
                  placeholder='e.g. Fernando Ortiz'
               />
            </article>
            <article className="input-field">
               <label htmlFor="cardNumber">Card Number</label>
               <input
                  type="text"
                  id='cardNumber'
                  name='cardNumber'
                  placeholder='e.g. 1234 5678 0000'
               />
            </article>
            <article className="fields">
               <article className="input-field-flex">
                  <article className="input-mid-field">
                     <label htmlFor="expiration-date">Exp. Date (MM/YY)</label>
                     <input
                        type="text"
                        name='expiration-month'
                        id='expiration-date'
                        placeholder='MM'
                     />
                  </article>
                  <article className="input-mid-field">
                     <label className='opacity-0' htmlFor="">Hola Mundo</label>
                     <input
                        type="text"
                        name='expiration-month'
                        placeholder='YY'
                     />
                  </article>
                  <article className="input-mid-field">
                     <label htmlFor="cvc">CVC</label>
                     <input
                        type="text"
                        name='cvc'
                        id='cvc'
                        placeholder='123'
                     />
                  </article>
               </article>
            </article>
            <button className='btn btn-submit'>
               Confirm
            </button>
         </form>
      </section>
   );
};
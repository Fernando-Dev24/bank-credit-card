import React from 'react';
/* helpers */
import { handleFormatCardNumber } from '../helpers/handleFormatCardNumber';

export const Card = ({ formValues }) => {
   /* desestructuring for easy to use access */
   const { cardHolder, cardNumber, expirationMonth, expirationYear, cvc } = formValues;

   return (
      <section className='cards'>
         <section className="frontal-card">
            <header className='frontal-card-header'>
               <div className="dot" />
               <div className="dot small-dot" />
            </header>
            <article className="frontal-card-body">
               <h3>{ cardNumber !== ''
                  ? handleFormatCardNumber(formValues.cardNumber)
                  : '0000 0000 0000 0000'
               }
               </h3>
               <div className="frontal-card-info">
                  <p>{ cardHolder !== '' ? cardHolder : 'cardholder name' }</p>
                  <p>{ expirationMonth !== '' ? expirationMonth : '00'  }/{ expirationYear !== '' ? expirationYear : '00'  }</p>
               </div>
            </article>
         </section>
         
         <section className="reverse-card">
            <header className='reverse-card-header' />
            <article className="reverse-card-body">
               <p>{ cvc !== '' ? cvc : '000' }</p>
               <p className='card-conditions'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, similique molestias illo alias soluta iste! Corrupti ratione ipsam accusamus explicabo.</p>
            </article>
         </section>
      </section>
   );
};
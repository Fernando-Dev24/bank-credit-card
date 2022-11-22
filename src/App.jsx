import React from 'react';
import WebFont from 'webfontloader';
/* hooks */
import { useForm } from './hooks/useForm';
/* components */
import { Card } from './card-layout/Card';
import { Form } from './form/Form';

export const App = () => {
   /* hooks */
   const { formValues, handleChange } = useForm({
      cardHolder: '',
      cardNumber: '',
      expirationMonth: '',
      expirationYear: '',
      cvc: '',
   });

   WebFont.load({
      google: {
         families: ["Outfit:300,400,500,600"],
      },
   });

   return (
      <>
         <section className="layout-wrapper">
            <section className="card-wrapper">
               <Card
                  formValues={ formValues }
               />
            </section>
            <section className="form-wrapper">
               <Form
                  formValues={ formValues }
                  handleChange={ handleChange }
               />
            </section>
         </section>
      </>
   );
};
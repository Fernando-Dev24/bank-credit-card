import React from 'react';
import WebFont from 'webfontloader';
/* components */
import { Card } from './card-layout/Card';
import { Form } from './form/Form';

export const App = () => {
   WebFont.load({
      google: {
         families: ["Outfit:300,400,500,600"],
      },
   });

   return (
      <>
         <section className="layout-wrapper">
            <section className="card-wrapper">
               <Card />
            </section>
            <section className="form-wrapper">
               <Form />
            </section>
         </section>
      </>
   );
};
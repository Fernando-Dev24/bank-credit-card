import React from 'react';

export const Card = () => {
   return (
      <section className='cards'>
         <section className="frontal-card">
            <header className='frontal-card-header'>
               <div className="dot" />
               <div className="dot small-dot" />
            </header>
            <article className="frontal-card-body">
               <h3>0000 0000 0000 0000</h3>
               <div className="frontal-card-info">
                  <p>Cardholder Name</p>
                  <p>00/00</p>
               </div>
            </article>
         </section>
         
         <section className="reverse-card">
            <header className='reverse-card-header' />
            <article className="reverse-card-body">
               <p>000</p>
               <p className='card-conditions'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, similique molestias illo alias soluta iste! Corrupti ratione ipsam accusamus explicabo.</p>
            </article>
         </section>
      </section>
   );
};
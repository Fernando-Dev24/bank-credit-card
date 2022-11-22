import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
   /* state */
   const [formValues, setFormValues] = useState(initialState);
   
   /* functions */
   const handleResetForm = () => {
      setFormValues(initialState);
   }

   const handleChange = (e) => {
      setFormValues({
         ...formValues,
         [e.target.name]: e.target.value,
      });
   };

   return { formValues, handleChange, handleResetForm };
};
import React from "react";
import MainLayout from "../Layouts/MainLayout";
import FormularioContacto from "../Components/FormularioContacto";
 



function Contactos() {
  return (
    <MainLayout>
      <div>
        <FormularioContacto />
      </div>
      
    </MainLayout>
  );
}

export default Contactos;
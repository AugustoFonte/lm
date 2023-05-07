import React from "react";
import foto from "../Assets/FOLM1915.jpg"
function SobreNos() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 font-display">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">Sobre Nós</h1>
                    <p className="font-normal text-base leading-6 text-black ">Somos uma empresa de fotografia dedicada a capturar momentos especiais na vida de nossos clientes. Acreditamos que cada momento é único e merece ser registrado de maneira especial.</p>
                    <p className="font-normal text-base leading-6 text-black ">Nosso objetivo é criar imagens que transmitam a essência de cada momento e contem uma história completa. Sabemos que nossos clientes confiam em nós para capturar os momentos mais importantes de suas vidas, e nos esforçamos para superar suas expectativas em todos os aspectos. Nosso estilo de fotografia é natural e autêntico, buscamos registrar a emoção e o sentimento do momento.</p>
                    <p className="font-normal text-base leading-6 text-black ">Se você está procurando uma equipe de fotógrafos apaixonados e dedicados para registrar os momentos especiais de sua vida, conte conosco! Estamos ansiosos para trabalhar com você e transformar seus momentos em memórias inesquecíveis.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={foto} alt="A group of People" />
                </div>
            </div>

            
        </div>


  );
}

export default SobreNos;
import React from "react";


function OurServices() {
  return (

    <section className="m-4 md:m-8">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold font-display">Os nossos serviços</h2>
		
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
			
			<h3 className="my-3 text-3xl font-semibold font-display">Casamentos</h3>
			<div className="space-y-1 leading-tight font-text">
				<p>Nosso serviço de fotografia de casamento é cuidadosamente planejado para atender às necessidades e expectativas de cada casal.</p>
				<p>Trabalhamos com um olhar sensível e criativo, capturando imagens que refletem a personalidade e o estilo do casal, bem como a beleza do cenário e dos detalhes.</p>
				
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			
			<h3 className="my-3 text-3xl font-semibold font-display">Batizados</h3>
			<div className="space-y-1 leading-tight font-text">
				<p>O batizado é um momento especial e significativo na vida de uma criança e de sua família.</p>
				<p>Oferecemos uma ampla variedade de opções para as famílias escolherem, desde álbuns personalizados até sessões fotográficas pré-batizado ou pós-batizado.</p>
				
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			
			<h3 className="my-3 text-3xl font-semibold font-display">Bodas</h3>
			<div className="space-y-1 leading-tight font-text">
				<p>As bodas de casamento são um momento especial e emocionante na vida de um casal. É um dia em que eles renovam seus votos e celebram seu amor e compromisso um pelo outro.</p>
				<p> Estamos aqui para ajudá-los a lembrar este dia especial.</p>
				
			</div>
		</div>
		
	</div>
</section>

    );
}

export default OurServices;
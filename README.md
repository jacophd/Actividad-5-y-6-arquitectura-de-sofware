# Actividad-5-y-6-arquitectura-de-sofware
Propuesta de aplicativo con arquitectura y Aplicativo de arquitectura de software
Contexto
En mi lugar de trabajo, se realiza una prueba de realidad virtual para determinar la capacidad de trabajar en alturas, esta prueba busca determinar la posible intolerancia visual a labores en alturas VHISS por sus siglas en inglés (visual, height, intolerance, severity, scale), ocurre que una contraindicación para la prueba es padecer acrofobia o miedo a las alturas, porque puede desencadenar un ataque de pánico, teniendo esto en cuenta se busca crear una app sencilla que pueda aplicar una enfermera y que permita hacer un diagnóstico presuntivo (no confirmatorio), que sirva de tamizaje para derivar al psicólogo a los pacientes antes de realizar la prueba.
Los requisitos funcionales y no funcionales de la aplicación son los siguientes:
ID   	Tipo                            Descripción	                                                                              Prioridad
RF01	DSM IV	         La app, debe procesar los criterios DSM IV para el diagnóstico presuntivo.	                                 ALTA
RF02	TEST	     El software debe recordar la información a solicitar al paciente para establecer el criterio.	                   BAJA
RF03	LISTA A	   El software debe mostrar de forma sencilla los síntomas relacionados con la acrofobia	                           BAJA
RF04	VHISS	   El software debe mostrar la definición básica de la prueba en realidad virtual para que el usuario se contextualice BAJA
RNF01	Usabilidad	    Sencillo de usar, cualquier técnico o profesional de salud debe poder aplicarlo.	                           BAJA
RNF02	Multiplataforma	       Debe funcionar en varios dispositivos con conexión a internet.	                                       ALTA
Arquitectura
La arquitectura por usar escogida por el desarrollador es la arquitectura de modelo vista controlador.
ventajas de usar la arquitectura propuesta
La arquitectura modelo vista controlador es altamente escalable por lo cual continuamente se puede añadir vistas y mejorar la aplicación, adicionalmente es flexible, lo que permite adaptarse a varias dimensiones de pantalla y de sistemas operativos, ya que el front- end se puede diseñar en HTML, adicionalmente no consume recursos alarmantes de los dispositivos  en los que se usa y de forma didáctica para mi aprendizaje ya que es la primera vez que utilizo esta arquitectura y me aporta mucho.
Modelo de producto
Para realizar la maqueta del proyecto se utiliza el software Figma disponible en www.figma.com , por su facilidad de uso y por la ventaja de poder desarrollar un mockup en un simulador de dispositivo, en este caso se escoge una Tablet, por ser el dispositivo de tamaño intermedio.
Modelos del aplicativo
	El modelo consiste en una vista de una página web continua, en el encabezado presenta la información concerniente a la prueba VHISS, con un carrusel de imágenes de esta prueba, posteriormente cuenta con la lista A, y al final presenta un formulario para evaluar los criterios de diagnóstico presuntivo de acrofobia para aplicar.
Bibliografia
Blancarte, O. (15 de 03 de 2023). reactiveprogramming.io. Obtenido de Arquitectura Cliente-Servidor: https://reactiveprogramming.io/blog/es/estilos-arquitectonicos/cliente-servidor
enlace del mockup.
https://www.figma.com/proto/Zpbh40Ka13iY5UEHn0aGx3/CLASIFICACI%C3%93N-DSM-IV-PARA-ACROFOBIA?node-id=1-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2  

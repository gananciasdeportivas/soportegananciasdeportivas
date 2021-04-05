import React from 'react';
import exodus_btc from '../assets/exodus_btc.png';
import exodus_btc_receive from '../assets/exodus_btc_receive.png';

const Steps = () => {
    const register = () => {
        const url = 'https://cliente.gdenlinea.net/Luisjavier2021/unete/8772';
        window.open(url, '_blank');
    }

    const downloadExodus = () => {
        const url = 'https://www.exodus.com/download/';
        window.open(url, '_blank');
    }

    const openYoutubeChannel = () => {
        const url = 'https://www.youtube.com/channel/UCHx4ByOEpCPkWG-Yvl4mslQ';
        window.open(url, '_blank');
    }
    return ( 
        <div class="steps">
            <div>
                <h5>Paso 1: Registrarte en Ganancias Deportivas</h5>
                <p>Primeramente te deberás registrar dandole click a este botón: <button className="registerButton" onClick={register}>Registrarte</button> </p> 
                <p>Una vez terminado el registro podrás ingresar a este sitio:  <a href='https://cliente.gdenlinea.net/pages/login' target="_blank">https://cliente.gdenlinea.net/pages/login</a> e iniciar sesión con el nombre de usuario y la contraseña</p>
            </div>
            <di>
                <h5>Paso 2: Crear una billetera para criptomonedas</h5>
                <p>Ganancias deportivas realiza los depósitos por medio de la criptomoneda Bitcoin, para ello sera necesario tener una billetera para criptomonedas.</p> 
                <p>Existen muchas plataformas que permiten la creación de una billetera, pero para propositos de esta guía te voy a recomendar <a href="https://www.exodus.com/" target="_blank"> Exodus </a> por su intuitiva interfaz gráfica</p>
                <p>Para descargar Exodus puedes ingresar dándole click a este botón <button className="downloadExodus" onClick={downloadExodus}>Descargar Exodus</button> y descargar la aplicacion para computadora y/o celular.</p> 
                <p>Una vez descargada la aplicacion necesitar abrirla y darle en crear una nueva wallet o billetera, ingresar una contraseña segura, anotar las frases para recuperación y listo, ya tienes la wallet lista para enviar y recibir criptomonedas</p>
            </di>
            <di>
                <h5>Paso 2: Comprar centro de negocios y paquetes</h5>
                <p>Para empezar a invertir en ganancias deportivas necesitas comprar primero el centro de negocios, es por asi decirlo una matrícula con una validez de un año, este centro de negocios tiene un costo de €100</p> 
                <p>Una vez ya se tiene el centro de negocios, se te habilitará la opción para comprar alguno de los paquetes disponibles. Existen paquetes de €100, €500 y €1000, y se pueden comprar la cantidad de veces que se quiera.</p>
                <p>Cada compra que se realiza tiene un costo de comision de un 7%, por ejemplo: el centro de negocios cuesta realmente €107 y un paquete de €1000 te costará €1070</p>
                <p>Sin embargo, Ganancias Deportivas de estara pagando un 20% mensual de lo que inviertas, asi que en un mes ya habrás recuperado ese 7% de comisión, ademas de un 14% en ganancias</p>
                <p>Las compras dentro de Ganancias Deportivas también se realizan utilizando la criptomoneda Bitcoin, por lo tanto tendrás que comprar Bitcoin en alguna plataforma y utilizar ese Bitcoin para comprar el centro de negocios y los paquetes.</p>
                <p>Hay varias formas de comprar Bitcoin, puede ser en páginas como:  <a href='https://paybis.com/' target="_blank">Paybis</a>, <a href='https://www.coinbase.com/es/' target="_blank">Coinbase</a>, <a href='https://www.binance.com/es-LA' target="_blank">Binance</a>, <a href='https://paxful.com/es/buy-bitcoin' target="_blank">Paxful</a> y <a href='https://localbitcoins.com/' target="_blank">LocalBitcoins</a></p>
                <p>A continuación se muestra un video de cómo realizar la compra del centro de negocios y los paquetes en la plataforma: </p>
                <iframe width="1500" height="500" src="https://www.youtube.com/embed/ILrsqSDGdpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen="allowfullscreen"></iframe>
            </di>
            <di>
                <h5>Paso 3: Vincular la direccion de tu billetera con Ganancias Deportivas</h5>
                <p>Una vez realizados todos los pasos anterior, necesitarás vincular tu dirección de billetera con tu cuenta de Ganancias Deportivas para que recibas tus ganancias</p>
                <p>Necesitarás copiar la dirección de bitcoin de tu billetera, en Exodus para obtener la direción deberás darle click en el icono de Bitcoin (BTC) y luego en "Receive" o "Recibir", seguidamente te aparecerá tu dirección y la copias.</p>
                <img className="img-exodus-btc" src={exodus_btc}></img><img className="img-exodus-btc" src={exodus_btc_receive}></img>
                <p>Una vez que tengas tu dirección bitcoin de tu billetera, deberás ir a la plataforma de Ganancias Deportivas y darle click en "Registro de Usuario", luego click en "Asignar cartera de cobros", si no tienes el doble factor de autenticación vas a tener que</p> 
                <p>configurarlo primero, acontinuación te dejo un video que te ayuda a configurar el doble factor de autenticación: </p> 
                <iframe width="1500" height="500" src="https://www.youtube.com/embed/Bg8DhD3UU7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen="allowfullscreen"></iframe>
                <p>Seguidamente tendrás que ponerle un nombre a tu billetera, pegar la dirección de tu billetera que se copió previamente desde Exodus, poner en el campo 2FA el código que sale en Google Authenticator, y darle en el botón de actualizar cartera</p> 
                <p>Si tienes dudas de cómo realizar este paso a continuación se muestra un video de cómo vincular la dirección de tu billetera a Ganancias Deportivas</p>
                <iframe width="1500" height="500" src="https://www.youtube.com/embed/BDlrLNekZ_Q?start=38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </di>
            <di>
                <h5>Paso 4: Ganando dinero con los paquetes</h5>
                <p>Una vez que ya se haya comprado el centro de negocios y el paquete correspondiente, se empezará a obtener ganancias de un 20% mensual.</p>
                <p>En resumen, a los 5 meses ya habrás ganado lo invertido con las ganancias, y al sexto mes el sistema te permitirá retirar la inversión, lo que significa que en el sexto mes duplicarías tu inversión</p>
            </di>
            <di>
                <h5>Paso 5: Retiro de tus ganancias</h5>
                <p>Cada 2 semanas aproximadamente Ganancias Deportivas te habilita la opción de retirar tus ganancias generadas hasta el momento</p>
                <p>Para realizar un retiro deberás darle click en donde dice Retiro Disponible, ingresar la cantidad que se desea retirar, ingresar el código de doble autenticación y darle en el botón de Retirar</p>
                <p>Una vez realizado este proceso, Ganancias Deportivas te estará depositando en tu billetera de criptomonedas el monto ingresado en un tiempo de entre 1 a 15 días</p>
                <p>A continuación un video de cómo realizar el proceso de retiros:</p>
                <iframe width="1500" height="500" src="https://www.youtube.com/embed/Q-5EKTnxafw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen="allowfullscreen"></iframe>
            </di>
            <di>
                <h5>Contacto</h5>
                <p>Si tienes dudas puedes enviar un correo a soporte.ganancia.deportiva@gmail.com</p> 
                <p>También puedes ingresar al canal de youtube: <button className="youtubeChannel" onClick={openYoutubeChannel}>Canal de Youtube</button> </p> 
            </di>
        </div> 
     );
}
 
export default Steps;
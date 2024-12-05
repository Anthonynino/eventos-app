import Header from "../components/Navbar/Header";
import Footer from "../components/Footer";



const WelcomeApp = () => {
    return ( 
        <div className="bg-[#f2f2f2]">
        <Header />
      <div className="flex flex-col bg-[#f2f2f2] items-center justify-between min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
          <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg md:pt-16 mx-auto ">
            <div className="mb-14 px-10 md:px-0">
                <div className="md:pl-[37%] text-[#f7628c] text-end ">
                Obtén una visión panorámica de cada acción en la organización de tu evento. Gestiona tu planificación y garantiza que tu boda, fiesta, ceremonia, 
                celebración o actividad corporativa sea un éxito.
                </div>
                <div className="flex justify-center items-center">
                    <img src="https://www.bodasdehoy.com/bannerApp.webp" alt=""  width={600}/>
                </div>
                <div className="grid md:grid-cols-2 mt-10 space-y-8 md:space-y-0 ">
                    <div className="flex items-start justify-center">
                        <img src="https://www.bodasdehoy.com/EventoOrganizador.png" alt=""  width={350}/>
                    </div>
                    <div className="space-y-4 flex flex-col justify-center items-center">
                        <p className="text-[#f7628c]">
                        Esta poderosa herramienta te ayuda a hacer el seguimiento detallado del avance de tu celebración de forma automática
                         y con la precisión propia de un reloj suizo.
                        </p>
                        <p className="text-[#f7628c] font-semibold">
                        Coordina desde tu móvil todas las acciones para un evento memorable.
                        </p>
                        <button className=" text-[#f7628c] bg-yellow-300 py-[8px] px-[22px] shadow-md">CREA GRATIS TU EVENTO</button>
                    </div>
                </div>
            </div>
          </div>
          
      </div>
      <div className="relative">
              <div className="bg-white md:pb-20">
                  <div className="py-20 px-10 md:px-0 xl:max-w-screen-lg 2xl:max-w-screen-lg mx-auto flex flex-col justify-center items-center space-y-10">
                      <div className="text-[#f7628c] md:text-2xl text-xl text-center font-semibold md:w-[70%] ">
                      Logra un evento perfecto con la herramienta que integra cada faceta de la organización
                      </div>
                      <div className="space-y-4 text-gray-500 ">
                          <p>
                          Hacer que una celebración brille depende de la acción coordinada de diversos factores.
                           Sin tu coordinación precisa son más amplias las posibilidades de error
                          </p>
                          <p className="font-semibold text-gray-400">
                          Logra un evento exitoso evitando:
                          </p>
                      </div>
                      <div className="hidden md:block">
                            <div className="grid grid-cols-3 justify-content-center items-center">
                                <div className="flex justify-center items-center gap-5">
                                    <img src="https://www.bodasdehoy.com/comunicacion.png" alt="" />
                                    <span className="text-gray-400">
                                        Fallos en la comunicacion
                                    </span>
                                </div>
                                <div className="flex justify-center items-center gap-5">
                                    <img src="https://www.bodasdehoy.com/tiempo.png" alt="" />
                                    <span className="text-gray-400">
                                        Falta de tiempo
                                    </span>
                                </div>
                                <div className="flex justify-center items-center gap-5">
                                    <img src="https://www.bodasdehoy.com/presupuesto.png" alt="" />
                                    <span className="text-gray-400">
                                    Desaciertos en el presupuesto
                                    </span>
                                </div>
                            </div>
                      </div>
                      <div className="text-[#f7628c] text-center font-semibold md:w-[75%] ">
                      Está claro que eres la mejor en lo que haces, pero, ¿qué sucede si tienes
                       la posibilidad de obtener los mismos resultados con procesos menos estresantes?
                      </div>
                  </div>
              </div>
              <div className="hidden md:block absolute md:top-[25%] md:inset-x-1/4 ">
                  <img src="https://www.bodasdehoy.com/imgPrincipal.png" alt=""  width={900}/>
              </div>
              <div className="sm:max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg md:pt-60 mx-auto ">
                  <div className="flex justify-center my-10 md:mt-0 px-10 md:px-0 ">
                      <p className="text-gray-500 md:w-[65%] text-center text-2xl md:text-3xl">
                      Navega dentro de tu <span className="text-[#f7628c]"> EventosOrganizador </span>
                      y descubre el nuevo significado de llevar la batuta en la planeación de eventos
                      </p>
                  </div>
                  <div className="md:my-8 ">
                        <div className="space-y-4 px-10 md:px-20 md:block hidden">
                            <div className="flex flex-col md:flex-row bg-white w-[100%] rounded-3xl shadow-lg">
                                <div className="md:w-[30%] text-white text-center text-sm bg-[#75E8BE] flex flex-col items-center justify-center p-5 rounded-3xl gap-3">
                                    <img src="https://www.bodasdehoy.com/check.png" alt="" width={70} />
                                    <span>
                                    Destaca cada acción en tu planificación por tiempo o importancia
                                    </span>
                                </div>
                                <div className="md:w-[70%] py-5 px-10 text-sm flex items-center text-gray-600">
                                    <p>
                                    Registra cada momento dentro de tu planificación de forma visible.
                                    <br/>
                                    <br/>
                                    Establece prioridades y acciones en rangos de tiempo de forma gráfica.
                                    <br />
                                    <br />
                                    Tienes la facilidad de recibir las actualizaciones una vez ejecutadas en un panel de manejo intuitivo. 
                                    Esto te permite hacer un seguimiento de la ejecución de las acciones en tiempo real.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row bg-white w-[100%] rounded-3xl shadow-lg">
                                <div className="md:w-[30%] text-white text-center text-sm bg-[#75E8BE] flex flex-col items-center justify-center p-5 rounded-3xl gap-3">
                                    <img src="https://www.bodasdehoy.com/calculadora.png" alt="" />
                                    <span>
                                    Crea tu presupuesto sin complicaciones y optimiza su ejecución
                                    </span>
                                </div>
                                <div className="md:w-[70%] py-5 px-10 text-sm flex items-center text-gray-600">
                                    <p>
                                    No se trata de solo establecer un presupuesto. Es tener un registro minucioso de su ejecución en cada fase de la organización del tu evento.
                                    <br />
                                    <br />
                                    Se trata de tener una herramienta que te facilite la gestión de tu presupuesto para cada evento.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row bg-white w-[100%] rounded-3xl shadow-lg">
                                <div className="md:w-[30%] text-white text-center text-sm bg-[#75E8BE] flex flex-col items-center justify-center p-5 rounded-3xl gap-3">
                                    <img src="https://www.bodasdehoy.com/burbujaTexto.png" alt="" />
                                    <span>
                                    Crea tu presupuesto sin complicaciones y optimiza su ejecución
                                    </span>
                                </div>
                                <div className="md:w-[70%] py-5 px-10 text-sm flex items-center text-gray-600">
                                    <p>
                                    No se trata de solo establecer un presupuesto. Es tener un registro minucioso de su ejecución en cada fase de la organización del tu evento.
                                    <br />
                                    <br />
                                    Se trata de tener una herramienta que te facilite la gestión de tu presupuesto para cada evento.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="hidden md:block">
                                <div className="grid md:grid-cols-2 gap-4 my-20 px-5 md:px-0 ">
                                    <div className="text-3xl md:text-4xl flex items-center justify-center text-center md:text-start mb-5 md:mb-0">
                                        <p className="text-gray-500">
                                            el <span className="text-[#f7628c]">EventosOrganizador</span> es para ti si: <br />
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="https://www.bodasdehoy.com/noviaApp.png" alt="" className="md:w-36 w-24 h-24 md:h-full"/>
                                        <div className="space-y-2 text-sm flex flex-col items-center justify-center ">
                                            <p className="font-bold text-[#f7628c]">
                                            Estás próxima a casarte y deseas estar enterada de cada paso en el avance de la planificación. 
                                            </p>
                                            <p className="text-gray-500">
                                            El EventosOrganizador te permite estar en línea con tu wedding planner y con todas las personas que en la organización de tu boda, así como la lista de invitados.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="https://www.bodasdehoy.com/calendarioApp.png" alt="" className="md:w-36 w-24 h-24 md:h-full" />
                                        <div className="space-y-2 text-sm flex flex-col items-center justify-center ">
                                            <p className="font-bold text-[#f7628c]">
                                            Eres una apasionada de la organización de eventos. 
                                            </p>
                                            <p className="text-gray-500">
                                            ¿Amas hacerte cargo de todos los eventos de tu familia e incluso en tu trabajo? Con el EventosOrganizador puedes llevar la agenda de tus eventos familiares o profesionales.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="https://www.bodasdehoy.com/hojaApp.png" alt="" className="md:w-36 w-24 h-24 md:h-full" />
                                        <div className="space-y-2 text-sm flex flex-col items-center justify-center ">
                                            <p className="font-bold text-[#f7628c]">
                                            Eres una organizadora de eventos corporativos o wedding planer profesional.
                                            </p>
                                            <p className="text-gray-500">
                                            No importa el tamaño de la celebración o cuantos eventos necesites crear en simultaneo. Crea un panel por evento desde donde puedes coordinar
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-5 mb-10 px-10">
                                <p className="text-[#f7628c] text-xl font-semibold">
                                    Inicia tu prueba gratis Ahora
                               </p>
                               <button className=" text-[#f7628c] bg-[#FBff4e] py-[8px] px-[22px] shadow-md">CREAR EVENTO</button>                                
                            </div>
                        </div>
                  </div>
              </div>
          </div>
          <div className="bg-white w-full py-20 ">
                <div className="xl:max-w-screen-lg 2xl:max-w-screen-lg mx-auto flex flex-col justify-center items-center space-y-10 px-10 md:px-0">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="flex justify-end items-center text-end ">
                            <p className="md:w-[90%] text-4xl text-gray-500 ">
                            ¿Cómo integras el <span className="text-[#f7628c]">EventosOrganizador</span>  en la planificación de tu evento?
                            </p>
                        </div>
                        <p className="text-md px-5 md:px-0 text-gray-600">
                        Al igual que el mecanismo de un reloj, un evento exige que todo funcione en el momento correcto. Cada pieza debe entrar en acción en solo cuando corresponde.
                        <br />
                        <br />
                        El EventoOrganizador es la herramienta que integra en un solo panel todas las funciones que necesitas para llevar el control y seguimiento de cada fase el la
                        organización de tu evento. Antes, durante y después de su celebración.
                        <br />
                        <br />
                        Este es el centro de todas las operaciones, en tienes una vista panorámica de cada aspecto de la organización de tu evento.
                        </p>
                    </div>
                    <div className="grid md:w-[85%] md:grid-cols-2 gap-10 ">
                        <div>
                            <p className="text-[#f7628c] text-lg">
                                Invitados
                            </p>
                            <p className="text-gray-600 md:w-[85%]*">
                            Crea la lista, envía las invitaciones, confirma asistencia, distribuye en las mesas… Todos los detalles desde una sola herramienta.
                            </p>
                        </div>
                        <div>
                            <p className="text-[#f7628c] text-lg">
                                Las mesas
                            </p>
                            <p className="text-gray-600 md:w-[85%]*">
                            Facilita el acceso de tus invitados a tus regalos favoritos. Comparte la lista de regalos conectada con la tienda de Amazon de tu preferencia.

                            </p>
                        </div>
                        <div>
                            <p className="text-[#f7628c] text-lg">
                                Lista de regalos
                            </p>
                            <p className="text-gray-600 md:w-[85%]*">
                            Facilita el acceso de tus invitados a tus regalos favoritos. Comparte la lista de regalos conectada con la tienda de Amazon de tu preferencia.
                            </p>
                        </div>
                        <div>
                            <p className="text-[#f7628c] text-lg">
                                Manejo amigable de tu presupuesto
                            </p>
                            <p className="text-gray-600 md:w-[85%]*">
                            No necesitas ser contable o especialista para que lleves el control de las cotizaciones de productos y servicios, facturas pagadas y el seguimiento de presupuesto.
                            </p>
                        </div>
                        <div>
                            <p className="text-[#f7628c] text-lg">
                                Invitaciones
                            </p>
                            <p className="text-gray-600 md:w-[85%]*">
                            Diseña y envía las invitaciones a tu evento desde tu herramienta. Además, puedes automatizar el seguimiento de entrega y confirmación de asistencia de cada invitado.
                            </p>
                        </div>
                        <div>
                            <p className="text-[#f7628c] text-lg">
                                Chat de invitados
                            </p>
                            <p className="text-gray-600 md:w-[85%]*">
                            Facilita la interacción entre los invitados a tu celebración. Desde aquí es posible crear sorpresas o eventos asociados al tuyo.
                            </p>
                        </div>
                        <div>
                            <p className="text-[#f7628c] text-lg">
                                Web personalizadas
                            </p>
                            <p className="text-gray-600 md:w-[85%]*">
                            Crea aquí la web de tu evento. Comparte aquí tu registro del paso a paso de tu gran día, e incluso puedes generar tu álbum y compartir todos los momentos especiales en esta.
                            </p>
                        </div>
                        <div>
                            <p className="text-[#f7628c] text-lg">
                                Marketplace
                            </p>
                            <p className="text-gray-600 md:w-[85%]*">
                            Encuentra productos y servicios para hacer de tu evento el más destacado.
                            </p>
                        </div>
                        
                    </div>

                </div>
          </div>    
          <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto ">
                <div className="flex flex-col justify-center items-center gap-5 md:py-20 py-10 px-10 md:px-0">
                    <p className="text-[#f7628c] text-center text-xl md:w-[57%] font-semibold ">
                    Facilita la gestión de la organización de tu evento desde una sola herramienta
                    </p>
                    <p className="text-gray-600 md:w-[80%]">
                    Hasta ahora existen infinidad de apps y herramientas en el mercado para la planificación de eventos. Cada una de ellas especializadas en distintos aspectos de la organización.
                    <br />
                    <br />
                    Algunas de ellas poseen versiones gratuitas y de paga. Otras solo versiones premium.
                    <br />
                    <br />
                    Pero ¿Por qué tener diversas herramientas para organizar tus eventos si puedes concentrar todas tus acciones en una solo sitio?
                    <span className="text-[#f7628c]">
                    No pagues de más por muchas aplicaciones, cuando puedes hacer todo lo que necesitas GRATIS.
                    </span>
                    <br />
                    <br />
                    EventosOrganizador te facilita todo el proceso de organización y planificación en una sola herramienta, además puedes comenzar a usarla gratis.
                    <br />
                    <br /> 
                    Crea cuantos eventos desees. Observa y dirige como encaja cada engranaje en su lugar desde su panel.
                    <br />
                    <br />
                    Llevar el control de todas las tareas pendientes dentro del plazo de tiempo.
                    </p>
                </div>
                
          </div>
          <div className="bg-white w-full py-20 ">
                    <div className="grid md:grid-cols-2 gap-10 xl:max-w-screen-lg 2xl:max-w-screen-lg mx-auto px-10 md:px-0 ">
                        <div className="space-y-5 flex flex-col justify-center md:items-center justify-items-center ">
                            <img src="https://www.bodasdehoy.com/easy.png" alt="" />
                            <p className="text-gray-500 text-center md:px-0 md:pl-20 "><span className="text-[#f7628c]">Ahora es más fácil</span> coordinar los detalles de tu evento como un mecanismo perfecto
                            </p>
                        </div>
                        <div className="space-y-10 ">
                            <p className="text-gray-500">
                            Disfruta de la comodidad de hacer la planificación, ejecución y seguimiento de tu celebración o evento desde una sola herramienta.
                            <br />
                            <br />
                            Todas las automatizaciones que coordinan por ti el seguimiento en tiempo real la organización de tu evento.
                            <span className="text-[#f7628c] font-semibold">Accede GRATIS</span>
                            a está poderosa herramienta y amplia la posibilidad de éxito de tu evento con tu EventosOrganizador.
                            <br />
                            <br />
                            Solo necesitas registrarte con tu correo electrónico y crea tu primer evento.
                            <br />
                            <br />
                            No pagues más por muchas aplicaciones o software de planificación, cuando puedes hacer toda la magia desde una misma herramienta.
                            
                            </p>
                            <button className=" text-[#f7628c] bg-[#FBFF4E] py-[8px] px-[22px] shadow-md">CREAR EVENTO</button>
                        </div>
                    </div>
                </div>
      <Footer />
        </div>
     );
}
 
export default WelcomeApp;
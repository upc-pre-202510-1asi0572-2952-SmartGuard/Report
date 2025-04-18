# <center>COURSE PROJECT</center>

<p align="center">
    <strong>Universidad Peruana de Ciencias Aplicadas</strong><br>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/UPC_logo_transparente.png"></img><br>
    <strong>Ingeniería de Software</strong><br>
    <strong>2025-10<br></strong>
    <strong>1ASI0572 Desarrollo de Soluciones IOT - 2952</strong><br>
    <strong>Profesor: Marco Antonio Leon Baca</strong><br>
    <br><strong>Informe del Trabajo Final<br></strong>
    <strong>Grupo 3</strong>

</p>

</p>

<p align="center">
    <strong>Startup: SmartGuard</strong><br>
    <strong>Producto: FaceLoock </strong>
</p>

<div style="text-align:center;">
    <h3>Team Members:</h3>
    <table align="center">
        <tr>
            <th style="text-align:center;">Member</th>
            <th style="text-align:center;">Code</th>
        </tr>
        <tr>
            <td>Fernando Aquino Iman</td>
            <td>U20171E997</td>
        </tr>
        <tr>
            <td>Pérez García David Alexander</td>
            <td>U202222942</td>
        </tr>
        <tr>
            <td>Gonzales Gomez, Antonella Frida</td>
            <td>U20211c403</td>
        </tr>
        <tr>
            <td>Ramos Najar, Tony Alexander</td>
            <td>u20211a153</td>
        </tr>
        <tr>
            <td>Zárate Gamarra, Luis Alejandro</td>
            <td>u20181h198</td>
        </tr>
    </table>
</div>

<p align="center">
    <strong>Marzo, 2025</strong>
</p>
<br>

<h1 align="center">Registro de versiones del Informe</h1>
</br>
<table>
    <thead>
        <tr>
            <th>Versión</th>
            <th>Fecha</th>
            <th>Autor</th>
            <th>Descripción de modificaciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>TB1</th>
            <td>20/04/2025</td>
            <td>
                <ul>
                    <li>Fernando Aquino Iman</li>
                    <li>Pérez García David Alexander</li>
                    <li>Gonzales Gomez, Antonella Frida</li>
                    <li>Ramos Najar, Tony Alexander</li>
                    <li>Zárate Gamarra, Luis Alejandro</li>
                </ul>
            </td>
            <td>            
                <ul>
                    <li>Capítulo I: Introducción</li>
                    <li>Capítulo II: Requirements Elicitation & Analysis</li>
                    <li>Capítulo III: Requirements Specification</li>
                    <li>Capítulo IV: Solution Software Design</li>
                    <li>Avance de Conclusiones, Bibliografía y Anexos</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>TP</th>
            <td></td>
            <td>
                <ul>
                </ul>
            </td>
            <td>            
                <ul>
                </ul>
            </td>
        </tr>
        <tr>
            <th>TB2</th>
            <td></td>
            <td>
                <ul>
                </ul>
            </td>
            <td>            
                <ul>
                </ul>
            </td>
        </tr>
        <tr>
            <th>TF</th>
            <td></td>
            <td>
                <ul>
                </ul>
            </td>
            <td>            
                <ul>
                </ul>
            </td>
        </tr>
    </tbody>
</table>


# Project Report Collaboration Insights

TB1:

TP:

TB2:

TF:

# Contenido
[Student Outcome](#student-outcome)

[Capítulo I: Introducción](#capítulo-i-introducción)
- [1.1. Startup Profile](#11-startup-profile)
  - [1.1.1. Descripción de la Startup](#111-descripción-de-la-startup)
  - [1.1.2. Perfiles de integrantes del equipo](#112-perfiles-de-integrantes-del-equipo)
- [1.2. Solution Profile](#12-solution-profile)
  - [1.2.1 Antecedentes y problemática](#121-antecedentes-y-problemática)
  - [1.2.2 Lean UX Process](#122-lean-ux-process)
    - [1.2.2.1. Lean UX Problem Statements](#1221-lean-ux-problem-statements)
    - [1.2.2.2. Lean UX Assumptions](#1222-lean-ux-assumptions)
    - [1.2.2.3. Lean UX Hypothesis Statements](#1223-lean-ux-hypothesis-statements)
    - [1.2.2.4. Lean UX Canvas](#1224-lean-ux-canvas)
- [1.3. Segmentos objetivo](#13-segmentos-objetivo)

[Capítulo II: Requirements Elicitation & Analysis](#capítulo-ii-requirements-elicitation--analysis)
- [2.1. Competidores](#21-competidores)
  - [2.1.1. Análisis competitivo](#211-análisis-competitivo)
  - [2.1.2. Estrategias y tácticas frente a competidores](#212-estrategias-y-tácticas-frente-a-competidores)
- [2.2. Entrevistas](#22-entrevistas)
  - [2.2.1. Diseño de entrevistas](#221-diseño-de-entrevistas)
  - [2.2.2. Registro de entrevistas](#222-registro-de-entrevistas)
  - [2.2.3. Análisis de entrevistas](#223-análisis-de-entrevistas)
- [2.3. Needfinding](#23-needfinding)
  - [2.3.1. User Personas](#231-user-personas)
  - [2.3.2. User Task Matrix](#232-user-task-matrix)
  - [2.3.3. User Journey Mapping](#233-user-journey-mapping)
  - [2.3.4. Empathy Mapping](#234-empathy-mapping)
  - [2.3.5. As-is Scenario Mapping](#235-as-is-scenario-mapping)
- [2.4. Ubiquitous Language](#24-ubiquitous-language)

[Capítulo III: Requirements Specification](#capítulo-iii-requirements-specification)
- [3.1. To-Be Scenario Mapping](#31-to-be-scenario-mapping)
- [3.2. User Stories](#32-user-stories)
- [3.3. Impact Mapping](#33-impact-mapping)
- [3.4. Product Backlog](#34-product-backlog)

[Capítulo IV: Solution Software Design](#capítulo-iv-solution-software-design)
- [4.1. Strategic-Level Domain-Driven Design](#41-strategic-level-domain-driven-design)
  - [4.1.1. EventStorming](#411-eventstorming)
    - [4.1.1.1. Candidate Context Discovery](#4111-candidate-context-discovery)
    - [4.1.1.2. Domain Message Flows Modeling](#4112-domain-message-flows-modeling)
    - [4.1.1.3. Bounded Context Canvases](#4113-bounded-context-canvases)
  - [4.1.2. Context Mapping](#412-context-mapping)
  - [4.1.3. Software Architecture](#413-software-architecture)
    - [4.1.3.1. Software Architecture System Landscape Diagram](#4131-software-architecture-system-landscape-diagram)
    - [4.1.3.2. Software Architecture Context Level Diagrams](#4132-software-architecture-context-level-diagrams)
    - [4.1.3.3. Software Architecture Container Level Diagrams](#4133-software-architecture-container-level-diagrams)
    - [4.1.3.4. Software Architecture Deployment Diagrams](#4134-software-architecture-deployment-diagrams)
- [4.2. Tactical-Level Domain-Driven Design](#42-tactical-level-domain-driven-design)
  - [4.2.1. Bounded Context: <Bounded Context Name>](#421-bounded-context-bounded-context-name)
    - [4.2.1.1. Domain Layer](#4211-domain-layer)
    - [4.2.1.2. Interface Layer](#4212-interface-layer)
    - [4.2.1.3. Application Layer](#4213-application-layer)
    - [4.2.1.4. Infrastructure Layer](#4214-infrastructure-layer)
    - [4.2.1.5. Bounded Context Software Architecture Component Level Diagrams](#4215-bounded-context-software-architecture-component-level-diagrams)
    - [4.2.1.6. Bounded Context Software Architecture Code Level Diagrams](#4216-bounded-context-software-architecture-code-level-diagrams)
      - [4.2.1.6.1 Bounded Context Domain Layer Class Diagrams](#42161-bounded-context-domain-layer-class-diagrams)
      - [4.2.1.6.2 Bounded Context Database Design Diagram](#42162-bounded-context-database-design-diagram)

[Capítulo V: Solution UI/UX Design](#capítulo-v-solution-uiux-design)  
- [5.1. Style Guidelines](#51-style-guidelines)  
  - [5.1.1. General Style Guidelines](#511-general-style-guidelines)  
  - [5.1.2. Web, Mobile and IoT Style Guidelines](#512-web-mobile-and-iot-style-guidelines)  
- [5.2. Information Architecture](#52-information-architecture)  
  - [5.2.1. Organization Systems](#521-organization-systems)  
  - [5.2.2. Labeling Systems](#522-labeling-systems)  
  - [5.2.3. SEO Tags and Meta Tags](#523-seo-tags-and-meta-tags)  
  - [5.2.4. Searching Systems](#524-searching-systems)  
  - [5.2.5. Navigation Systems](#525-navigation-systems)  
- [5.3. Landing Page UI Design](#53-landing-page-ui-design)  
  - [5.3.1. Landing Page Wireframe](#531-landing-page-wireframe)  
  - [5.3.2. Landing Page Mock-up](#532-landing-page-mock-up)  
- [5.4. Applications UX/UI Design](#54-applications-uxui-design)  
  - [5.4.1. Applications Wireframes](#541-applications-wireframes)  
  - [5.4.2. Applications Wireflow Diagrams](#542-applications-wireflow-diagrams)  
  - [5.4.2. Applications Mock-ups](#542-applications-mock-ups)  
  - [5.4.3. Applications User Flow Diagrams](#543-applications-user-flow-diagrams)  
- [5.5. Applications Prototyping](#55-applications-prototyping)

[Capítulo VI: Product Implementation, Validation & Deployment](#capítulo-vi-product-implementation-validation--deployment)  
- [6.1. Software Configuration Management](#61-software-configuration-management)  
  - [6.1.1. Software Development Environment Configuration](#611-software-development-environment-configuration)  
  - [6.1.2. Source Code Management](#612-source-code-management)  
  - [6.1.3. Source Code Style Guide & Conventions](#613-source-code-style-guide--conventions)  
  - [6.1.4. Software Deployment Configuration](#614-software-deployment-configuration)  
- [6.2. Landing Page, Services & Applications Implementation](#62-landing-page-services--applications-implementation)  
  - [6.2.X. Sprint n](#62x-sprint-n)  
    - [6.2.X.1. Sprint Planning n](#62x1-sprint-planning-n)  
    - [6.2.X.2.](#62x2)  
    - [6.2.X.3.](#62x3)  
    - [6.2.X.4.](#62x4)  
    - [6.2.X.5.](#62x5)  
    - [6.2.X.6.](#62x6)  
    - [6.2.X.7.](#62x7)  
    - [6.2.X.8.](#62x8)  
    - [6.2.X.9.](#62x9)  
- [6.3. Validation Interviews](#63-validation-interviews)  
  - [6.3.1. Diseño de Entrevistas](#631-diseño-de-entrevistas)  
  - [6.3.2. Registro de Entrevistas](#632-registro-de-entrevistas)  
  - [6.3.3. Evaluaciones según heurísticas](#633-evaluaciones-según-heurísticas)  
- [6.4. Video About-the-Product](#64-video-about-the-product)

[Conclusiones](#conclusiones)
- [Conclusiones y recomendaciones](#conclusiones-y-recomendaciones)
- [Video About-the-Team](#video-about-the-team)

[Bibliografía](#bibliografía)

[Anexos](#anexos)

# Student Outcome
ABET – EAC - Student Outcome 5

Criterio: La capacidad de funcionar efectivamente en un equipo cuyos miembros juntos proporcionan liderazgo, crean un entorno de colaboración e inclusivo, establecen objetivos, planifican tareas y cumplen objetivos

<table>
  <tr>
    <td><b>Criterio específico</b></td>
    <td><b>Acciones realizadas</b></td>
    <td><b>Conclusiones</b></td>
  </tr>
  <tbody>
    <tr>
      <td><b>Trabaja en equipo para proporcionar liderazgo en forma conjunta.</b></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><b>Crea un entorno colaborativo e inclusivo, establece metas, planifica tareas y cumple objetivos.</b></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>


# Capítulo I: Introducción
## 1.1. Startup Profile
A continuación, procederemos a informar sobre a lo que se dedica nuestra startup “SmartGuard”, así como la presentación del equipo de desarrollo del producto, software presentado anteriormente, “FaceLoock”.
### 1.1.1. Descripción de la Startup
<p>
    <strong>SmartGuard</strong> es una startup tecnológica orientada a desarrollar soluciones de seguridad residencial inteligentes.
    Nuestra misión es transformar la forma en que las personas protegen sus hogares mediante el uso de tecnologías avanzadas, confiables y fáciles de usar.
    Apostamos por la innovación y la comodidad como ejes principales en el desarrollo de nuestros productos.
  </p>

  <p>
    El primer producto de SmartGuard es <strong>"FaceLoock"</strong>, un sistema de reconocimiento facial para el acceso a viviendas,
    que busca reemplazar el uso de llaves tradicionales por una solución segura y sin contacto físico.
    FaceLoock se enfoca en usuarios que desean modernizar la seguridad de su hogar mediante tecnología biométrica.
  </p>

  <h4><strong>Misión</strong></h4>
  <p>
    Transformar la forma en que las personas protegen sus hogares mediante el uso de tecnologías avanzadas, confiables y fáciles de usar.
  </p>

  <h4><strong>Visión</strong></h4>
  <p>
    Ser líderes en soluciones de seguridad residencial inteligente en América Latina,
    ofreciendo productos innovadores que mejoren la calidad de vida de nuestros usuarios.
  </p>

### 1.1.2. Perfiles de integrantes del equipo

<table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th>Perfil</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Mi nombre es Tony Ramos, estoy cursando el 9no ciclo de la carrera de Ingeniería de Software. Me considero hábil en el ámbito de la programación en los lenguajes, Python, Javascript, y últimamente estoy aprendiendo Angular. Con respeto a mi, me considero una persona responsable, con ganas de aprender y a superarme a mi mismo.</td>
    </tr>
    <tr>
      <td></td>
      <td>Mi nombre es Antonella, actualmente estoy cursando el 9no ciclo de la carrera de ingeniería de software. Tengo conocimientos de distintos lenguajes de programación como Java, Node.js, C#, y diferentes frameworks. Me gusta trabajar en equipo responsablemente. :,’3</td>
    </tr>
    <tr>
      <td></td>
      <td>Mi nombre es Fernando, actualmente estoy cursando el 8vo ciclo de la carrera de ingeniería de software. Tengo conocimiento desarrollando plataformas web para la gestión empresarial, me encanta la innovación y el aprendizaje constante. Cada desafío es una oportunidad de avanzar y desarrollarme profesionalmente.</td>
    </tr>
    <tr>
      <td></td>
      <td>Mi nombre es Alejandro, actualmente curso el 7mo ciclo de la carrera de Ingeniería de Software. Tengo experiencia en programación con lenguajes como Python, JavaScript y Java, y he trabajado con frameworks como React y tecnologías como .NET. Me considero una persona responsable, proactiva y con un fuerte compromiso por seguir aprendiendo y superándome constantemente en el ámbito profesional y personal.</td>
    </tr>
  </tbody>
</table>


## 1.2. Solution Profile
### 1.2.1 Antecedentes y problemática
<div>
<h3>Antecedente</h3>
  <p>
    En la actualidad, el uso de llaves físicas continúa siendo el método más común para acceder a viviendas. 
    Sin embargo, este sistema presenta diversas vulnerabilidades: extravío de llaves, duplicación no autorizada, robos o situaciones de emergencia 
    donde el acceso rápido se ve limitado. Estas condiciones generan un entorno propenso a riesgos y afectan la percepción de seguridad de los usuarios 
    en sus propios hogares.
  </p>

  <h3>Problemática – Enfoque con las 5W + 2H</h3>
  <ul>
    <li><strong>What?</strong> Las personas enfrentan problemas de seguridad y practicidad debido a la dependencia de llaves físicas para el ingreso a sus hogares.</li>
    <li><strong>Why?</strong> Porque las llaves pueden perderse, duplicarse sin permiso o ser robadas, generando inseguridad. Además, su uso requiere contacto físico, lo cual puede ser incómodo o riesgoso en ciertas circunstancias.</li>
    <li><strong>Who?</strong> A propietarios de viviendas, familias y personas que buscan mejorar la seguridad y accesibilidad en su entorno residencial.</li>
    <li><strong>When?</strong> De manera cotidiana, especialmente en situaciones imprevistas como olvidos, emergencias médicas, o pérdida de llaves.</li>
    <li><strong>Where?</strong> En zonas residenciales urbanas y suburbanas donde aún se emplean métodos de acceso tradicionales.</li>
    <li><strong>How?</strong> A través de experiencias negativas como bloqueos de acceso, necesidad de copias físicas adicionales, o temor a intrusiones por pérdida o robo de llaves.</li>
    <li><strong>How Much?</strong> El impacto varía, pero puede traducirse en costos económicos (cambio de cerraduras), pérdida de tiempo, estrés y una constante sensación de vulnerabilidad.</li>
  </ul>
</div>

### 1.2.2 Antecedentes y problemática
#### 1.2.2.1 Lean UX Hypothesis Statements

<div>
  <article>
    <h3>Propietarios de viviendas</h3>
    <p>
      Las personas que poseen una vivienda desean garantizar la seguridad de su hogar, pero muchas veces confían únicamente en llaves físicas 
      que pueden perderse, ser duplicadas sin consentimiento o forzadas. Además, no siempre se tiene control sobre quién ha ingresado o en qué momento.
    </p>
    <p><strong>¿Cómo pueden los propietarios acceder a sus hogares y gestionar el acceso de forma segura, moderna y sin depender de llaves físicas?</strong></p>
  </article>

  <article>
    <h3>Adultos mayores o personas con movilidad reducida</h3>
    <p>
      Este grupo enfrenta dificultades al manipular llaves físicas, lo cual puede limitar su autonomía o poner en riesgo su seguridad en situaciones urgentes.
    </p>
    <p><strong>¿Cómo pueden acceder fácilmente a sus viviendas sin depender del uso físico de llaves o ayuda de terceros?</strong></p>
  </article>
</div>

#### 1.2.2.2  Lean UX Assumptions
<section id="business-assumptions">
  <h4>Business Assumptions</h4>
  <ul>
    <li>Creemos que nuestros clientes necesitan una solución moderna, segura y sin contacto físico para acceder a sus hogares.</li>
    <li>Estas necesidades pueden resolverse mediante un sistema de reconocimiento facial que permita a los usuarios entrar a su vivienda sin necesidad de llaves tradicionales ni tarjetas.</li>
    <li>Nuestros clientes iniciales son propietarios de viviendas tecnológicas, personas interesadas en domótica, y usuarios preocupados por mejorar los niveles de seguridad de sus hogares.</li>
    <li>El valor número 1 que un cliente busca en nuestros servicios es la seguridad sin fricciones, es decir, poder ingresar a su hogar de forma segura, rápida y sin complicaciones.</li>
    <li>El cliente también puede obtener estos servicios adicionales:
      <ul>
        <li>Control de acceso mediante aplicación móvil</li>
        <li>Historial de accesos por usuario</li>
        <li>Integración con sistemas de domótica</li>
        <li>Notificaciones en tiempo real ante intentos fallidos de reconocimiento</li>
      </ul>
    </li>
    <li>Vamos a adquirir la mayoría de nuestros clientes a través de estrategias de marketing digital en redes sociales como Instagram, YouTube y LinkedIn, así como demostraciones en ferias de tecnología y alianzas con inmobiliarias o empresas de domótica.</li>
    <li>Haremos dinero mediante la venta del sistema FaceLoock y un modelo de suscripción mensual para funciones premium (notificaciones avanzadas, respaldo en la nube, control remoto, integración con múltiples dispositivos).</li>
    <li>La competencia principal en el mercado nacional es limitada, ya que la mayoría de sistemas similares son importados y no están optimizados para el contexto local. A nivel internacional, existen sistemas de reconocimiento facial para acceso, pero sus precios son elevados y no están pensados para residencias en América Latina.</li>
    <li>Nuestra ventaja competitiva radica en el precio accesible, la facilidad de instalación, la personalización local y las integraciones con otros sistemas del hogar.</li>
    <li>Nuestro mayor riesgo es la desconfianza en la precisión y seguridad del reconocimiento facial. Resolveremos esto mediante campañas de sensibilización, pruebas públicas de eficacia, garantías de satisfacción, y auditorías de seguridad que validen la calidad del sistema.</li>
  </ul>
</section>

<section id="business-outcomes">
  <h4>Business Outcomes</h4>
  <ul>
    <li>Incremento en la percepción de seguridad residencial: Mejorar la percepción de seguridad en los hogares de nuestros usuarios en un 30% dentro de los primeros 12 meses, a través de encuestas y reportes post-implementación.</li>
    <li>Adopción tecnológica masiva en hogares: Lograr una adopción del sistema FaceLoock en al menos el 10% de residencias con sistemas de domótica dentro del primer año.</li>
    <li>Reconocimiento de marca y confianza: Alcanzar una tasa de reconocimiento de marca del 35% entre los usuarios interesados en seguridad inteligente dentro de los primeros 18 meses, reforzada por influencers tecnológicos y alianzas estratégicas.</li>
    <li>Ingresos sostenibles: Alcanzar un crecimiento del 15% mensual en ventas del sistema FaceLoock y suscripciones premium, generando ingresos recurrentes estables.</li>
    <li>Liderazgo en el mercado nacional: Posicionarnos como la primera opción de seguridad inteligente residencial en Perú y expandirnos a otros países de América Latina en un plazo de 24 meses.</li>
  </ul>
</section>

<section id="user-assumptions">
  <h4>User Assumptions</h4>
  <ul>
    <li><strong>Seguridad y conveniencia:</strong> Los usuarios desean una solución que garantice un alto nivel de seguridad mientras les permite ingresar a sus hogares de manera rápida y sin complicaciones. Prefieren la comodidad de no depender de llaves físicas ni tarjetas.</li>
    <li><strong>Preocupación por la privacidad:</strong> Los usuarios valoran la privacidad de sus datos y buscan sistemas de reconocimiento facial que ofrezcan garantías de seguridad, con almacenamiento de datos mínimamente accesibles y encriptados.</li>
    <li><strong>Facilidad de uso:</strong> Los usuarios desean un sistema intuitivo, fácil de instalar y utilizar, con opciones claras y accesibles para gestionar el acceso y configurar notificaciones a través de una aplicación móvil.</li>
    <li><strong>Interconexión con otros dispositivos:</strong> Los usuarios valoran la capacidad de integración del sistema de reconocimiento facial con otros dispositivos de domótica ya presentes en sus hogares, como cámaras de seguridad, sistemas de luces inteligentes y termostatos.</li>
    <li><strong>Seguridad en caso de fallos:</strong> Los usuarios esperan que el sistema ofrezca opciones alternativas de acceso en caso de fallos en el reconocimiento facial, como códigos temporales o acceso remoto mediante la aplicación móvil.</li>
    <li><strong>Confianza en la tecnología:</strong> Los usuarios tienen dudas sobre la precisión y seguridad del sistema de reconocimiento facial, especialmente en condiciones de poca luz o ante personas con características similares. Esperan pruebas públicas y auditorías que validen la eficacia del sistema.</li>
  </ul>
</section>

<section id="user-outcomes">
  <h4>User Outcomes</h4>
  <ul>
    <li><strong>Acceso sin fricciones:</strong> Los usuarios pueden ingresar a su hogar de manera rápida y sin inconvenientes, sin necesidad de llaves o tarjetas. El sistema reconoce a los usuarios con alta precisión y eficacia.</li>
    <li><strong>Mayor control sobre la seguridad del hogar:</strong> Los usuarios reciben notificaciones en tiempo real sobre intentos fallidos de acceso y pueden revisar el historial de entradas para tener visibilidad sobre las personas que acceden a su hogar.</li>
    <li><strong>Tranquilidad y confianza:</strong> Los usuarios sienten que sus hogares están mejor protegidos gracias a un sistema de seguridad robusto que les brinda un control total y acceso remoto. Además, tienen confianza en que sus datos están seguros gracias a las auditorías de seguridad.</li>
    <li><strong>Satisfacción con la integración domótica:</strong> Los usuarios disfrutan de la interconexión del sistema de reconocimiento facial con otros dispositivos inteligentes en el hogar, como luces y cámaras, para mejorar la comodidad y el control.</li>
    <li><strong>Flexibilidad en el acceso:</strong> En caso de problemas con el reconocimiento facial, los usuarios tienen opciones alternativas para acceder a su hogar sin complicaciones, como códigos de acceso temporales o control remoto.</li>
  </ul>
</section>

<section id="features">
  <h4>Features</h4>
  <ul>
    <li><strong>Reconocimiento Facial Avanzado:</strong> Sistema de reconocimiento facial rápido, preciso y con alta tasa de fiabilidad en diversas condiciones de luz y distancia.</li>
    <li><strong>Aplicación Móvil de Control:</strong> Aplicación móvil que permite gestionar accesos, recibir notificaciones, revisar el historial de entradas y controlar remotamente las funciones del sistema.</li>
    <li><strong>Integración Domótica:</strong> Funcionalidad de integración con otros dispositivos inteligentes en el hogar, como cámaras, luces, y termostatos, para un control unificado.</li>
    <li><strong>Historial de Accesos:</strong> Registro detallado de todas las entradas al hogar, mostrando la hora, fecha y usuario que accedió, disponible en la aplicación móvil.</li>
    <li><strong>Notificaciones en Tiempo Real:</strong> Alertas instantáneas en la aplicación móvil ante intentos fallidos de reconocimiento facial, proporcionando detalles sobre la ubicación y la hora del intento.</li>
    <li><strong>Acceso Alternativo:</strong> Opciones de acceso alternativo en caso de fallos en el reconocimiento facial, como códigos temporales o acceso remoto a través de la aplicación móvil.</li>
    <li><strong>Ajustes de Seguridad Avanzados:</strong> Funciones adicionales de seguridad, como la encriptación de datos y auditorías periódicas, para garantizar la privacidad y la protección de los usuarios.</li>
    <li><strong>Suscripción Premium:</strong> Acceso a funciones avanzadas, como almacenamiento en la nube, soporte prioritario y control de múltiples dispositivos a través de un modelo de suscripción mensual.</li>
  </ul>
</section>

#### 1.2.2.3  Lean UX Hypothesis Statements

<section id="hipotesis-solucion">
  <ul>
    <li>
      <strong>Hipótesis sobre la solución de reconocimiento facial:</strong>  
      Creemos que si desarrollamos un sistema de reconocimiento facial eficiente y preciso, los usuarios podrán acceder a sus viviendas de manera más segura y conveniente que utilizando llaves tradicionales. Esta solución puede satisfacer sus necesidades de seguridad, control de acceso y conveniencia, brindando una experiencia sin fricciones y un alto nivel de confianza en la protección de sus hogares.
    </li>
    <li>
      <strong>Hipótesis sobre la experiencia de usuario y control móvil:</strong>  
      Creemos que si los usuarios pueden gestionar los accesos a través de una aplicación móvil intuitiva, recibir notificaciones en tiempo real sobre intentos fallidos de acceso y revisar el historial de entradas, estarán más satisfechos con el control y la seguridad de su hogar. Esto aumentará la percepción de seguridad y permitirá una experiencia fluida y moderna en su vida diaria.
    </li>
    <li>
      <strong>Hipótesis sobre la integración con sistemas domóticos:</strong>  
      Creemos que si integramos nuestro sistema de reconocimiento facial con otros dispositivos de domótica como cámaras, luces y termostatos, los usuarios experimentarán una mayor comodidad y control de su entorno, lo que les permitirá optimizar la seguridad y la eficiencia energética en su hogar. Esta integración será una característica valorada por los usuarios interesados en soluciones tecnológicas avanzadas.
    </li>
    <li>
      <strong>Hipótesis sobre la confianza en la tecnología:</strong>  
      Creemos que si proporcionamos pruebas públicas y auditorías de seguridad que validen la eficacia del sistema de reconocimiento facial, los usuarios ganarán confianza en la tecnología, especialmente aquellos que inicialmente tienen dudas sobre la precisión y seguridad del sistema. Esto reducirá el riesgo de desconfianza y aumentará la adopción del sistema.
    </li>
    <li>
      <strong>Hipótesis sobre el acceso alternativo:</strong>  
      Creemos que si ofrecemos opciones alternativas de acceso, como códigos temporales o acceso remoto a través de la aplicación móvil en caso de fallos en el reconocimiento facial, los usuarios se sentirán más seguros y respaldados, sabiendo que siempre tendrán una solución para acceder a su hogar sin inconvenientes, incluso si hay fallos técnicos en el sistema de reconocimiento facial.
    </li>
  </ul>
</section>


#### 1.2.2.4. Lean UX Canvas  

<img src="./images/lean_ux_canvas.jpg" width="auto">

## 1.3. Segmentos objetivo

<section id="segmentos-usuarios">

  <article>
    <h4>Propietarios de Viviendas Tecnológicas</h4>
    <p>
      Este segmento está compuesto por individuos que ya están familiarizados con la tecnología y buscan integrar soluciones inteligentes en sus hogares. 
      Los propietarios de viviendas tecnológicas desean modernizar sus sistemas de seguridad mediante soluciones avanzadas, como el reconocimiento facial. 
      Este grupo valora la innovación, la comodidad y la automatización de sus hogares, y está dispuesto a invertir en productos que mejoren la seguridad y eficiencia de su vida diaria.
    </p>
    <h4>Características clave:</h4>
    <ul>
      <li>Interés en soluciones de domótica y hogares inteligentes.</li>
      <li>Preocupación por la seguridad y el control de acceso.</li>
      <li>Valoración de la comodidad y la conveniencia.</li>
      <li>Propietarios de casas unifamiliares o apartamentos con enfoque en tecnología avanzada.</li>
    </ul>
  </article>

  <article>
    <h4>Adultos Mayores o Personas con Movilidad Reducida</h4>
    <p>
      Este segmento incluye personas mayores o individuos con movilidad reducida que enfrentan dificultades al manipular llaves tradicionales. 
      Buscan una solución que les permita acceder a sus hogares sin esfuerzo físico, mejorando su autonomía y reduciendo el riesgo de accidentes o fallos en situaciones de emergencia. 
      La solución de reconocimiento facial representa una forma accesible y segura para ingresar a su vivienda sin depender de la ayuda de terceros.
    </p>
    <h4>Características clave:</h4>
    <ul>
      <li>Necesidad de soluciones de fácil acceso y sin contacto físico.</li>
      <li>Preocupación por la seguridad personal y la autonomía.</li>
      <li>Valoran la facilidad de uso y la confiabilidad del sistema.</li>
      <li>Pueden vivir en viviendas unifamiliares o departamentos, especialmente en comunidades de adultos mayores.</li>
    </ul>
  </article>
</section>


# Capítulo II: Requirements Elicitation & Analysis
## 2.1. Competidores
### 2.1.1. Análisis competitivo
### 2.1.2. Estrategias y tácticas frente a competidores
## 2.2. Entrevistas
### 2.2.1. Diseño de entrevistas
### 2.2.2. Registro de entrevistas
### 2.2.3. Análisis de entrevistas
## 2.3. Needfinding
### 2.3.1. User Personas
### 2.3.2. User Task Matrix
### 2.3.3. User Journey Mapping
### 2.3.4. Empathy Mapping
### 2.3.5. As-is Scenario Mapping
## 2.4. Ubiquitous Language

# Capítulo III: Requirements Specification
## 3.1. To-Be Scenario Mapping
## 3.2. User Stories
## 3.3. Impact Mapping
## 3.4. Product Backlog

# Capítulo IV: Solution Software Design

## 4.1. Strategic-Level Domain-Driven Design
### 4.1.1. EventStorming  
### 4.1.2. Candidate Context Discovery  
### 4.1.3. Domain Message Flows Modeling  
### 4.1.4. Bounded Context Canvases  
### 4.1.5. Context Mapping  
## 4.2. Software Architecture
### 4.2.1. Software Architecture System Landscape Diagram  
### 4.2.2. Software Architecture Context Level Diagrams  
### 4.2.3. Software Architecture Container Level Diagrams  
### 4.2.4. Software Architecture Deployment Diagrams  
## 4.3. Tactical-Level Domain-Driven Design
### 4.3.1. Bounded Context: &lt;Bounded Context Name&gt;
#### 4.3.1.1. Domain Layer  
#### 4.3.1.2. Interface Layer  
#### 4.3.1.3. Application Layer  
#### 4.3.1.4. Infrastructure Layer  
#### 4.3.1.5. Bounded Context Software Architecture Component Level Diagrams  
#### 4.3.1.6. Bounded Context Software Architecture Code Level Diagrams  
##### 4.3.1.6.1. Bounded Context Domain Layer Class Diagrams  
##### 4.3.1.6.2. Bounded Context Database Design Diagram  

# Capítulo V: Solution UI/UX Design  
## 5.1. Style Guidelines  
### 5.1.1. General Style Guidelines  
### 5.1.2. Web, Mobile and IoT Style Guidelines  
## 5.2. Information Architecture  
### 5.2.1. Organization Systems  
### 5.2.2. Labeling Systems  
### 5.2.3. SEO Tags and Meta Tags  
### 5.2.4. Searching Systems  
### 5.2.5. Navigation Systems  
## 5.3. Landing Page UI Design  
### 5.3.1. Landing Page Wireframe  
### 5.3.2. Landing Page Mock-up  
## 5.4. Applications UX/UI Design  
### 5.4.1. Applications Wireframes  
### 5.4.2. Applications Wireflow Diagrams  
### 5.4.3. Applications Mock-ups  
### 5.4.4. Applications User Flow Diagrams  
## 5.5. Applications Prototyping  

# Capítulo VI: Product Implementation, Validation & Deployment  
## 6.1. Software Configuration Management  
### 6.1.1. Software Development Environment Configuration  
### 6.1.2. Source Code Management  
### 6.1.3. Source Code Style Guide & Conventions  
### 6.1.4. Software Deployment Configuration  
## 6.2. Landing Page, Services & Applications Implementation  
### 6.2.X. Sprint n  
#### 6.2.X.1. Sprint Planning n  
#### 6.2.X.2.  
#### 6.2.X.3.  
#### 6.2.X.4.  
#### 6.2.X.5.  
#### 6.2.X.6.  
#### 6.2.X.7.  
#### 6.2.X.8.  
#### 6.2.X.9.  
## 6.3. Validation Interviews  
### 6.3.1. Diseño de Entrevistas  
### 6.3.2. Registro de Entrevistas  
### 6.3.3. Evaluaciones según heurísticas  
## 6.4. Video About-the-Product  

# Conclusiones  
## Conclusiones y recomendaciones  
## Video About-the-Team  

# Bibliografía  

# Anexos  


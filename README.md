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
### 1.1.1. Descripción de la Startup
### 1.1.2. Perfiles de integrantes del equipo
## 1.2. Solution Profile
### 1.2.1 Antecedentes y problemática
#### 1.2.2.3. Lean UX Hypothesis Statements
#### 1.2.2.4. Lean UX Canvas
## 1.3. Segmentos objetivo

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

El proceso de EventStorming lo llevamos a cabo utilizando la herramienta colaborativa MIRO, donde desarrollamos todas las etapas correspondientes.
Comenzamos con la fase inicial, conocida como BrainStorming, en la cual analizamos el dominio de SmartGuard y compartimos ideas sobre los posibles eventos clave relacionados con el uso y funcionamiento de nuestro producto, FaceLoock.
Para definir estos eventos, consideramos criterios como la relevancia dentro del flujo del sistema, la frecuencia con la que ocurren y su orden o relación temporal, asegurándonos de cubrir aquellos que impactan directamente en la experiencia del usuario y la operatividad del sistema.

<img src="images/brainstorming.png"/>

*Evidencia del desarrollo del primer paso del DDD*

Luego pasamos a la segunda etapa del proceso, conocida como Timelines, donde nos enfocamos en discutir y organizar el flujo de los eventos dentro del dominio de SmartGuard. En esta fase, establecimos el orden cronológico en el que ocurren los eventos relacionados con el uso de FaceLoock, permitiéndonos visualizar de manera más clara la secuencia lógica del sistema y su comportamiento desde la perspectiva del usuario.

<img src="images/timeline1.png"/>
<img src="images/timeline2.png"/>

*Evidencia del desarrollo del segundo paso del DDD*

#### 4.1.1.1. Candidate Context Discovery  

Como parte del proceso para identificar nuestros Candidate Contexts, avanzamos al paso 3: Pain Points, donde analizamos los eventos dentro del flujo de uso de nuestra solución “FaceLoock” que podrían representar cuellos de botella o pasos manuales susceptibles de ser automatizados. Este análisis nos permitirá detectar oportunidades clave para optimizar la experiencia del usuario y mejorar la eficiencia del sistema de seguridad inteligente que ofrece nuestra startup SmartGuard.

<img src="images/painpoints1.png"/>
<img src="images/painpoints2.png"/>

*Evidencia del desarrollo del tercer paso del DDD*

Después, comenzamos con el cuarto paso del DDD llamado Pivotal Points, donde identificamos puntos o eventos comerciales importantes que indican un cambio en el contexto o la fase aplicado a nuestro startup

<img src="images/pivotalpoints1.png"/>
<img src="images/pivotalpoints2.png"/>
<img src="images/pivotalpoints3.png"/>

*Evidencia del desarrollo del cuarto paso del DDD*

Con base en lo anterior, iniciamos con la etapa de Commands, en la cual definimos los desencadenantes de determinados eventos dentro del dominio, así como el actor responsable de ejecutarlos

<img src="images/commands1.png"/>
<img src="images/commands2.png"/>
<img src="images/commands3.png"/>

*Evidencia del desarrollo del quinto paso del DDD*

Posteriormente, avanzamos al paso 6: Policies, donde identificamos aquellos eventos que debían ejecutarse de forma automática o que requerían la aplicación de alguna política específica para su correcta ejecución. 

<img src="images/policies1.png"/>
<img src="images/policies2.png"/>
<img src="images/policies3.png"/>

*Evidencia del desarrollo del sexto paso del DDD*

Con ello, procedemos a discutir los modelos de lectura de datos, logrando identificar algunos relevantes dentro del dominio de seguridad residencial, como por ejemplo el propietario del hogar, quien necesita monitorear y gestionar el acceso a su vivienda. Para esta identificación se tomaron en cuenta criterios como la complejidad del modelo, su relevancia dentro del sistema y la frecuencia de actualización de la información.

<img src="images/readmodels1.png"/>
<img src="images/readmodels2.png"/>

*Evidencia del desarrollo del séptimo paso del DDD*

Posteriormente empezamos a discutir el uso de sistemas externos, y los que encontramos entre ellos estaban relacionados a los pagos y el sistema de monitoreo

<img src="images/externalsystems1.png"/>
<img src="images/externalsystems2.png"/>

*Evidencia del desarrollo del octavo paso del DDD*

Posteriormente, iniciamos con la identificación de los Aggregates dentro del dominio de nuestra solución. Para ello, consideramos criterios como la granularidad, la consistencia de los datos y la estabilidad a lo largo del tiempo. Con base en estos criterios, procedimos a seleccionar los Aggregates más representativos, los cuales fueron los siguientes:

<img src="images/aggregates1.png"/>
<img src="images/aggregates2.png"/>

*Evidencia del desarrollo del noveno paso del DDD*

Y para finalizar, después de un análisis y discusión grupal, los siguientes bounded contexts fueron seleccionados:

<img src="images/boundedcontexts.png"/>

*Evidencia del desarrollo del desarrollo completo del DDD*

Para una mejor visualización del tablero, se puede acceder directamente a nuestro MIRO mediante este enlace: [Complete DDD MIRO](https://miro.com/app/board/uXjVIEDKwK4=/)

#### 4.1.1.2. Domain Message Flows Modeling  

En relación con los flujos de mensajería, se seleccionaron aquellos más relevantes para el núcleo del negocio de SmartGuard, descartando flujos más generales como el registro básico de usuario o el procesamiento de pagos. En su lugar, se definieron los siguientes flujos clave de mensajería, directamente vinculados con el funcionamiento de FaceLoock:

- Escenario 1:
Registro inicial del usuario y captura de datos biométricos: El usuario crea su cuenta en el sistema y registra su rostro para habilitar el acceso facial a su hogar mediante FaceLoock.

<img src="images/domainmessage1.png"/>

- Escenario 2:
Detección de intento de acceso sospechoso: El sistema detecta un rostro no autorizado intentando acceder a la vivienda y genera una alerta al propietario.

<img src="images/domainmessage2.png"/>

- Escenario 3:
Renovación de suscripción para acceder a funciones premium: El usuario renueva su suscripción para mantener o desbloquear funciones avanzadas del sistema, como historial de accesos o control remoto.

<img src="images/domainmessage3.png"/>

#### 4.1.1.3. Bounded Context Canvases  

De acuerdo con los bounded contexts definidos en puntos anteriores, se crearon sus respectivos Canvases: 

<img src="images/bcanvases1.png"/>
<img src="images/bcanvases2.png"/>
<img src="images/bcanvases3.png"/>
<img src="images/bcanvases4.png"/>

### 4.1.2. Context Mapping  

<img src="images/cmapping1.png"/>
<img src="images/cmapping2.png"/>
<img src="images/cmapping3.png"/>
<img src="images/cmapping4.png"/>

Los diferentes Bounded Contexts de SmartGuard están estrechamente relacionados para ofrecer una solución integral de seguridad residencial:

- User Management se relaciona con Biometric Data Management, ya que los usuarios deben gestionar sus cuentas para registrar, actualizar o eliminar sus datos biométricos, esenciales para el funcionamiento del sistema FaceLoock.
- Biometric Data Management se vincula con Security Monitoring, dado que los datos biométricos son utilizados para validar accesos en tiempo real y activar mecanismos de seguridad ante intentos sospechosos.
- Security Monitoring está relacionado con Subscription Management, ya que ciertas funciones avanzadas del monitoreo (como notificaciones en tiempo real, historial de accesos o alertas automáticas) están disponibles solo para usuarios con una suscripción activa.
- Subscription Management está relacionado con User Management, ya que un usuario al adquirir o renovar su suscripción, seguirá vigente sus credenciales y funcionamiento en el sistema.

Estas relaciones reflejan cómo los distintos aspectos del sistema están integrados para brindar una experiencia segura, automatizada y personalizada, desde la gestión del usuario hasta el monitoreo inteligente y la administración de servicios premium.<br>
Diagrama relacionado:

<img src="images/contextmapping.png"/>

### 4.1.3. Software Architecture
#### 4.1.3.1 Software Architecture System Landscape Diagram  
El diagrama ilustra los componentes tecnológicos fundamentales (FaceLoock, Gateway, Servidor Central, App Móvil y App Web), sus interrelaciones funcionales y los flujos de comunicación. Esta representación de alto nivel permite visualizar cómo los propietarios interactúan con el sistema de seguridad residencial basado en reconocimiento facial, facilitando la comprensión de las dependencias y responsabilidades de cada componente dentro del ecosistema IoT propuesto.

![Image 1](https://cdn.discordapp.com/attachments/1364349164074438756/1364357069330845786/Captura_de_pantalla_2025-04-17_121143.png?ex=68096009&is=68080e89&hm=e5c1651bd14325bcc9a2fce786a422b144fdec5c5a8d09ed5dbbf869e0e87d9c&)


#### 4.1.3.2 Software Architecture Context Level Diagrams  
El diagrama ilustra el contexto del sistema FaceLoock, mostrando las interacciones entre el componente central (la cerradura inteligente con reconocimiento facial) y sus sistemas externos. En esta representación se visualizan claramente los límites del sistema y sus principales integraciones. El componente central FaceLoock interactúa con los propietarios, quienes gestionan el acceso y monitorean la seguridad. Se integra con sistemas externos clave: el Sistema de Notificaciones Push, los Servicios de Nube para almacenamiento de datos, la API de Reconocimiento Facial para la validación de identidades, y un Servicio de Pasarela de Pagos para gestionar suscripciones. Esta vista de contexto define el alcance del sistema, estableciendo sus fronteras operativas y las interfaces con actores externos, proporcionando una comprensión clara de las responsabilidades y dependencias del sistema FaceLoock en su entorno operativo.
![Image 1](https://media.discordapp.net/attachments/1364349164074438756/1364358382487601202/image.png?ex=68096142&is=68080fc2&hm=3b21765bcfe335217bd4f64d305c2e18051b2f5e0bc82d0e0a556adeca376e8b&=&format=webp&quality=lossless&width=1074&height=771)

#### 4.1.3.3 Software Architecture Container Level Diagrams  
El diagrama muestra los diferentes contenedores tecnológicos dentro del sistema FaceLoock y cómo interactúan entre sí. Los propietarios de viviendas interactúan con aplicaciones móviles y web para gestionar la seguridad y controlar el acceso a sus hogares. Estas aplicaciones se conectan a un API que gestiona las interacciones con los dispositivos. Los datos operacionales y los eventos se almacenan en una base de datos central, que recopila información sobre los dispositivos IoT, como el sistema FaceLoock. Además, el sistema se integra con servicios externos como el sistema de notificaciones push, servicios de nube para almacenar fotos, videos y otros datos relacionados con los accesos y eventos, y pasarelas de pago para gestionar las suscripciones. Este diagrama ilustra la arquitectura y la infraestructura que respalda el funcionamiento seguro y eficiente del sistema.
![Image 1](https://media.discordapp.net/attachments/1364349164074438756/1364358126777663528/image.png?ex=68096105&is=68080f85&hm=8e4c36b90884936efbc43d42cc0a5892aef20022812044d4e323c3b897a741b1&=&format=webp&quality=lossless&width=1115&height=738)

#### 4.1.3.4 Software Architecture Deployment Diagrams  
El diagrama muestra cómo se despliegan y comunican los diferentes componentes tecnológicos del sistema FaceLoock. Los usuarios interactúan con la aplicación móvil que hace solicitudes API al servidor backend. Este servidor gestiona la lógica del negocio y las interacciones con otros servicios, además de hacer llamadas a la base de datos, donde se almacenan los datos de usuarios, configuraciones y registros de acceso. El sistema también incluye una página de aterrizaje que interactúa con la aplicación web accesible desde cualquier navegador, proporcionando una interfaz adicional para los usuarios. Esta representación de despliegue ilustra cómo los componentes de software están organizados para asegurar la operación fluida del sistema.

![Image 1](https://media.discordapp.net/attachments/1364349164074438756/1364358726357880842/Captura_de_pantalla_2025-04-17_130039.png?ex=68096194&is=68081014&hm=136d0cee1e36e66f1ddf8b7833e032c99c85cf193a10c0fb5e1cf55a9356539c&=&format=webp&quality=lossless&width=1115&height=650)

## 4.2. Tactical-Level Domain-Driven Design




## 4.2.1. Bounded Context: User Management

El dominio User Management en el sistema FaceLoock de la startup SmartGuard se encarga de gestionar los perfiles de usuario, permisos de acceso, cuentas vinculadas y eventos relacionados, como notificaciones y respaldos de información. Este módulo es esencial para garantizar una administración segura y personalizada de la identidad digital de los usuarios, así como un control preciso del acceso a los hogares mediante tecnología biométrica.<br>
- **Diccionario de Clases:** <br>
El Diccionario de Clases es una herramienta clave en el diseño y desarrollo de FaceLoock, ya que proporciona una descripción detallada de las clases esenciales que conforman el modelo de dominio del sistema. Este diccionario facilita la colaboración entre los miembros del equipo de desarrollo y asegura una base sólida para la evolución del producto.

<img src="images/diccionario1BC1.png"/>

<img src="images/diccionario2BC1.png"/>

<img src="images/diccionario3BC1.png"/>

<img src="images/diccionario4BC1.png"/>

### 4.2.1.1. Domain Layer

Dentro del dominio de User Management en el sistema FaceLoock, se encuentran entidades clave que permiten gestionar la identidad de los usuarios, controlar sus permisos de acceso, sincronizar datos biométricos (reconocimiento facial) y mantener un historial seguro de accesos y notificaciones.
Estas entidades son fundamentales para garantizar una experiencia segura y eficiente en el uso del sistema, ya que permiten administrar con precisión quién accede a una vivienda, en qué momento y bajo qué condiciones.
A continuación, se muestran los objetos relacionados con el dominio:

#### Aggregates

<img src="images/aggregatesBC1.png"/>

#### Entities

<img src="images/entitiesBC1.png"/>

#### Value Objects

<img src="images/valueobjectsBC1.png"/>

#### Domain Services

<img src="images/domainserviceBC1.png"/>

#### Repositories

<img src="images/repositoriesBC1.png"/>

### 4.2.1.2. Interface Layer

En esta sección, presentamos la Capa de Interfaz de nuestra plataforma de seguridad inteligente FaceLoock, la cual representa el punto de entrada para las interacciones entre los usuarios y el sistema. Esta capa está compuesta por una serie de controladores REST que manejan las peticiones entrantes desde dispositivos móviles o aplicaciones web, procesan los datos mediante servicios de aplicación y devuelven respuestas adecuadas.
La Capa de Interfaz permite una comunicación eficiente y segura entre el sistema y sus usuarios, facilitando tareas como la gestión de perfiles, permisos de acceso, reconocimiento facial, alertas y configuración de notificaciones.
Contexto de esta capa – Controladores principales:

- **UserProfileController**:<br>
Maneja todas las operaciones relacionadas con la creación y administración del perfil de usuario.

- **AccessControlController**:<br>
Administrar permisos de acceso y relaciones entre usuarios y dispositivos autorizados para ingresar al inmueble.

- **FaceRecognitionController**:<br>
Encargado de recibir datos biométricos faciales y validar accesos mediante reconocimiento.

- **AlertsController**:<br>
Gestiona las alertas generadas por accesos sospechosos, horarios no permitidos o errores de autenticación.

- **NotificationController**:<br>
Controla la configuración de notificaciones enviadas al usuario ante diferentes eventos del sistema.

<img src="images/interfacelayerBC1.png"/>

### 4.2.1.3. Application Layer

La Capa de Aplicación de FaceLoock coordina la lógica entre el dominio y la infraestructura. No contiene lógica de negocio compleja, sino que orquesta tareas, maneja comandos, eventos y delega operaciones. Sus principales componentes son:

- **Command Handlers:**<br>
Gestionan acciones como registrar usuarios o subir capturas faciales.

- **Event Handlers:**<br>
Procesan eventos del sistema como accesos fallidos o alertas fuera de horario.

<img src="images/applicationlayerBC1.png"/>

### 4.2.1.4. Infrastructure Layer

En esta sección, presentamos la Capa de Infraestructura (Infrastructure Layer) dentro del enfoque de diseño Domain-Driven Design (DDD) aplicado al sistema FaceLoock, nuestra plataforma de seguridad inteligente.
Esta capa se encarga de proveer los recursos técnicos y de soporte necesarios para el correcto funcionamiento del sistema, actuando como puente entre la lógica del dominio y la tecnología subyacente.

<img src="images/infrastructurelayerBC1.png"/>

### 4.2.1.5. Bounded Context Software Architecture Component Level Diagrams

<img src="images/boundedcontextsoftwarearchitectureBC1.png"/>

### 4.2.1.6. Bounded Context Software Architecture Code Level Diagrams

#### 4.2.1.6.1. Bounded Context Domain Layer Class Diagrams

<img src="images/boundedcontextdomainBC1.png"/>

#### 4.2.1.6.2. Bounded Context Database Design Diagram

<img src="images/boundedcontextdatabaseBC1.png"/>



## 4.2.1. Bounded Context: Biometric Data Management

El dominio Biometric Data Management en FaceLoock gestiona de forma segura y trazable los datos faciales de los usuarios, permitiendo su registro, actualización, eliminación y respaldo. Es clave para el reconocimiento de identidad y colabora con los módulos de autenticación, auditoría y gestión de usuarios, garantizando seguridad e integración en todo el sistema.

<img src="images/diccionario1BC2.png"/>

<img src="images/diccionario2BC2.png"/>

<img src="images/diccionario3BC2.png"/>

### 4.2.1.1. Domain Layer

La capa de dominio encapsula la lógica del negocio central. Aquí se encuentran los Aggregates, Entities, Value Objects, Domain Services y Repositories que representan la lógica pura del sistema, independiente de la infraestructura.

#### Aggregates

<img src="images/aggregateBC2.png"/>

#### Entities

<img src="images/entitiesBC2.png"/>

#### Value Objects

<img src="images/valueobjectBC2.png"/>

#### Domain Services

<img src="images/domainserviceBC2.png"/>

#### Repositories

<img src="images/repositoriesBC2.png"/>


### 4.2.1.2. Interface Layer

La capa de interfaz representa el punto de entrada del sistema. Aquí se encuentran los Controllers que reciben las solicitudes externas (por ejemplo, desde una app móvil o web) y se encargan de invocar los servicios de aplicación.

<img src="images/interfacelayerBC2.png"/>


### 4.2.1.3. Application Layer

La capa de aplicación gestiona el flujo entre la interfaz y el dominio. Aquí se definen los Commands, EventHandlers y CommandHandlers. Es donde se orquesta la lógica de casos de uso.

<img src="images/applicationlayerBC2.png"/>


### 4.2.1.4. Infrastructure Layer

La capa de infraestructura gestiona la persistencia y los detalles técnicos de bajo nivel. Aquí se encuentran las implementaciones de los JPA Repositories, que interactúan directamente con la base de datos.

<img src="images/infrastructurelayerBC2.png"/>


### 4.2.1.5. Bounded Context Software Architecture Component Level Diagrams

<img src="images/boundedcontextsoftwarearchitectureBC2.png"/>

### 4.2.1.6. Bounded Context Software Architecture Code Level Diagrams

#### 4.2.1.6.1. Bounded Context Domain Layer Class Diagrams

<img src="images/boundedcontextdomainlayerBC2.png"/>

#### 4.2.1.6.2. Bounded Context Database Design Diagram

<img src="images/boundedcontextdatabasediagramBC2.png"/>


## 4.2.1. Bounded Context: monitorización de seguridad

Este contexto se centra en la capacidad del sistema para detectar accesos sospechosos mediante el reconocimiento facial y activar las alertas de seguridad correspondientes para asegurar la protección del hogar.

### 4.2.1.1. Domain Layer

#### Entidades

- **SecurityAlert**: Representa una alerta generada cuando el sistema detecta un acceso sospechoso o una intrusión en la vivienda.
- **AccessAttempt**: Registra un intento de acceso al hogar, ya sea exitoso o fallido, incluyendo el rostro capturado, la hora, y la identificación del usuario.
- **AlarmSystem**: Representa el sistema de alarmas que se activa cuando se detecta un acceso no autorizado o un evento de seguridad.

#### Objetos de Valor

- **IntrusionDetection**: Contiene los detalles de un acceso no autorizado o intrusión detectada, como la identificación del rostro y la hora del intento.
- **AlertMetadata**: Contiene detalles sobre la alerta, como el tipo de evento (intento fallido, intrusión, etc.) y la gravedad de la alerta.

#### Repositorios

- **SecurityAlertRepository**: Maneja la persistencia de las alertas de seguridad generadas por el sistema.
- **AccessAttemptRepository**: Maneja la persistencia de los intentos de acceso al sistema.
- **AlarmRepository**: Maneja la persistencia de los estados de las alarmas activadas.

### 4.2.1.2. Interface Layer

#### Controladores

- **SecurityAlertController**: Gestiona las operaciones relacionadas con las alertas de seguridad, permitiendo generar, activar y notificar sobre los eventos de seguridad en tiempo real.
- **AccessAttemptController**: Se encarga de gestionar los registros de intentos de acceso, proporcionando visibilidad sobre quién y cuándo ha intentado acceder al hogar.
- **AlarmController**: Se encarga de gestionar las alarmas, activando o desactivando las alarmas cuando se detecta un evento de seguridad.

### 4.2.1.3. Application Layer

La capa de aplicación para "Monitorización de Seguridad" gestiona las funcionalidades que permiten al sistema detectar accesos sospechosos y activar las alertas de seguridad en el hogar. Esta capa interactúa con los repositorios para registrar los intentos de acceso y las alertas, además de manejar la lógica de activación de alarmas.

#### Command Handlers

- **DetectSuspiciousAccessCommandHandler**: Procesa las solicitudes de detección de accesos sospechosos, evaluando los intentos fallidos y activando las alertas si es necesario.
- **ActivateAlarmCommandHandler**: Se encarga de activar las alarmas en caso de intrusión, enviando notificaciones a los propietarios de la vivienda.

#### Event Handlers

- **SuspiciousAccessDetectedEventHandler**: Maneja los eventos que indican que un acceso sospechoso ha sido detectado, generando alertas y activando respuestas automatizadas.
- **AlarmActivatedEventHandler**: Maneja los eventos que indican que una alarma ha sido activada, enviando notificaciones y actualizando el estado del sistema.

### 4.2.1.4. Infrastructure Layer

La capa de infraestructura se encarga de la gestión de la base de datos para almacenar las alertas, los intentos de acceso y el estado de las alarmas. También implementa conexiones con servicios externos necesarios, como notificaciones push y activación de alarmas de forma remota.

#### Gestión de bases de datos

- **Tablas**: Creación y gestión de tablas para almacenar las alertas generadas, los intentos de acceso y los estados de las alarmas.

#### Caché

- Implementación de almacenamiento en caché para mejorar la eficiencia en la detección de eventos recientes y reducir la latencia en la activación de alertas.

#### Copias de seguridad

- Mantenimiento de copias de seguridad de los registros de seguridad, para garantizar la integridad y la disponibilidad de los datos históricos de accesos y alertas.

#### Seguridad

- **Autenticación**: Implementación de autenticación para garantizar que solo los usuarios autorizados puedan gestionar las configuraciones de alertas y alarmas, y acceder a los registros de seguridad.

#### 4.2.1.5. Bounded Context Software Architecture Component Level Diagrams  
![Image 1](https://media.discordapp.net/attachments/1364349164074438756/1364349524595707944/image.png?ex=68095903&is=68080783&hm=9731c6d1321b34625498ae58f927196f44c54d7428280c59d6c615d4847886e2&=&format=webp&quality=lossless&width=985&height=568)

#### 4.2.1.6. Bounded Context Software Architecture Code Level Diagrams  
##### 4.2.1.6.1. Bounded Context Domain Layer Class Diagrams  
![Image 2](https://media.discordapp.net/attachments/1364349164074438756/1364349524906082435/image.png?ex=68095903&is=68080783&hm=e210fe599cc9f6098732c7d7df4dcb786087903aec421efa0d323fe5a08a4ad5&=&format=webp&quality=lossless&width=985&height=393)

##### 4.2.1.6.2. Bounded Context Database Design Diagram  
![Image 3](https://media.discordapp.net/attachments/1364349164074438756/1364349525225111643/image.png?ex=68095903&is=68080783&hm=a05e653fb90747b7b613ab6bfad99812a5bd6ceb7ee6d9de94d5fc3a5a165b05&=&format=webp&quality=lossless&width=985&height=661)


## 4.2.1. Bounded Context: gestión de suscripciones

Este contexto se centra en la gestión de las suscripciones de los usuarios, permitiendo a los propietarios acceder a funciones premium y gestionar sus pagos. Incluye la activación, renovación y cancelación de sus suscripciones a los servicios adicionales del sistema.

### 4.2.1.1. Domain Layer

#### Entidades

- **Subscription**: Representa una suscripción activa a los servicios premium del sistema, que permite acceder a funciones avanzadas como notificaciones en tiempo real, acceso remoto y almacenamiento en la nube.
- **Payment**: Registra los pagos realizados por los usuarios para activar o renovar sus suscripciones.
- **User**: Representa al propietario de la vivienda que tiene una suscripción activa o pendiente.

#### Objetos de Valor

- **PaymentDetails**: Contiene la información del pago, como el monto, la fecha de pago y el método de pago.
- **SubscriptionPlan**: Define los planes de suscripción, sus características y los beneficios asociados (por ejemplo, plan básico, plan premium).

#### Repositorios

- **SubscriptionRepository**: Maneja la persistencia de las suscripciones, permitiendo consultar, renovar y cancelar suscripciones.
- **PaymentRepository**: Maneja la persistencia de los pagos realizados por los usuarios para las suscripciones.
- **UserRepository**: Maneja la persistencia de la información de los usuarios y su estado de suscripción.

### 4.2.1.2. Interface Layer

#### Controladores

- **SubscriptionController**: Gestiona las operaciones relacionadas con las suscripciones, como la creación, cancelación, y renovación de suscripciones.
- **PaymentController**: Se encarga de gestionar el proceso de pago, incluyendo la validación de pagos y la actualización de la suscripción tras el pago.
- **UserController**: Administra la información del usuario y su estado de suscripción, permitiendo modificar detalles del perfil y ver el historial de pagos.

### 4.2.1.3. Application Layer

La capa de aplicación para "Gestión de Suscripciones" gestiona las funcionalidades que permiten a los usuarios suscribirse a servicios premium, gestionar pagos y renovar sus suscripciones. Esta capa interactúa con los repositorios para almacenar información de pagos y suscripciones.

#### Command Handlers

- **SubscribeUserCommandHandler**: Procesa la solicitud de un usuario para suscribirse a un plan premium y valida el pago asociado.
- **RenewSubscriptionCommandHandler**: Procesa la renovación de una suscripción y el pago relacionado.
- **CancelSubscriptionCommandHandler**: Se encarga de la cancelación de suscripciones y la actualización de la base de datos.

#### Event Handlers

- **SubscriptionActivatedEventHandler**: Maneja los eventos que indican que una suscripción ha sido activada, enviando notificaciones o actualizando el estado del usuario.
- **PaymentProcessedEventHandler**: Maneja los eventos que indican que un pago ha sido procesado exitosamente, activando o renovando la suscripción.

### 4.2.1.4. Infrastructure Layer

La capa de infraestructura se encarga de la gestión de la base de datos para almacenar información relacionada con las suscripciones y pagos. También implementa las conexiones a servicios externos necesarios para la gestión de pagos (pasarelas de pago).

#### Gestión de bases de datos

- **Tablas**: Creación y gestión de tablas relacionadas con las suscripciones, pagos y usuarios.

#### Caché

- Implementación de almacenamiento en caché para mejorar la velocidad de consulta de las suscripciones y pagos más recientes.

#### Pasarelas de pago

- Implementación de pasarelas de pago externas (por ejemplo, Stripe, PayPal) para gestionar los pagos de los usuarios.

#### Seguridad

- **Autenticación y autorización**: Implementación de medidas de seguridad para garantizar que solo los usuarios autenticados puedan gestionar sus suscripciones y realizar pagos.

### 4.2.1.5. Bounded Context Software Architecture Component Level Diagrams
![Image 1](https://media.discordapp.net/attachments/1364349164074438756/1364351281140994078/image.png?ex=68095aa5&is=68080925&hm=cff4b4fb6d788aa3b137fb23f19a9fd940d31a45bcdbea741f69538f9236969a&=&format=webp&quality=lossless&width=985&height=605)

### 4.2.1.6. Bounded Context Software Architecture Code Level Diagrams

#### 4.2.1.6.1. Bounded Context Domain Layer Class Diagrams
![Image 1](https://media.discordapp.net/attachments/1364349164074438756/1364351281413488650/image.png?ex=68095aa5&is=68080925&hm=e718bc01530eae2bd55f82c167e7a24727ed60fc16dfc91a74ce1e2ee001a542&=&format=webp&quality=lossless&width=985&height=395)

#### 4.2.1.6.2. Bounded Context Database Design Diagram
![Image 1](https://media.discordapp.net/attachments/1364349164074438756/1364351281824665650/image.png?ex=68095aa6&is=68080926&hm=6fdd78a6a36719965cc4f17a6ca007f8095b4a076fc0f398d261e7a00320f3b1&=&format=webp&quality=lossless&width=985&height=419)





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


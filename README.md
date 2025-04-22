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
#### 4.1.3.2 Software Architecture Context Level Diagrams  
#### 4.1.3.3 Software Architecture Container Level Diagrams  
#### 4.1.3.4 Software Architecture Deployment Diagrams  
## 4.2. Tactical-Level Domain-Driven Design

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


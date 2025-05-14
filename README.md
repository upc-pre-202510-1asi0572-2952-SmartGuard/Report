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
#### 4.1.1.2. Domain Message Flows Modeling  
#### 4.1.1.3. Bounded Context Canvases  
### 4.1.2. Context Mapping  
### 4.1.3. Software Architecture
#### 4.1.3.1 Software Architecture System Landscape Diagram  
#### 4.1.3.2 Software Architecture Context Level Diagrams  
#### 4.1.3.3 Software Architecture Container Level Diagrams  
#### 4.1.3.4 Software Architecture Deployment Diagrams  
## 4.2. Tactical-Level Domain-Driven Design
## 4.2.1. Bounded Context: User Management
### 4.2.1.1. Domain Layer
### 4.2.1.2. Interface Layer
### 4.2.1.3. Application Layer
### 4.2.1.4. Infrastructure Layer
### 4.2.1.5. Bounded Context Software Architecture Component Level Diagrams
### 4.2.1.6. Bounded Context Software Architecture Code Level Diagrams
#### 4.2.1.6.1. Bounded Context Domain Layer Class Diagrams
#### 4.2.1.6.2. Bounded Context Database Design Diagram
## 4.2.1. Bounded Context: Biometric Data Management
### 4.2.1.1. Domain Layer
### 4.2.1.2. Interface Layer
### 4.2.1.3. Application Layer
### 4.2.1.4. Infrastructure Layer
### 4.2.1.5. Bounded Context Software Architecture Component Level Diagrams
### 4.2.1.6. Bounded Context Software Architecture Code Level Diagrams
#### 4.2.1.6.1. Bounded Context Domain Layer Class Diagrams
#### 4.2.1.6.2. Bounded Context Database Design Diagram
## 4.2.1. Bounded Context: monitorización de seguridad
### 4.2.1.1. Domain Layer
### 4.2.1.2. Interface Layer
### 4.2.1.3. Application Layer
### 4.2.1.4. Infrastructure Layer
#### 4.2.1.5. Bounded Context Software Architecture Component Level Diagrams  
#### 4.2.1.6. Bounded Context Software Architecture Code Level Diagrams  
##### 4.2.1.6.1. Bounded Context Domain Layer Class Diagrams  
##### 4.2.1.6.2. Bounded Context Database Design Diagram  
## 4.2.1. Bounded Context: gestión de suscripciones
### 4.2.1.1. Domain Layer
### 4.2.1.2. Interface Layer
### 4.2.1.3. Application Layer
### 4.2.1.4. Infrastructure Layer
### 4.2.1.5. Bounded Context Software Architecture Component Level Diagrams
### 4.2.1.6. Bounded Context Software Architecture Code Level Diagrams
#### 4.2.1.6.1. Bounded Context Domain Layer Class Diagrams
#### 4.2.1.6.2. Bounded Context Database Design Diagram







# Capítulo V: Solution UI/UX Design  
## 5.1. Style Guidelines  
Se presentan las bases del repositorio central y organizado de uso común para todo el equipo con el fin de mantener una presentación consistente. Se incluyen secciones para General Style Guidelines, Web Style Guidelines y Mobile Style Guidelines.
### 5.1.1. General Style Guidelines  
Para garantizar una experiencia coherente y profesional en todas las plataformas del ecosistema FaceLoock, se ha establecido una guía general de estilos de uso común para todo el equipo de diseño y desarrollo. Estas directrices buscan alinear los principios visuales con la propuesta de valor de SmartGuard y su producto insignia, FaceLoock.
Nombre del proyecto: FaceLoock
Startup: SmartGuard
Fecha de versión: Mayo 2025
Misión de la marca
Transformar la forma en que las personas protegen sus hogares mediante el uso de tecnologías avanzadas, confiables y fáciles de usar.
Visión de la marca
Ser líderes en soluciones de seguridad residencial inteligente en América Latina, ofreciendo productos innovadores que mejoren la calidad de vida de nuestros usuarios.
Público objetivo
Propietarios de viviendas tecnológicas interesados en domótica y soluciones inteligentes.


Adultos mayores o personas con movilidad reducida que requieren accesos más seguros, cómodos y sin contacto físico.


Personalidad de la marca
La personalidad de la marca es tecnológica, confiable y cercana, enfocada en transmitir seguridad sin perder la calidez. La solución FaceLoock se comunica con claridad, respeto y serenidad, brindando confianza y facilidad de uso.
Valores fundamentales de la marca
Seguridad: Brindamos protección integral mediante tecnología avanzada.


- Confianza: Nos comprometemos con la privacidad y la fiabilidad del sistema.


- Innovación: Apostamos por soluciones tecnológicas disruptivas.


- Accesibilidad: Creamos experiencias intuitivas para todos los perfiles de usuario.


- Integridad: Operamos con transparencia, respeto y responsabilidad.

<br><img src="images/FaceLockLogo.png"></br>

Tono de comunicación
El tono será sereno, profesional y directo, especialmente en mensajes dentro de la aplicación, la web y la interacción con usuarios finales. Se prioriza la claridad y la confianza, evitando tecnicismos innecesarios y fomentando la tranquilidad del usuario.
Lineamientos visuales generales
<table border="1" cellspacing="0" cellpadding="10" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="text-align: left;">Elemento</th>
      <th style="text-align: left;">Lineamiento</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Logotipo</td>
      <td>El logo de FaceLoock representa una casa estilizada con ondas, en color azul moderno, destacando el concepto de hogar inteligente y seguridad sin contacto. Debe usarse sobre fondos claros para máxima legibilidad.</td>
    </tr>
    <tr>
      <td>Tipografía</td>
      <td>Uso preferente de Sans Serif modernas (como Montserrat o Inter) para transmitir modernidad y simplicidad. Evitar fuentes decorativas o con serifas.</td>
    </tr>
    <tr>
      <td>Colores</td>
      <td>El color azul celeste (#1E90FF aprox.) simboliza seguridad, tecnología y confianza. Se complementa con tonos neutros como blanco, gris claro y negro para una estética limpia y profesional.</td>
    </tr>
    <tr>
      <td>Iconografía</td>
      <td>Íconos minimalistas y universales. Deben ser intuitivos y coherentes con el diseño global. Se prioriza el uso de iconografía lineal.</td>
    </tr>
    <tr>
      <td>Espaciado</td>
      <td>Se mantiene un espaciado generoso y coherente para evitar sobrecarga visual y mejorar la legibilidad.</td>
    </tr>
    <tr>
      <td>Diseño responsivo</td>
      <td>Todas las interfaces deben estar optimizadas para distintos tamaños de pantalla (móvil, tablet, web). Las proporciones y tipografías se ajustan dinámicamente.</td>
    </tr>
  </tbody>
</table>

<br><img src="images/Colors.png"></br>
<br><img src="images/Typography1.png"></br>

<br><img src="images/Typography2.png"></br>
Consideraciones de accesibilidad
Contraste suficiente entre texto y fondo.


- Tamaño mínimo de texto recomendado: 16px.


- Botones accesibles para personas con movilidad reducida.


- Textos descriptivos en botones e íconos clave.


- Compatibilidad con lectores de pantalla.

### 5.1.2. Web, Mobile and IoT Style Guidelines  

En esta sección se describen las pautas específicas de diseño para las plataformas Web, Mobile e IoT del sistema FaceLoock, asegurando una presentación visual coherente, centrada en el usuario y adaptada a las características de cada canal.
Principios generales
- Consistencia visual y funcional: Todos los elementos visuales y de navegación deben mantener coherencia en estilo, color, tipografía y jerarquía, sin importar la plataforma.


- Priorización de contenido: Las funciones más relevantes deben destacarse mediante la barra lateral (Web) o la navegación inferior (Mobile).


- Interacción accesible: Uso de fuentes legibles y de buen tamaño, contrastes adecuados y componentes claramente distinguibles para facilitar la navegación.


- Adaptabilidad: Interfaces adaptadas para una experiencia fluida en distintos dispositivos y condiciones de uso.

<br><img src="images/SplashView.png"></br>

Web Style Guidelines
- Estilo de diseño: Se implementa un diseño tipo Dashboard, permitiendo una vista general del estado del sistema (usuarios autorizados, eventos recientes, alertas).


- Sidebar de navegación: Presenta las secciones clave como Inicio, Accesos, Notificaciones, Configuración, Membresía, entre otras. Facilita la exploración jerárquica de la plataforma.


- Diseño responsivo: La interfaz web se adapta automáticamente a diferentes tamaños de pantalla (PC, tablet, móviles).


- Tipografía clara y moderna: Uso de fuentes sans serif legibles, con un tamaño mínimo recomendado de 16px para texto base.


- Contrastes visuales: Se utilizan colores contrastantes (por ejemplo, azul celeste sobre blanco o negro) para resaltar botones, alertas o notificaciones.


- Componentes reutilizables: Formularios, botones y tarjetas siguen un mismo diseño reutilizable que puede aplicarse en toda la web.

<br><img src="images/Home2.png"></br>


## 5.2. Information Architecture  

La arquitectura de información de FaceLoock está diseñada para ofrecer una experiencia intuitiva, eficiente y accesible a todos los perfiles de usuario. Nuestra meta es estructurar el contenido y las funcionalidades de forma lógica y predecible, asegurando que el usuario pueda navegar y encontrar lo que necesita sin fricciones.

### 5.2.1. Organization Systems  

Para ofrecer una experiencia de usuario fluida, intuitiva y centrada en la seguridad, se ha definido una estrategia de organización del contenido que combina distintas estructuras de presentación según el propósito de cada módulo funcional dentro de FaceLoock. A continuación, se describen los principales enfoques aplicados:
Organización Visual del Contenido
- Jerárquica (Visual Hierarchy):
 Se utiliza en la página de inicio y en el panel principal del Dashboard Web. Las alertas de seguridad, el acceso rápido al botón de apertura de puerta y la vista en vivo se ubican en la parte superior izquierda. Elementos secundarios como el historial, configuración y membresía se disponen en secciones subordinadas, siguiendo una jerarquía clara.


- Secuencial (Step-by-Step):
 Se aplica en flujos como la sincronización inicial del dispositivo IoT, el registro de usuarios y la configuración del reconocimiento facial. Las tareas se presentan paso a paso con validación progresiva para evitar errores y asegurar una configuración exitosa.


- Matricial:
 En secciones como el historial de accesos o la visualización de eventos, los datos se organizan en tablas o cuadrículas que permiten comparar múltiples parámetros (fecha, hora, tipo de usuario, estado del acceso) de manera simultánea y multidimensional.


Esquemas de Categorización de Contenido
- Alfabético:
 Se aplica en la lista de usuarios registrados en la plataforma o miembros autorizados por vivienda. La organización alfabética por nombre facilita búsquedas rápidas.


- Cronológico:
 Utilizado en el historial de accesos y en las alertas de seguridad, donde los eventos se ordenan del más reciente al más antiguo, permitiendo un seguimiento lógico de la actividad del sistema.


- Por Tópicos:
 Empleado en la sección de configuración, donde se agrupan funciones según su tipo: privacidad, notificaciones, biometría, dispositivos, etc. Esto permite al usuario identificar y gestionar fácilmente las funcionalidades según su categoría.

### 5.2.2. Labeling Systems  

La estrategia de etiquetado en SmartGuard – FaceLoock prioriza la claridad, la simplicidad y la familiaridad con conceptos del ámbito de seguridad tecnológica y domótica. Se busca evitar ambigüedades y guiar a los usuarios mediante nombres de secciones y botones que reflejen exactamente su funcionalidad.
Principios de etiquetado
- Etiquetas Simples y Claras:
 Todas las etiquetas contienen 1 a 3 palabras clave, sin tecnicismos. Ejemplo: “Ver historial”, “Agregar rostro”, “Modo noche”.


- Asociaciones Coherentes:
 Cada etiqueta está estrictamente alineada con su contenido funcional. Por ejemplo, “Dispositivo sincronizado” solo se utiliza cuando el FaceLoock ha sido correctamente vinculado con una vivienda.

Etiquetas utilizadas en la plataforma
<table border="1" cellspacing="0" cellpadding="10" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="text-align: left;">Etiqueta</th>
      <th style="text-align: left;">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Inicio</td>
      <td>Pantalla principal del Dashboard donde se muestran alertas, eventos recientes y control rápido.</td>
    </tr>
    <tr>
      <td>Agregar rostro</td>
      <td>Botón que abre el formulario para registrar un nuevo usuario autorizado.</td>
    </tr>
    <tr>
      <td>Ver historial</td>
      <td>Sección con registros de accesos, denegaciones e intentos fallidos.</td>
    </tr>
    <tr>
      <td>Notificaciones</td>
      <td>Centro de alertas configurables.</td>
    </tr>
    <tr>
      <td>Configuración</td>
      <td>Preferencias de cuenta, ajustes del dispositivo y opciones de seguridad.</td>
    </tr>
    <tr>
      <td>Membresía</td>
      <td>Visualización del plan activo, opciones de renovación y detalles de beneficios.</td>
    </tr>
    <tr>
      <td>Dispositivo IoT</td>
      <td>Estado de conexión, configuración del hardware FaceLoock y diagnóstico.</td>
    </tr>
    <tr>
      <td>Miembros autorizados</td>
      <td>Lista editable de personas habilitadas para ingresar al hogar.</td>
    </tr>
    <tr>
      <td>Cerrar sesión</td>
      <td>Opción para cerrar la sesión de usuario en app web o móvil.</td>
    </tr>
  </tbody>
</table>



### 5.2.3. SEO Tags and Meta Tags  


La estrategia SEO de *FaceLoock* tiene como objetivo posicionar eficazmente el producto en buscadores y mejorar la visibilidad tanto en web como en tiendas de aplicaciones.

## Para Sitio Web (Landing Page y Plataforma Web)

- ### Title

  - **Landing Page:**  
*"Bienvenido a FaceLoock - La solución innovadora para acceder a tu hogar de manera segura y sin contacto"*

  - **Web App:**  
*"Convertimos tu hogar más seguro e inteligente que nunca 💡"*

- ### Meta Description

  - *"Consigue tu cerradura inteligente y dale mayor seguridad a tu hogar."*

- ### Meta Keywords

  - *seguridad inteligente, acceso facial, datos biométricos, domótica, casa inteligente, cerradura sin llave, control de accesos, SmartGuard, FaceLoock*

- ### Author

  - **Landing Page & Web Application:** *SmartGuard*

## Open Graph Tags (para compartir en redes)

  - **title:** *FaceLoock - Accede a tu hogar con tecnología facial*  
  - **description:** *SmartGuard es una startup innovadora dedicada a crear soluciones de seguridad inteligente mediante tecnología avanzada, proporcionando una forma moderna y segura de acceder a tu hogar.*  
  - **image:**
    <br><img src="images/FaceLockIMG.png"></br>
  - **url:** [https://upc-pre-202510-1asi0572-2952-smartguard.github.io/landing-page/](https://upc-pre-202510-1asi0572-2952-smartguard.github.io/landing-page/)


### 5.2.4. Searching Systems  
### 5.2.5. Navigation Systems  
## 5.3. Landing Page UI Design  
### 5.3.1. Landing Page Wireframe  
### 5.3.2. Landing Page Mock-up  
## 5.4. Applications UX/UI Design  
### 5.4.1. Applications Wireframes  

### Web Application

- **Sección “Vista General”**

<img src="images/WireSplashView.png">

*Draft de la sección Vista General*


- **Sección “Login”**

<img src="images/WireLogin.png">

*Draft de la sección Login*


- **Sección “Home”**

<img src="images/WireHome.png">

*Draft de la sección Home*


- **Sección “Agregar nueva vivienda”**

<img src="images/WireSetNewSpace.png">

*Draft de la sección Agregar Nueva Vivienda*


- **Sección “Membresía”**

<img src="images/WireMembership.png">

*Draft de la sección Membresía*


- **Sección “Estadísticas”**

<img src="images/WireStatistics.png">

*Draft de la sección Estadísticas*


- **Sección “Miembros”**

<img src="images/WireMembers.png">

*Draft de la sección Miembros*


- **Sección “Configuración”**

<img src="images/WireConfiguration.png">

*Draft de la sección Configuración*


- **Sección “Perfil de Usuario”**

<img src="images/WireProfile.png">

*Draft de la sección Perfil de Usuario*


### 5.4.2. Applications Wireflow Diagrams  

<img src="images/IoT - User Goal 1.jpg">
User Goal 1: Ver y editar su perfil de usuario
Taskflow:
- Abrir la aplicación (Home View)


- Seleccionar "Perfil de Usuario"


- Visualizar datos personales (Nombre, Rol, Dirección, etc.)


- Pulsar "Editar"


- Modificar los campos deseados


- Guardar cambios


- Confirmación de actualización




<img src="images/IoT - User Goal 2.jpg">

User Goal 2: Configurar alertas y opciones generales
Taskflow:
- Desde el Home, ir a "Configuración"


- Elegir la pestaña "Alertas"


- Activar o desactivar opciones (alert option 1, 2, 3...)


- Regresar y seleccionar "General"


- Configurar preferencias generales


- Guardar cambios



<img src="images/IoT - User Goal 3_ Registrar un nuevo hogar.jpg">

User Goal 3: Registrar un nuevo hogar
Taskflow:
- Desde la vista "Listado de Hogares Activos"


- Pulsar "Registrar"


- Ingresar los datos del hogar (Nombre, Categoría)


- Seleccionar número de miembros


- Confirmar el registro


- Acceder al nuevo hogar desde el listado


<img src="images/IoT - User Goal 4.jpg">

User Goal 4: Gestionar los miembros del hogar
Taskflow:
- Desde el menú, ir a "Miembros"


- Visualizar listado de miembros (nombre, rol, edad)


- Pulsar en un miembro específico


- Editar rol o información


- Guardar cambios


- Agregar o eliminar miembros según se requiera


<img src="images/IoT - User Goal 5.jpg">

User Goal 5: Consultar estadísticas de acceso
Taskflow:
- Ingresar al apartado "Estadísticas"


- Elegir vista por día o por miembro


- Filtrar por fechas o dispositivos


- Analizar gráficos de accesos, incidentes o uso


- Exportar o compartir resultados (opcional)

### 5.4.3. Applications Mock-ups  

### Web Application

- **Sección “Vista General”**

<img src="images/SplashView.png">


En esta sección se podrá ver nuestro slogan con una pequeña descripción de lo que nuestra Startup representa.

- **Sección “Login”**

<img src="images/Login.png">


En la presente sección, el usuario podrá ingresar a nuestro sitio web con las credenciales como Email y Contraseña, además podrá registrarse completamente gratis, y como última opción podrá iniciar sesión con Google, Facebook o Apple

- **Sección “Home”**

<img src="images/Home.png">


En la sección Home de nuestro sitio web, se visualizará la opción principal de poder registrar tu hogar para que el sistema IoT se adhiera correctamente, en este caso La Cerradura Inteligente. Además, se mostrará diversas opciones con vistas a otras funcionalidades

- **Sección “Agregar nueva vivienda”**

<img src="images/SetNewSpace.png">


En la sección Agregar nueva vivienda, el usuario podrá interactuar con nuestro sitio web y seguir un formulario con la finalidad de registrar su hogar predeterminado, contará con 7 pasos en los cuales se solicitará información clave como el nombre, la dirección, el tipo de hogar, etc.

- **Sección “Perfil”**

<img src="images/Profile.png">


En la sección Perfil de Usuario, se podrá visualizar una vista la cual mostrará datos del usuario registrado como Nombre, Email, Telefono Celular, Rol de Usuario, Ubicación y Dirección. Además, existirán 2 opciones para editar los datos del usuario o para cambiar la contraseña de la cuenta.

- **Sección “Configuracion”**

<img src="images/Configuration.png">


En la vista de Configuración, estarán todos las configuraciones que nuestro web application ofrece. Existirán campos como Alertas, la cual será la encargada de notificar y enviar señales de aviso al usuario sobre el acceso o advertencias del sistema. Y también se encuentra la sub opción General, que serán todos los ajustes generales que puede ofrecer nuestro sitio web

- **Sección “Miembros”**

<img src="images/Members.png">


En la sección Miembros, se registrará los miembros que están correctamente registrados y validados por el Usuario Administrador/a, además de contener una pequeña descripción de ellos y mostrar datos de relevancia como la edad, el tipo de parentesco y el rol.
Finalmente, existirá la posibilidad de agregar más miembros o eliminarlos a dichos, pero con otra condición previa.

- **Sección “Estadisticas”**

<img src="images/Statistics.png">


En la sección Estadísticas, se mostrará una opción para filtrar el sitio y la frecuencia al que desea consultar para visualizar la actividad, dicha actividad consta de controlar los: Accesos (cuantas personas entrarán a tu hogar asegurado), Miembros (quienes de los miembros registrados fue admitido), Dispositivos (aquellos dispositivos al cual admitieron o denegaron un acceso), Incidentes (factores de riesgo que podrían afectar la integridad y seguridad del Administrado, como intento de ingreso frustrado). Además de mostrar gráficos estadísticos como Accesos por día y Accesos por Miembro.

- **Sección “Membresía”**

<img src="images/Membership.png">


Con respecto a la sección Membresía, mostrará un mensaje de por qué optar por nuestra membresía ofrecida, que beneficios este tendrá en contraste con el plan gratis o “Free” que inicialmente se otorga predeterminadamente y por consiguiente, cuanto es el costo de dicha membresía de opciones premiums




### 5.4.4. Applications User Flow Diagrams  




## 5.5. Applications Prototyping  

Para garantizar una experiencia fluida y centrada en la seguridad del usuario, hemos desarrollado un prototipo funcional que contempla las principales secciones de nuestra plataforma digital. A continuación, se detallan de forma resumida los componentes clave incluidos en este prototipo:

- **Introducción**: Se presenta una vista inicial con el eslogan y una breve descripción del propósito de la plataforma, orientada a la protección del hogar.

- **Ingreso a la plataforma**: Los usuarios pueden acceder mediante credenciales tradicionales o con cuentas de terceros como Google, Facebook o Apple. También se permite el registro gratuito.

- **Pantalla principal (Home)**: Ofrece acceso rápido a funciones esenciales, como registrar una vivienda y explorar el sistema de cerradura inteligente.

- **Registro de vivienda**: Se guía al usuario mediante un formulario paso a paso para ingresar datos relevantes sobre su hogar.

- **Perfil de usuario**: Muestra la información básica del usuario y permite editarla, así como modificar la contraseña de forma sencilla.

- **Configuraciones**: Se agrupan opciones relacionadas a notificaciones de seguridad y ajustes generales de la aplicación.

- **Gestión de miembros**: Se listan los miembros autorizados, permitiendo su administración según permisos establecidos por el usuario principal.

- **Panel de estadísticas**: Proporciona una vista analítica de la actividad del hogar, incluyendo accesos, dispositivos, alertas y otros indicadores clave.

- **Membresía**: Se informa sobre los beneficios de los planes premium frente al gratuito, destacando mejoras funcionales y costos asociados.

---

El prototipo desarrollado refleja la estructura y flujo de interacción pensados para brindar una experiencia segura, clara y accesible al usuario final. A continuación, se presentará un video que ilustre la interacción de un supuesto Usuario final con nuestro prototipo:

<img src="images/Prototyping.png">

Link del video: [Prototyping](https://drive.google.com/file/d/1FmPEuNleyq4nlumBAlgCWFLUjs9pcSf5/view?usp=sharing)


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


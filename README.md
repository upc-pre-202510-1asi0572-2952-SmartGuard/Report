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

El sistema de búsqueda en **FaceLoock** está optimizado para que los usuarios puedan acceder rápidamente a información específica, incluso dentro de conjuntos de datos complejos como historiales, dispositivos y perfiles.

---

### Opciones de Búsqueda

- **Búsqueda por Palabras Clave**:  
  Permite localizar registros por nombre de usuario, fecha, tipo de acceso o estado del dispositivo.

- **Búsqueda Avanzada**:  
  Incluye filtros combinados para consultas más precisas (por ejemplo, “accesos fallidos del 1 al 5 de mayo por usuario X”).

---

### Filtros Disponibles

- **Por Categoría**:  
  Accesos, Dispositivos, Usuarios, Estadísticas, Configuración.

- **Por Fecha**:  
  Desde-hasta, o intervalos comunes (última semana, mes actual).

- **Por Estado**:  
  Éxito, fallido, manual, automático, remoto.

- **Por Tipo de Dispositivo**:  
  Cámara, cerradura, panel de control.

---

### Presentación de Resultados

- Los resultados se mostrarán en **tarjetas** o **listas jerarquizadas** según relevancia o fecha.
- Cada resultado incluye:
  - Resumen visual (ícono, color de estado)
  - Fecha y hora
  - Usuario implicado
- Se ofrecerá una **vista detallada** al hacer clic en cualquier resultado, con opción de **exportar registros**.

---

Este sistema mejora la **eficiencia operativa** y la **trazabilidad**, fundamentales en un entorno de seguridad residencial.

### 5.2.5. Navigation Systems  

Nuestra estrategia de navegación para FaceLoock está orientada a ofrecer una experiencia fluida, clara y orientada a objetivos tanto en la Landing Page como en nuestras aplicaciones web y móviles. Se busca minimizar la fricción, facilitar la exploración y ayudar a los usuarios a alcanzar sus metas rápidamente, especialmente en contextos sensibles como el acceso a una vivienda.

---

### Para el Landing Page

- **Menú de Navegación Claro:**  
Se implementará un menú superior fijo y accesible, con enlaces directos a las secciones clave como:  
“¿Cómo funciona?”, “Características”, “Planes”, “Descargar app” y “Soporte”.  
El menú será responsivo, adaptándose a dispositivos móviles con una versión tipo “hamburguesa” para facilitar su uso.

- **Llamadas a la Acción (CTA) Destacadas:**  
Los botones de CTA estarán ubicados estratégicamente a lo largo del sitio, especialmente en la primera pantalla (“hero section”), el área de beneficios y la sección final de contacto.  
Ejemplos:

  - “Descargar App”
  - “Solicita una demostración”
  - “Activa tu FaceLoock”

Estas llamadas estarán diseñadas con alto contraste y texto persuasivo, invitando a la acción inmediata.

- **Scroll Suave y Secciones Bien Definidas:**  
La página contará con desplazamiento fluido (“smooth scroll”) y diseño seccional (por bloques), donde cada segmento tendrá un título claro, íconos ilustrativos y contenido breve.  
Esto mejorará la comprensión del contenido y evitará que el usuario se sienta perdido al navegar.

---

### Para las Aplicaciones

- **Interfaz Intuitiva y Fácil de Usar:**  
Las aplicaciones presentan una estructura simple, centrada en tareas.  
Los íconos son reconocibles y las acciones principales están a no más de dos toques o clics de distancia.  
El diseño está orientado a facilitar su uso por todo tipo de usuarios, incluidos adultos mayores o personas no técnicas.

- **Barra de Navegación Inferior (App Móvil) y Lateral (App Web):**

  - En la aplicación móvil, se implementa una barra inferior con acceso directo a:  
  Inicio, Cámara en Vivo, Historial, Notificaciones y Ajustes.

  - En la aplicación web, se emplea una barra lateral con módulos como:  
  Dashboard, Usuarios, Dispositivo IoT, Seguridad, Perfil y Membresía.

Estas barras aseguran que las funciones más utilizadas estén siempre visibles y accesibles.

- **Flujo de Tareas Guiado:**  
Funciones como registrar un nuevo rostro, configurar el dispositivo o revisar eventos de seguridad se presentan mediante un flujo paso a paso con instrucciones claras.  
Este enfoque reduce la tasa de errores y aumenta la confianza del usuario al operar el sistema.

---

Al aplicar estos principios de navegación tanto en la web como en las aplicaciones móviles, garantizamos una experiencia centrada en el usuario, fácil de comprender y con una curva de aprendizaje mínima.  
Esto es fundamental para un sistema como FaceLoock, cuyo éxito depende de la confianza, la rapidez de uso y la seguridad percibida.



## 5.3. Landing Page UI Design

### 5.3.1. Landing Page Wireframe

- Sección Inicio
 <img src="https://media.discordapp.net/attachments/1364349164074438756/1372296688047231066/image.png?ex=68264262&is=6824f0e2&hm=f03606205a99e8c7250b348c0d37c355d1479ad7e623ed5232092939f2b3dd06&=&format=webp&quality=lossless&width=790&height=561" alt="Landing Page Wireframe - Inicio" style="max-width:100%; height:auto;" />

- Sección Sobre Nosotros  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296688311599104/image.png?ex=68264262&is=6824f0e2&hm=a327b885d7a016d0227e56967e516c82d6ebdebc13a3c3855d3eec7ee925b5af&=&format=webp&quality=lossless&width=648&height=439" alt="Landing Page Wireframe - Sobre Nosotros" style="max-width:100%; height:auto;" />
    
- Sección Servicios  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296688680829118/image.png?ex=68264262&is=6824f0e2&hm=c8560cc29e95343c6905b23d3330a279a9be3e542a1260363ee42199d624de5b&=&format=webp&quality=lossless&width=648&height=449" alt="Landing Page Wireframe - Servicios" style="max-width:100%; height:auto;" />

- Sección de Planes de Suscripción  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296689049931776/image.png?ex=68264262&is=6824f0e2&hm=f996dd09811092066b9fe425b81ddc2278600a19bd5ddabea53a3b964d019b00&=&format=webp&quality=lossless&width=648&height=525" alt="Landing Page Wireframe - Planes de Suscripción" style="max-width:100%; height:auto;" />

- Sección Testimonios  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296689318101063/image.png?ex=68264262&is=6824f0e2&hm=6f7e6f7b6409d9675dd5d82901fec475f0a85ec7938f84b8e72d04b16d729594&=&format=webp&quality=lossless&width=648&height=405" alt="Landing Page Wireframe - Testimonios" style="max-width:100%; height:auto;" />

- Sección Contacto  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296689595191428/image.png?ex=68264262&is=6824f0e2&hm=9e067785a4ee4e15324a06ee1e44c0655f930d03530ba507f277aa3ee1165095&=&format=webp&quality=lossless&width=648&height=354" alt="Landing Page Wireframe - Contacto" style="max-width:100%; height:auto;" />

### 5.3.2. Landing Page Mock-up

- Sección Inicio  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296689871753276/image.png?ex=68264262&is=6824f0e2&hm=460d0da02db55c9cd859314c667482f682ca13f6317dde7dd84844b16fbf20e2&=&format=webp&quality=lossless&width=648&height=317" alt="Landing Page Mock-up - Inicio" style="max-width:100%; height:auto;" />

- Sección Sobre Nosotros  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296690224070737/image.png?ex=68264262&is=6824f0e2&hm=8e22555c4961329773ea0dab180492c5484b2b23acbff940fdc1efd0ae0ba86e&=&format=webp&quality=lossless&width=648&height=259" alt="Landing Page Mock-up - Sobre Nosotros" style="max-width:100%; height:auto;" />

- Sección Servicios  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296690500899019/image.png?ex=68264263&is=6824f0e3&hm=6fa724e612be0fd0e51de71aeda0ed927c3f5b4aa54f7dc95e7c1d2e863c52e6&=&format=webp&quality=lossless&width=648&height=459" alt="Landing Page Mock-up - Servicios" style="max-width:100%; height:auto;" />

- Sección de Planes de Suscripción  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296690920460459/image.png?ex=68264263&is=6824f0e3&hm=830fbc6a248883c666a1bab3e2e1daf01794a10f6147f4da23c268786bdfbf8c&=&format=webp&quality=lossless&width=648&height=256" alt="Landing Page Mock-up - Planes de Suscripción" style="max-width:100%; height:auto;" />

- Sección Testimonios  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296747937828945/image.png?ex=68264270&is=6824f0f0&hm=be760ed45c82a8dbef84ff540f5a3dd8b55d8ba379da1a776c96b6fa0662f9ba&=&format=webp&quality=lossless&width=648&height=332" alt="Landing Page Mock-up - Testimonios" style="max-width:100%; height:auto;" />

- Sección Contacto  
<img src="https://media.discordapp.net/attachments/1364349164074438756/1372296748235489340/image.png?ex=68264270&is=6824f0f0&hm=c4aefad189dc3d209a5ccaa237c76cc19418371d8c999e8767513a3e84777c54&=&format=webp&quality=lossless&width=648&height=330" alt="Landing Page Mock-up - Contacto" style="max-width:100%; height:auto;" />

  
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

<img src="images/IoT -  User Flow 1.jpg">
User Flow 1: Ver y editar su perfil de usuario
Taskflow:
- Abrir la aplicación (Home View)


- Seleccionar "Perfil de Usuario"


- Visualizar datos personales (Nombre, Rol, Dirección, etc.)


- Pulsar "Editar"


- Modificar los campos deseados


- Guardar cambios


- Confirmación de actualización




<img src="images/IoT -  User Flow 2.jpg">

User Flow 2: Configurar alertas y opciones generales
Taskflow:
- Desde el Home, ir a "Configuración"


- Elegir la pestaña "Alertas"


- Activar o desactivar opciones (alert option 1, 2, 3...)


- Regresar y seleccionar "General"


- Configurar preferencias generales


- Guardar cambios



<img src="images/IoT - User Flow 3.jpg">

User Flow 3: Registrar un nuevo hogar
Taskflow:
- Desde la vista "Listado de Hogares Activos"


- Pulsar "Registrar"


- Ingresar los datos del hogar (Nombre, Categoría)


- Seleccionar número de miembros


- Confirmar el registro


- Acceder al nuevo hogar desde el listado


<img src="images/IoT - User Flow 4.jpg">

User Flow 4: Gestionar los miembros del hogar
Taskflow:
- Desde el menú, ir a "Miembros"


- Visualizar listado de miembros (nombre, rol, edad)


- Pulsar en un miembro específico


- Editar rol o información


- Guardar cambios


- Agregar o eliminar miembros según se requiera


<img src="images/IoT -  User Flow 5.jpg">

User Flow 5: Consultar estadísticas de acceso
Taskflow:
- Ingresar al apartado "Estadísticas"


- Elegir vista por día o por miembro


- Filtrar por fechas o dispositivos


- Analizar gráficos de accesos, incidentes o uso


- Exportar o compartir resultados (opcional)


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

# Gestión de Proyecto

## Formato Markdown

**Propósito:**  
Organizar la documentación del proyecto en múltiples archivos con extensión `.md`, segmentados en capítulos. Estos archivos servirán para desarrollar el informe final, que será posteriormente exportado a formato PDF para su entrega en el aula virtual.

**Referencia:**  
- [Markdown en GitHub](https://guides.github.com/features/mastering-markdown/)

---

## Git y GitHub

**Propósito:**  
Control de versiones para la gestión del código fuente y colaboración entre los miembros del equipo.

**Referencias:**  
- [Git](https://git-scm.com/)  
- [GitHub](https://github.com/)

---

## WhatsApp y Discord

**Propósito:**  
Comunicación, coordinación de reuniones y compartición de documentación relevante entre los integrantes del equipo.

**Referencias:**  
- [WhatsApp](https://www.whatsapp.com/)  
- [Discord](https://discord.com/)

---

## Pivotal Tracker

**Propósito:**  
Herramienta para el control del proyecto y asignación de tareas a los miembros del equipo de desarrollo.

**Referencia:**  
- [Pivotal Tracker](https://www.pivotaltracker.com/)

---

# Diseño de Producto UX/UI

## Figma

**Propósito:**  
Elaboración de wireframes, mock-ups y prototipos de la interfaz de usuario.

**Referencia:**  
- [Figma](https://www.figma.com/)

---

## Miro

**Propósito:**  
Creación de mapas de escenarios As-Is y To-Be para análisis y planificación.

**Referencia:**  
- [Miro](https://miro.com/)

---

## Structurizr y Visual Paradigm

**Propósito:**  
Desarrollo de diagramas C4 para la visualización arquitectónica del software.

**Referencias:**  
- [Structurizr](https://structurizr.com/)  
- [Visual Paradigm](https://www.visual-paradigm.com/)

---

## UXPressia

**Propósito:**  
Elaboración de User Personas, mapas de empatía, mapas de viaje del usuario (Journey Maps) y mapas de impacto.

**Referencia:**  
- [UXPressia](https://uxpressia.com/)

---

# Desarrollo de Software

## Visual Studio Code, Vue y C++

**Propósito:**  
- **Visual Studio Code:** Editor de código utilizado para el desarrollo del Landing Page, aplicaciones frontend y servicios web.  
- **Vue.js Framework:** Desarrollo frontend usando HTML5, CSS3 y JavaScript.  
- Para la primera entrega se utilizó una Fake API basada en Json Server.

**Referencias:**  
- [Visual Studio Code](https://code.visualstudio.com/)  
- [Vue.js](https://vuejs.org/)  
- [JSON Server](https://github.com/typicode/json-server)

---

# Pruebas y Despliegue de Software

## GitHub Pages

**Propósito:**  
Plataforma para desplegar la landing page.

**Referencia:**  
- [GitHub Pages](https://pages.github.com/)

---

## Netlify

**Propósito:**  
Servicio para desplegar aplicaciones web completas.

**Referencia:**  
- [Netlify](https://www.netlify.com/)

---

# Documentación de Software

## OpenAPI Specification vía Swagger

**Propósito:**  
Documentación formal de los servicios web.

**Referencia:**  
- [Swagger](https://swagger.io/specification/)

---

# Para Dispositivos IoT

## ArduinoNt

**Propósito:**  
Gestión de dispositivos IoT, computación en la nube y en el borde (Edge Computing).

**Referencia:**  
- [Arduino](https://www.arduino.cc/)


### 6.1.2. Source Code Management  

# Control de Versiones y Commits Convencionales

#### GitHub y Metodología Gitflow

Como se indicó en la sección anterior, la plataforma y sistema utilizado para el control de versiones es **GitHub**.  
Se adopta la metodología **Gitflow**, basada en la propuesta de Vincent Driessen, que organiza las ramas del repositorio de la siguiente manera:

- **Rama Principal (Main/Master):**  
  La rama principal, denominada `main`, siempre debe mantenerse en un estado estable y listo para producción. Es la rama desde la cual se realizan los despliegues a producción.

- **Rama de Desarrollo (Develop):**  
  Esta rama contiene los cambios más recientes del desarrollo que se preparan para la siguiente versión. Se considera la rama de integración, ya que desde ella se generan compilaciones automáticas periódicas, generalmente durante la noche.

- **Rama de Lanzamiento (Release):**  
  Esta rama se usa para preparar un nuevo lanzamiento de producción, permitiendo realizar ajustes finales, corregir errores menores y preparar los metadatos necesarios para la versión.  
  Se denomina `release/[version-del-lanzamiento]`.

- **Rama de Funcionalidades (Feature):**  
  Cada nueva funcionalidad o mejora se desarrolla en una rama específica que se deriva de la rama `develop`. Al finalizar el desarrollo, estas ramas deben fusionarse nuevamente en `develop`.  
  Se nombran como `feature/[nombre-de-la-funcionalidad]`.

- **Rama de Corrección Rápida (Hotfix):**  
  Se utiliza para resolver urgentemente errores críticos detectados en producción. Estas ramas se crean a partir de la rama `main` en el punto correspondiente a la versión afectada y, una vez corregido el problema, se fusionan tanto en `main` como en `develop` para mantener la coherencia.  
  La notación es `hotfix/[version-de-corrección]`.

---

#### Commits Convencionales

Para mantener un historial claro y consistente, el proyecto sigue la convención de **"Conventional Commits 2.0.0"**.  
La estructura estándar es:


##### Tipos de commit:

- `fix`: Corrección de errores.  
- `feat`: Incorporación de nuevas funcionalidades.  
- `BREAKING CHANGE`: Indica un cambio que rompe la compatibilidad con versiones anteriores (se puede incluir como un *footer* o con un signo `!` después del tipo).  
- `add`: Añadir archivos o carpetas.  
- `test`: Inclusión de nuevos tests.  

**Ámbito opcional:**  
Solo se incluye en ramas `release`, `hotfix` y `main` para señalar la versión correspondiente.

---

#### Repositorios del Proyecto

- **Landing Page:**  
  [https://github.com/upc-pre-202510-1asi0572-2952-SmartGuard/landing-page](https://github.com/upc-pre-202510-1asi0572-2952-SmartGuard/landing-page)

- **Aplicación Web Frontend:**  
  [https://github.com/upc-pre-202510-1asi0572-2952-SmartGuard/aplication-web](https://github.com/upc-pre-202510-1asi0572-2952-SmartGuard/aplication-web)

- **Aplicación Móvil Frontend:**  
  *(Repositorio aún no especificado)*

- **Informe del Proyecto:**  
  [https://github.com/upc-pre-202510-1asi0572-2952-SmartGuard/Report](https://github.com/upc-pre-202510-1asi0572-2952-SmartGuard/Report)


### 6.1.3. Source Code Style Guide & Conventions

#### HTML Style Guide for the project

- Siempre declarar el Document Type: `<!DOCTYPE html>`.
- Utiliza lowercase para los elementos y atributos, por ejemplo: `body`, `p`, `label`, `href`.
- Siempre agregar los atributos entre comillas, como en `class="striped"`.

#### Gherkin Specifications

- Los escenarios deben mantener la estructura simple: **Given**, **When**, **Then**.
- Para los steps adicionales se utiliza **And**.

**Ejemplo:**

(Aquí se incluiría un ejemplo típico de escenario con Given, When, Then, And)

#### Angular Code Style Guide

##### Single responsibility - Rule of One

- Definir los componentes por tarea, de modo que solo hagan una cosa.
- Asegurarse de que el componente no exceda las 100 líneas de código para evitar bugs causados por la combinación accidental de componentes.

##### Single responsibility - Small functions

- Utilizar funciones pequeñas (no más de 100 líneas de código) facilita su testeo, lectura y mantenimiento, y promueve el reuso.

##### General Naming Guidelines

- Sigue un patrón que describa el feature y luego el tipo.
- El patrón recomendado es: `feature.type.ts`.

##### Symbols and file names

- Usa Upper camel case para los nombres de clase.
- Añade el símbolo del nombre con el sufijo, como:
  - `Component`
  - `Directive`
  - `Module`
  - `Pipe`
  - `Service`
- Dale al nombre del archivo el mismo sufijo.


### 6.1.4. Software Deployment Configuration  


#### Despliegue de la aplicación web en Netlify

1. **Crear un nuevo proyecto en Netlify**  
   Inicia sesión en Netlify y haz clic en **"Add new site"**. Este paso te permitirá crear un nuevo proyecto para que Netlify gestione automáticamente el despliegue desde tu repositorio.  
   <br/>
   ![Paso 1 - Crear nuevo proyecto](./images/netly1.png)  
   <br/>

2. **Seleccionar el repositorio desde GitHub**  
   Conecta tu cuenta de GitHub (si no lo hiciste previamente) y selecciona el repositorio que contiene el proyecto a desplegar.  
   <br/>
   ![Paso 2 - Seleccionar repositorio](./images/netly2.png)  
   <br/>

3. **Configurar la rama y comandos de despliegue**  
   Elige la rama desde la cual deseas hacer el deploy (por ejemplo, `main` o `deploy`) y configura el directorio de salida (por defecto suele ser `dist/` en proyectos Vue.js). Luego, guarda los cambios.  
   <br/>
   ![Paso 3 - Configurar rama](./images/netly3.png)  
   <br/>

4. **Hacer clic en el botón “Deploy Site”**  
   Finalmente, haz clic en **"Deploy Site"** para que Netlify construya y despliegue tu aplicación automáticamente.  
   Una vez finalizado el proceso, se te proporcionará una URL pública donde tu app estará disponible.  
   <br/>
   ![Paso 4 - Iniciar despliegue](./images/netly4.png)


## 6.2. Landing Page, Services & Applications Implementation  


### 6.2.1. Sprint 1

Durante el primer sprint, el equipo se centró en los siguientes entregables clave del proyecto **FaceLoock**:

- Diseño de la arquitectura de software para la solución de acceso inteligente a viviendas.
- Implementación y despliegue exitoso de la landing page del producto.
- Desarrollo y publicación inicial de la Web Application funcional, permitiendo navegación básica y presentación del valor principal de FaceLoock.

---

#### 6.2.1.1. Sprint Planning 1  

- **Sprint #:** 1  
- **Date:** 13/05/2025  
- **Time:** 20:00  
- **Location:** Reunión virtual vía Discord  
- **Prepared By:** Tony Ramos Najar  
- **Attendees:**  
  - Fernando Aquino Iman  
  - Pérez García David Alexander  
  - Gonzales Gomez Antonella Frida  
  - Ramos Najar Tony Alexander  
  - Zárate Gamarra Luis Alejandro  

- **Sprint n – 1 Review Summary:**  
  Acordes de este nuestro primer Sprint

- **Sprint n – 1 Retrospective Summary:**  
  Este es el primer Sprint de nuestro startup

- **Sprint Goal & User Stories:**  
  - **Sprint n Goal:**  
    Ver detalles del informe y correcciones en base a la retroalimentación previa del primer entregable, despliegue de la landing page y del front end

- **Sprint n Velocity:**  
  - **Sum of Story Points:**
    10
    

---

#### 6.2.1.2. Aspect Leaders and Collaborators. 

En esta sección se identifican los responsables principales (leaders) y los colaboradores clave (collaborators) involucrados en el diseño, desarrollo y validación del aspecto específico que se está documentando (por ejemplo, navegación, sistema de búsqueda, seguridad, etc.).

##### Aspecto: Navegación en Application Web

- **Líder del Aspecto:**  
  - Nombre: Tony Ramos  
  - Rol: UX Lead  
  - Responsabilidades: Definición de la experiencia de usuario, coordinación con equipo frontend, validación de prototipos con usuarios.

- **Colaboradores:**  
  - Fernando Aquino Iman — Frontend Developer (implementación en Vue)  
  - Zárate Gamarra, Luis Alejandro — Frontend Developer (implementación en Vue)  
  - Ramos Najar, Tony Alexander — UI Designer (Elaboración de Wireframes y Mockups en Figma, Prototype)  
  - Pérez García David Alexander — UI Designer (Elaboración de Wireframes y Mockups en Figma)

##### Aspecto: Navegación en Landing Page

- **Líder del Aspecto:**  
  - Nombre: Antonella Gonzales  
  - Rol: UI Designer  
  - Responsabilidades: Correcto deploy y funcionamiento de la Landing Page

- **Colaboradores:**  
  - Gonzales Gomez, Antonella Frida — Landing Developer (implementación en HTML y CSS)

Nuestro equipo trabaja en conjunto para asegurar que el aspecto cumpla con los requerimientos funcionales y de experiencia definidos en las etapas anteriores del proyecto.

---

#### 6.2.1.3. Sprint Backlog 1

<img src="images/Trello.png">

- **Enlace Trello:**  
  https://trello.com/invite/b/6824f13c7a60a1edbdab2624/ATTI2ecc2bcca31cda8df4e328cb0a20e3e5969404E9/sprint-1-smartguard

---

#### 6.2.1.4. Development Evidence for Sprint Review.  

| Repository       | Branch | Commit Id | Commit Message                                                | Commit On    |
|------------------|--------|-----------|----------------------------------------------------------------|--------------|
| application-web  | main   | 2b13d8e   | Initial Commit                                                 | 14/05/2025   |
| application-web  | main   | 5edd3d9   | Merge remote 'origin/main' with local main                    | 14/05/2025   |
| application-web  | main   | d86a4ca   | Merge branch 'main' of https://github.com/.../aplication-web  | 14/05/2025   |
| application-web  | main   | f25e9ce   | Merge remote 'origin/main' with local main                    | 14/05/2025   |
| application-web  | main   | 09e874c   | add redirections routes                                       | 14/05/2025   |
| application-web  | main   | a81b0e3   | add config netlify                                             | 14/05/2025   |
| application-web  | main   | 947e4e0   | fixed name to route sidebar                                   | 14/05/2025   |
| application-web  | main   | 84c7eaf   | fixed name checkIcon to check                                 | 14/05/2025   |
| application-web  | main   | b575a86   | fixed styles in splashview                                    | 14/05/2025   |

---

#### 6.2.1.5. Testing Suite Evidence for Sprint Review.  

Para este primer sprint, no se realizó ningún tipo de prueba.


#### 6.2.1.6. Execution Evidence for Sprint Review.  

Durante este sprint, se completaron los entregables:

- Primera versión de la Aplicación Web  
- Primera versión de la Landing Page

<img src="images/Login.png">

<img src="images/LandingPage1.png">

---

#### 6.2.1.7. Services Documentation Evidence for Sprint Review.  

Durante el desarrollo de este sprint, se utilizó data estática para simular nuestro servicio de backend mientras este se encontraba en desarrollo.

---

#### 6.2.1.8. Software Deployment Evidence for Sprint Review.  

A continuación, brindamos evidencia de lo trabajado en el presente sprint:

- **Landing Page desplegada:**  
  https://upc-pre-202510-1asi0572-2952-smartguard.github.io/landing-page/

- **Web Application desplegada:**  
  https://6824e56fcf04376e4520c2b3--smartguard-web.netlify.app/login

#### 6.2.1.9. Team Collaboration Insights during Sprint.
 
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


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


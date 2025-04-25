# Capítulo III: Requirements Specification
## 3.1. To-Be Scenario Mapping

<img src="./assets/To-Be-Mapping-Scennary.JPG" />

## 3.2. User Stories 

  <table border="1" style="width: 100%; border-collapse: collapse;">
    <thead>
      <tr>
        <th>Epic/Story</th>
        <th>Título</th>
        <th>Descripción</th>
        <th>Criterios de Aceptación</th>
        <th>Relacionado con (Epic ID)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>Como propietario, quiero que la cerradura identifique automáticamente a las personas mediante reconocimiento facial para saber si son conocidas o extrañas.</td>
        <td>Como propietario, quiero que la cerradura identifique automáticamente a las personas mediante reconocimiento facial para saber si son conocidas o extrañas.</td>
        <td>
          <ul>
            <li>El sistema debe activar la cámara al detectar movimiento.</li>
            <li>El sistema debe comparar el rostro captado con la base de datos de rostros registrados.</li>
            <li>El sistema debe clasificar el rostro como "conocido" o "desconocido".</li>
          </ul>
        </td>
        <td>EP01 - Reconocimiento Facial</td>
      </tr>
      <tr>
        <td>002</td>
        <td>Como propietario, quiero registrar rostros de personas autorizadas (familiares, amigos) para que puedan ingresar sin mi intervención.</td>
        <td>Como propietario, quiero registrar rostros de personas autorizadas (familiares, amigos) para que puedan ingresar sin mi intervención.</td>
        <td>
          <ul>
            <li>La app debe permitir subir o tomar una foto de una persona para registrarla.</li>
            <li>El rostro debe guardarse en una base de datos segura.</li>
            <li>El sistema debe permitir eliminar o editar rostros registrados.</li>
          </ul>
        </td>
        <td>EP01 - Reconocimiento Facial</td>
      </tr>
      <tr>
        <td>003</td>
        <td>Como propietario, quiero recibir una notificación en mi celular cuando una persona desconocida esté frente a la puerta.</td>
        <td>Como propietario, quiero recibir una notificación en mi celular cuando una persona desconocida esté frente a la puerta.</td>
        <td>
          <ul>
            <li>El sistema debe enviar una notificación push a la app cuando detecte un rostro desconocido.</li>
            <li>La notificación debe incluir imagen en tiempo real y hora del evento.</li>
          </ul>
        </td>
        <td>EP02 - Comunicación Remota</td>
      </tr>
      <tr>
        <td>004</td>
        <td>Como propietario quiero poder loguearse en la aplicación con credenciales de manera rápida</td>
        <td>Como propietario y usuario deseo poder loguearme con credenciales que vienen por defecto en la cerradura</td>
        <td>
          <ul>
            <li>La cerradura debe tener una credencial única con la cual poder vincularlo con la aplicación móvil y a la vez poder identificarse.</li>
          </ul>
        </td>
        <td>EP02 - Comunicación Remota</td>
      </tr>
      <tr>
        <td>005</td>
        <td>Como propietario, quiero ver una captura de la persona que intenta acercarse a mi hogar.</td>
        <td>Como propietario, quiero ver en tiempo real el rostro de la persona para decidir si es seguro abrir la puerta.</td>
        <td>
          <ul>
            <li>la captura de imagenes debe activarse con la detección de movimiento o bajo demanda.</li>
          </ul>
        </td>
        <td>EP02 - Comunicación Remota</td>
      </tr>
      <tr>
        <td>006</td>
        <td>Como propietario, quiero tener botones en la app para abrir la puerta remotamente o llamar a la policía en caso de amenaza.</td>
        <td>Como propietario, quiero tener botones en la app para abrir la puerta remotamente o llamar a la policía en caso de amenaza.</td>
        <td>
          <ul>
            <li>La app debe tener un botón de "Abrir puerta" y otro de "Llamar a la policía".</li>
            <li>El botón de emergencia debe marcar automáticamente al 105 o el número configurado.</li>
            <li>El botón de apertura debe activar el mecanismo de la cerradura.</li>
          </ul>
        </td>
        <td>EP02 - Comunicación Remota</td>
      </tr>
      <tr>
        <td>007</td>
        <td>Como propietario, quiero consultar un historial de accesos para saber quién y cuándo ha intentado ingresar a mi casa.</td>
        <td>Como propietario, quiero consultar un historial de accesos para saber quién y cuándo ha intentado ingresar a mi casa.</td>
        <td>
          <ul>
            <li>La app debe mostrar una lista de accesos con fecha, hora y tipo (conocido/desconocido).</li>
            <li>El historial debe ser accesible desde un menú en la app.</li>
          </ul>
        </td>
        <td>EP03 - Registro y Seguridad</td>
      </tr>
      <tr>
        <td>008</td>
        <td>Como propietario, quiero ver imágenes de las visitas anteriores para tener evidencia en caso de incidentes.</td>
        <td>Como propietario, quiero ver imágenes de las visitas anteriores para tener evidencia en caso de incidentes.</td>
        <td>
          <ul>
            <li>El sistema debe almacenar imágenes por evento.</li>
            <li>La app debe permitir ver estos archivos desde el historial.</li>
            <li>Se debe indicar si el rostro fue identificado o no.</li>
          </ul>
        </td>
        <td>EP03 - Registro y Seguridad</td>
      </tr>
      <tr>
        <td>009</td>
        <td>Como propietario, quiero poder configurar alertas personalizadas (por ejemplo, si alguien intenta forzar la cerradura).</td>
        <td>Como propietario, quiero poder configurar alertas personalizadas (por ejemplo, si alguien intenta forzar la cerradura)</td>
        <td>
          <ul>
            <li>La app debe permitir activar alertas para eventos como intentos de forzar la cerradura o movimientos sospechosos.</li>
            <li>El sistema debe enviar notificaciones en tiempo real según la configuración del usuario.</li>
          </ul>
        </td>
        <td>EP03 - Registro y Seguridad</td>
      </tr>
    </tbody>
  </table>

## 3.3. Impact Mapping 


<img src="./assets/Impact Map.png" />



## 3.4. Product Backlog 
  <div style="display: flex; justify-content: center;">
  <table border="1" style="width: 100%; text-align: center; border-collapse: collapse;">
    <thead>
      <tr>
        <th>#Orden</th>
        <th>User Story Id</th>
        <th>Título</th>
        <th>Descripción</th>
        <th>Story Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>Usuario</td>
        <td>Como propietario, quiero que la cerradura identifique automáticamente a las personas mediante reconocimiento facial para saber si son conocidas o extrañas.</td>
        <td>Como propietario, quiero que la cerradura identifique automáticamente a las personas mediante reconocimiento facial para saber si son conocidas o extrañas.</td>
        <td>8</td>
      </tr>
      <tr>
        <td>002</td>
        <td>Usuario</td>
        <td>Como propietario, quiero registrar rostros de personas autorizadas (familiares, amigos) para que puedan ingresar sin mi intervención.</td>
        <td>Como propietario, quiero registrar rostros de personas autorizadas (familiares, amigos) para que puedan ingresar sin mi intervención.</td>
        <td>3</td>
      </tr>
      <tr>
        <td>003</td>
        <td>Usuario</td>
        <td>Como propietario, quiero recibir una notificación en mi celular cuando una persona desconocida esté frente a la puerta.</td>
        <td>Como propietario, quiero recibir una notificación en mi celular cuando una persona desconocida esté frente a la puerta.</td>
        <td>3</td>
      </tr>
      <tr>
        <td>004</td>
        <td>Usuario</td>
        <td>Como propietario quiero poder loguearse en la aplicación con credenciales de manera rápida</td>
        <td>Como propietario y usuario deseo poder loguearme con credenciales que vienen por defecto en la cerradura</td>
        <td>2</td>
      </tr>
      <tr>
        <td>005</td>
        <td>Usuario</td>
        <td>Como propietario, quiero ver en tiempo real el rostro de la persona para decidir si es seguro abrir la puerta.</td>
        <td>Como propietario, quiero ver en tiempo real el rostro de la persona para decidir si es seguro abrir la puerta.</td>
        <td>8</td>
      </tr>
      <tr>
        <td>006</td>
        <td>Usuario</td>
        <td>Como propietario, quiero tener botones en la app para abrir la puerta remotamente o llamar a la policía en caso de amenaza.</td>
        <td>Como propietario, quiero tener botones en la app para abrir la puerta remotamente o llamar a la policía en caso de amenaza.</td>
        <td>5</td>
      </tr>
      <tr>
        <td>007</td>
        <td>Usuario</td>
        <td>Como propietario, quiero consultar un historial de accesos para saber quién y cuándo ha intentado ingresar a mi casa.</td>
        <td>Como propietario, quiero consultar un historial de accesos para saber quién y cuándo ha intentado ingresar a mi casa.</td>
        <td>3</td>
      </tr>
      <tr>
        <td>008</td>
        <td>Usuario</td>
        <td>Como propietario, quiero ver imágenes de las visitas anteriores para tener evidencia en caso de incidentes.</td>
        <td>Como propietario, quiero ver imágenes de las visitas anteriores para tener evidencia en caso de incidentes.</td>
        <td>5</td>
      </tr>
      <tr>
        <td>009</td>
        <td>Usuario</td>
        <td>Como propietario, quiero poder configurar alertas personalizadas (por ejemplo, si alguien intenta forzar la cerradura).</td>
        <td>Como propietario, quiero poder configurar alertas personalizadas (por ejemplo, si alguien intenta forzar la cerradura)</td>
        <td>5</td>
      </tr>
    </tbody>
  </table>
  </div>



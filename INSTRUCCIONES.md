# Instrucciones para contribuir al proyecto

¡Bienvenidos al proyecto! A continuación, te detallo los pasos que debes seguir para colaborar con tu trabajo. Vamos a utilizar **Git** y **GitHub** para gestionar nuestras contribuciones de manera ordenada.

### **1. Hacer un Fork del Repositorio**

Un **fork** crea una copia del proyecto en tu cuenta de GitHub para que puedas trabajar sin afectar directamente el repositorio principal.

- Ve a la página del repositorio principal (este repositorio) y haz clic en el botón **Fork** (en la parte superior derecha).
- Esto creará una copia del repositorio en tu cuenta de GitHub.

### **2. Clonar el Repositorio Forkeado**

Después de hacer el fork, necesitas **clonar** el repositorio en tu máquina local para trabajar en él.

1. Abre tu terminal o consola de comandos.
2. Clona tu repositorio (cambia `<tu_usuario>` por tu nombre de usuario en GitHub):

   ```bash
   git clone https://github.com/<tu_usuario>/forestAppPhone.git
   ```

3. Ingresa al directorio del proyecto:

   ```bash
   cd uni_proyecto
   ```

### **3. Crear una Rama de Trabajo**

Es importante que cada uno trabaje en una **rama separada** para evitar conflictos. Sigue estos pasos:

1. Asegúrate de estar en la rama principal (por defecto es `main` o `master`):

   ```bash
   git checkout main  # o git checkout master si esa es la rama principal
   ```

2. Obtén los últimos cambios del repositorio principal (esto asegura que tu repositorio esté actualizado) y de la rama desarrollo:

   ```bash
   git pull origin main  # o git pull origin master
   ```

   ```bash
   git checkout desarrollo
   ```

   ```bash
   git pull origin desarrollo
   ```

3. Ahora, crea una **rama nueva** para tu trabajo. Nombrala como desees (por ejemplo, `rama_jhunior`):

   ```bash
   git checkout -b rama_jhunior
   ```

4. Verifica que estás en la nueva rama con:

   ```bash
   git branch
   ```

### **4. Realizar Cambios y Hacer Commit**

Haz los cambios que necesites en el proyecto (editar archivos, agregar código, etc.). Después de realizar los cambios, guarda y haz commit.

1. **Añadir los archivos modificados** al área de staging (preparación para commit):

   ```bash
   git add .
   ```

2. **Hacer un commit** con un mensaje descriptivo:

   ```bash
   git commit -m "Descripción de los cambios realizados"
   ```

### **5. Subir los Cambios a tu Repositorio en GitHub**

Una vez que hayas realizado el commit, es hora de **subir** los cambios a tu repositorio en GitHub.

1. Subir la rama con tus cambios:

   ```bash
   git push origin rama_jhunior
   ```

### **6. Crear un Pull Request (PR)**

Con tus cambios ya subidos al repositorio de GitHub, es hora de hacer un **Pull Request (PR)** para que tus cambios se integren a la rama `desarrollo` del repositorio principal.

1. Ve a la página de tu repositorio en GitHub.
2. Verás un botón que te sugiere **"Compare & pull request"**. Haz clic en ese botón.
3. En el formulario del Pull Request:
   - **Base**: selecciona la rama `desarrollo` (del repositorio principal).
   - **Compare**: selecciona la rama que acabas de subir (por ejemplo, `rama_jhunior`).
4. Agrega una descripción clara de los cambios realizados.
5. Haz clic en **Create Pull Request**.

### **7. Revisión del Pull Request**

Una vez que hayas creado el Pull Request, yo o alguien más revisará los cambios. Si todo está bien, se hará el **merge** (fusión) de tu rama a la rama `desarrollo`.

---

### **Recuerda:**

- Siempre debes crear una rama nueva para trabajar en tu tarea.
- No trabajes directamente en la rama `main` ni en la rama `desarrollo`.
- Si no entiendes algún comando o tienes dudas, no dudes en preguntar.

¡Gracias por colaborar! ¡Vamos a lograr grandes cosas juntos!

---

Este archivo de instrucciones ayudará a tus compañeros a entender el flujo de trabajo con Git y GitHub y a hacer sus contribuciones sin problemas. Si necesitas alguna modificación o más detalles, avísame.

v2 v3

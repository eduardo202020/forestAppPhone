# Estructura y Navegación de la App (Expo Router)

## 1. Estructura General

La app utiliza **expo-router** para organizar la navegación, combinando un Stack principal, un Drawer lateral y Stacks/Tabs anidados para secciones específicas.

```
Stack (app/_layout.tsx)
└── Drawer (app/(drawer)/_layout.tsx)
    ├── proyecto (Stack: index, crear, detalles, editar)
    ├── social (Tabs: index, favoritos, destacados)
    ├── calendario (Stack)
    ├── pasos (Stack)
    ├── compost (Stack)
    └── ajustes (Stack)
```

## 2. Código de Navegación

### Stack raíz (`app/_layout.tsx`)

```tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  // ...carga de fuentes y splash...
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}
```

### Drawer principal (`app/(drawer)/_layout.tsx`)

```tsx
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '@/components/CustomDrawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          // ...otros estilos...
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="proyecto"
      >
        <Drawer.Screen
          name="proyecto"
          options={{ drawerLabel: 'Mi Proyecto' /*...*/ }}
        />
        <Drawer.Screen
          name="social"
          options={{ drawerLabel: 'Red Social' /*...*/ }}
        />
        <Drawer.Screen
          name="calendario"
          options={{ drawerLabel: 'Calendario' /*...*/ }}
        />
        <Drawer.Screen
          name="pasos"
          options={{ drawerLabel: 'Pasos' /*...*/ }}
        />
        <Drawer.Screen
          name="compost"
          options={{ drawerLabel: 'Compost y Bocashi' /*...*/ }}
        />
        <Drawer.Screen
          name="ajustes"
          options={{ drawerLabel: 'Ajustes' /*...*/ }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
```

### Stack anidado: Proyectos (`app/(drawer)/proyecto/_layout.tsx`)

```tsx
import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="crear" />
      <Stack.Screen name="detalles" />
      <Stack.Screen name="editar" />
    </Stack>
  );
}
```

### Tabs anidados: Social (`app/(drawer)/social/_layout.tsx`)

```tsx
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Inicio' /*...*/ }} />
      <Tabs.Screen name="favoritos" options={{ title: 'Favoritos' /*...*/ }} />
      <Tabs.Screen
        name="destacados"
        options={{ title: 'Destacados' /*...*/ }}
      />
    </Tabs>
  );
}
```

## 3. Flujo de Navegación en Pantallas Clave

### Proyectos

- **index.tsx**: Pantalla de bienvenida/resumen. Botón para crear proyecto (`router.push('/proyecto/crear')`).
- **crear.tsx**: Formulario para crear proyecto. Al guardar, navega a detalles (`router.push('/proyecto/detalles?id=...')`).
- **detalles.tsx**: Muestra detalles del proyecto, permite editar (`router.push('/proyecto/editar?id=...')`).
- **editar.tsx**: Formulario de edición. Al guardar, vuelve a detalles.

### Social

- **index.tsx**: Lista de proyectos sociales. Al tocar un proyecto, navega a detalles (`router.push('proyecto/detalles?id=...')`).
- **favoritos.tsx** y **destacados.tsx**: Listas filtradas, mismo patrón de navegación.

### Otros módulos

- **calendario**, **pasos**, **compost**, **ajustes**: Cada uno tiene su propio Stack con pantalla principal (`index.tsx`).

## 4. Componentes de Navegación

- **CustomDrawer.tsx**: Personaliza el menú lateral, muestra avatar, nombre y accesos rápidos.
- **WhatsappShareButton.tsx**: Botón flotante para compartir desde detalles de proyecto.

## 5. Resumen Visual

```
Stack (app/_layout.tsx)
└── Drawer (app/(drawer)/_layout.tsx)
    ├── proyecto (Stack: index, crear, detalles, editar)
    ├── social (Tabs: index, favoritos, destacados)
    ├── calendario (Stack)
    ├── pasos (Stack)
    ├── compost (Stack)
    └── ajustes (Stack)
```

---

Este resumen cubre la estructura de navegación y el flujo principal de la app. Si necesitas un diagrama visual, ejemplos de navegación para otros módulos o detalles adicionales, indícalo.

import { useEffect } from 'react';
import { useRouter, useRootNavigationState } from 'expo-router';

export default function NotFoundRedirect() {
  const router = useRouter();
  const navReady = useRootNavigationState();

  useEffect(() => {
    if (navReady?.key) {
      router.replace('/proyecto');
    }
  }, [navReady, router]);

  // Pantalla completamente en blanco mientras se redirige
  return null;
}

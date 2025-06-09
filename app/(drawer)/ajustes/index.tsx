import { View } from 'react-native';
import React from 'react';
import { useAuth } from '@/providers/AuthProvider';
import Auth from '@/components/Auth/Auth';
import Account from '@/components/Auth/Account';

const index = () => {
  const { session, loading } = useAuth();

  if (loading) return null;

  return <View>{session ? <Account session={session} /> : <Auth />}</View>;
};

export default index;

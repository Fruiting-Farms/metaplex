import { Layout } from 'antd';
import React from 'react';
import { ContentView } from './content';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';

export const HomeView = () => {
  const meta = useMeta();

  console.log('meta', meta);

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      <ContentView />
    </Layout>
  );
};

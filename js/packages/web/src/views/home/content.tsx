import { useWallet } from '@oyster/common';
import { Col, Layout, Row } from 'antd';
import React from 'react';

import { useMeta } from '../../contexts';

const { Content } = Layout;

export const ContentView = () => {
  const { isLoading } = useMeta();
  const { wallet, connected } = useWallet();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Layout>
        <Content
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <Row style={{ width: '100%', marginTop: 10, alignItems: 'center' }}>
            <h1>TEST</h1>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

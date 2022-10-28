import request from '@/service/request';
import { GetQueryString } from '@/service/utils';
import logo from '@/static/imgs/logo.png';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.module.less';

function App() {
  const onFinish = async (values) => {
    const returnUrl = GetQueryString('returnUrl');
    const msg = await request({
      url: '/login',
      data: { ...values, openId: GetQueryString('openId') },
      method: 'POST',
      needLogin: false,
    });
    if (msg.success) {
      sessionStorage.user = JSON.stringify(msg.data.user);
      sessionStorage.token = msg.data.token;
      if (returnUrl) {
        window.location.href = returnUrl;
      } else {
        // navigate('/records');
      }
    }
  };

  useEffect(() => {}, []);

  const changePsw = () => {
    // setIsPsw(!isPsw);
  };
  return (
    <div className={styles.box}>
      <div className={styles.shadow}>
        <div className={styles.imgBox}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.title}>脑科学数字化精准康复变革者</div>
        <Button type="primary">Primary Button</Button>
        <div className={styles.rights}>
          Copyright © {new Date().getFullYear()} 复数健康
        </div>
      </div>
    </div>
  );
}

export default App;

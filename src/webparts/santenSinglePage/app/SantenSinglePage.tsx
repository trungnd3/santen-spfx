import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Landing from './pages/Landing/Landing';
import styles from './SantenSinglePage.module.scss';
import { ISantenSinglePageProps } from './ISantenSinglePageProps';
import {
  useAppDispatch,
  fetchPosts,
  fetchComments,
  fetchInfo,
  fetchTools,
  setWidth,
  fetchProfile,
} from './store';

const SantenSinglePage: React.FC<ISantenSinglePageProps> = (props) => {
  const dispatch = useAppDispatch();
  const rootPath = `${props.serverRelativeUrl}${props.serverRequestPath}`;
  React.useEffect(() => {
    dispatch(setWidth(props.webpartWidth));
    dispatch(fetchPosts()).catch((e) => console.log(e));
    dispatch(fetchComments()).catch((e) => console.log(e));
    dispatch(fetchInfo()).catch((e) => console.log(e));
    dispatch(fetchTools()).catch((e) => console.log(e));
    dispatch(fetchProfile()).catch((e) => console.log(e));
  }, [props.webpartWidth]);

  return (
    <div className={styles.santenSinglePage}>
      <Layout>
        <Routes>
          <Route path={`/${rootPath}`} element={<Landing />} />
          <Route path='*' element={<Navigate to={`/${rootPath}`} replace />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default SantenSinglePage;

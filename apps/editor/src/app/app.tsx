import styles from './app.module.scss';
import { Link, Route } from 'react-router-dom';

import { EditorEngineFeatureProfile } from '@petitedi/editor/engine/feature-profile';


export function App() {
  return (
    <div className={styles.app}>
      <Route
        path='/'
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to='/page-2'>Click here for page 2.</Link>
            <Link to='/feature-profile'>EditorEngineFeatureProfile</Link>
          </div>
        )}
      />
      <Route path='/feature-profile' component={EditorEngineFeatureProfile} />
      <Route
        path='/page-2'
        exact
        render={() => (
          <div>
            <Link to='/'>Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
}

export default App;

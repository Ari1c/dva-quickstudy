import React from 'react';
import {
	Router,
	Route,
	Switch
} from 'dva/router';
import IndexPage from './routes/IndexPage';

// 按照从上到下匹配路由，加载对应的组件
function RouterConfig({
	history
}) {
	return (
		<Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
	);
}

export default RouterConfig;
import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory';

// 这个方法里面 可以配置router的 路由模式，比如hash或者H5 histroy，
// 具体区别可以参考我的文章 vue-router，单页应用原理一致的
const app = dva({
	history: createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/List').default); // 引入model，不然model不会生效

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
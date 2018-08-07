export default {

  namespace: 'list',

  state: {},

  subscriptions: {
    setup({
      dispatch,
      history
    }) { // eslint-disable-line
      return history.listen(({
        pathname
      }) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetch',
            payload: {}
          });
        }
      });
    },
  },

  effects: {
    * fetch({
      payload
    }, {
      call,
      put
    }) { // eslint-disable-line
      // 这里假装 获取到了服务器的数据
      const fetchData = [0, 1, 2, 3]
      yield put({
        type: 'save',
        list: fetchData
      });
    },
  },

  reducers: {
    // 保存
    save(state, action) {
      return {...state,
        list: action.list
      };
    },
    // 新增
    add(state, action) {
      const [..._arr] = {...state
      }.list;
      _arr.push(_arr.length)
      return {
        ...state,
        list: _arr
      }
    },
    // 删除
    del(state, action) {
      return {
        ...state,
        list: state.list.filter((item, index) => {
          return index !== action.id
        })
      }
    },
  },

};
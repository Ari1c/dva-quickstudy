import React from 'react';
import {
  connect
} from 'dva';
import List from '../components/List'

//我们在路由页面里面渲染高阶组件，写好action，通过prop传递给基础组件
function IndexPage({
  dispatch,
  list
}) {
  function handleAdd() {
    dispatch({
      type: 'list/add'
    });
  }

  function handleDelete(id) {
    dispatch({
      type: 'list/del',
      id: id,
    });
  }
  return (
    <div>
      <List list={list} OnAdd={handleAdd} OnDelete={handleDelete}></List>
    </div>
  );
}


IndexPage.propTypes = {};

// 通过connect方法绑定路由页面和model，你可以把connect方法的第一个参数(方法里的) 打印出来看看都有什么东西,不要让解构扰乱了你的眼睛,connect((obj)=>{console.log(obj)})()
export default connect(({
  list
}) => {
  return list; // 这里是state中的list，通过connect，在每次数据更新的时候，流向我们的view，更新视图，你可以在这里"打桩",看看具体的数据流动
})(IndexPage);
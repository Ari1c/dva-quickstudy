import React from 'react';
import Item from './Item'

// 通过prop 把路由页面的action触发方法绑定过来，传递给子组件(OnDelete)，也可以在当前组件触发，如OnAdd
function List({
  OnAdd,
  OnDelete,
  list
}) {
  const List = list.map((num, index) => <Item num={num} key={index} id={index} OnDelete={OnDelete}></Item>);

  return (
    <div>
      {List}
      <button onClick={OnAdd}>Add</button>
    </div>
  );
}


List.propTypes = {};

export default List;
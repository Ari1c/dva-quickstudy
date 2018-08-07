import React from 'react';

const Item = ({
	num,
	id,
	OnDelete
}) => {
	return (
		<li onClick={() => OnDelete(id)}>
      {num}
    </li>
	);
};


Item.propTypes = {};

export default Item;
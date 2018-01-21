import React from 'react';

const Example = ({selected=false, onClick=f=>f}) =>
	<div className={(selected) ? 'selected example' : 'example'}
		onClick={onClick}>
	</div>;

export default Example;

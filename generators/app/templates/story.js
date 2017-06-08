import React from 'react';
import { storiesOf } from '@kadira/storybook';
// import { withKnobs, boolean } from '@kadira/storybook-addon-knobs';

import <%= name %> from './<%= name %>';

storiesOf('<%= name %>', module)
	.add('default', () => {
		return <<%= name %>/>;
	});

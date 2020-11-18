import * as React from 'react';

import LinkButton from './Link';

const SpecialLink = (props) => <LinkButton {...props} variation="button" />;
const ScriptLink = (props) => <LinkButton {...props} variation="script" />;

export { SpecialLink, ScriptLink };

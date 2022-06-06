import { render } from '@testing-library/react';
import SwitchText from './SwitchText';

test('text apear on screen', () => {
    const {debug} = render(<SwitchText />)

    debug();
})
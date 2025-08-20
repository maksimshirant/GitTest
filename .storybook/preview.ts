import type { Preview } from '@storybook/react-vite'
import '../src/index.css';


const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values:[
        { name: 'dark', value: '#0d0d38' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
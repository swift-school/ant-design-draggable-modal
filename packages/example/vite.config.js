// @ts-check
import reactPlugin from 'vite-plugin-react'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  rollupInputOptions: {
    external: [/@ben-august/],
},
}

export default config

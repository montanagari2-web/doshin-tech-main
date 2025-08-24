import presetWind4 from '@unocss/preset-wind4'
import { defineConfig, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      scale: 1.5,
    }),
    presetWebFonts({ provider: 'google', fonts: {
      roboto: 'Roboto',
      heading: 'Poppins',
      body: 'Archivo',
    } }),
  ],
  shortcuts: [
    ['container', 'mx-auto'],
    ['flex-center', 'flex items-center justify-center'],
    ['bg-primary', 'bg-#FFFFFF text-black dark:bg-slate-900 dark:text-white'],
    ['btn-primary', 'dark:bg-#FFFFFF dark:text-black bg-slate-900 text-white hover:bg-slate-300 hover:text-black dark:hover:bg-slate-800 dark:hover:text-white'],
    ['btn-secondary', 'dark:bg-slate-800 dark:text-white bg-zinc-100 text-black dark:hover:bg-slate-300 dark:hover:text-black hover:bg-slate-800 hover:text-white'],
  ],
})

/**
 * Thema demo app
 *
 * Implements switching of content and theme.
 *
 * For HTML content and Javascript modules,
 * switching is achieved via Parcel's [dynamic importing of modules]
 * (https://parceljs.org/code_splitting.html). Note that this seems to load
 * content for all examples and all themes i.e. it is not truly lazy.
 *
 * For CSS, this `import()` approach did not work, maybe because it loads all the
 * CSS stylesheets into the global DOM. So, we take the approach of enablig/diabling `<link>`
 * elements.
 */

import { examples } from '../examples'
import { modules } from '../themes'

const enum sessionKey {
  THEME = 'theme',
  ARTICLE = 'article'
}

const contentSelect = document.querySelector('#content-select')
if (contentSelect !== null) {
  contentSelect.addEventListener(
    'change',
    async event => await contentSet((event.target as HTMLInputElement).value)
  )
}

const contentSet = async (example: string): Promise<void> => {
  window.sessionStorage.setItem(sessionKey.ARTICLE, example)

  // Load the HTML content
  const content = await examples[example]
  const html = content.default

  // Set the content of `<main>` to the content of the example `<body>`
  const dom = new DOMParser().parseFromString(html, 'text/html')
  const main = document.getElementsByTagName('main')[0]
  main.innerHTML = dom.body.innerHTML
}

const activateTheme = (theme: string): void => {
  window.sessionStorage.setItem(sessionKey.THEME, theme)
  // Enable the theme's stylesheet and disable all others
  document
    .querySelectorAll('link.theme[rel="stylesheet"]')
    .forEach(node => ((node as HTMLInputElement).disabled = node.id !== theme))
}

const themeSelect = document.querySelector('#theme-select')
if (themeSelect !== null) {
  themeSelect.addEventListener('change', async event => {
    const element = event.target as HTMLInputElement
    const theme = element.value

    // Load the theme's Javascript module and run it's `init()` function
    // @ts-ignore
    const mod = await modules[theme]
    if (mod !== undefined && 'init' in mod) mod.init()

    activateTheme(theme)
  })
}

// Initial content...
const content = window.sessionStorage.getItem(sessionKey.ARTICLE)
contentSet(content === null ? 'article-drosophila' : content)

const theme = window.sessionStorage.getItem(sessionKey.THEME)
if (theme !== null) {
  activateTheme(theme)
}
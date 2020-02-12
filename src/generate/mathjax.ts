/**
 * A script to generate `../shared/styles/mathjax.css`.
 *
 * Run using `npm run build:mathjax`.
 */

import fs from 'fs'
// @ts-ignore
import MathJax from 'mathjax-node'
import path from 'path'

const dest = path.join(__dirname, '..', 'shared', 'styles', 'mathjax.css')

MathJax.typeset(
  {
    css: true
  },
  (result: any) => {
    const { errors, css } = result
    if (errors) errors.map(console.error)
    fs.writeFileSync(
      dest,
      `/* Generated by ${path.basename(__filename)}. Do not edit. */\n\n${css}`
    )
  }
)

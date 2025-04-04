const elem = document.querySelectorAll('[class*="language-"]')

const customTemplate = {
  keywords: [
    'function',
    'const',
    'let',
    'var',
    'if',
    'else',
    'for',
    'while',
    'do',
    'return',
    'break',
    'continue',
    'switch',
    'case',
    'default',
    'try',
    'catch',
    'finally',
    'throw',
    'class',
    'extends',
    'implements',
    'new',
    'this',
    'super',
    'import',
    'export',
    'from',
    'as',
    'async',
    'await',
    'yield',
    'typeof',
    'instanceof',
    'in',
    'of',
    'delete',
    'void',
    'debugger'
  ],
  punctuation: ['{', '}', '[', ']', ';', ',', '.', ':', '?'],
  custom: {
    pnc2: ['(', ')'],
    boolean: ['true', 'false'],
    null: ['null', 'undefined'],
    global: ['AnyDom'],
    method: ['init'],
    object: ['config', 'preflight', 'colorVariant', 'components', 'alias'],
    regex: [/\/(?![\/\*])[^\n\/]*\/[gimuy]*/],
    template: [/\$\{[^}]*\}/]
  }
}

const languageMap = {
  'language-css': presets.css,
  'language-javascript': presets.javascript,
  'language-html': presets.html,
  'language-custom': customTemplate
}

function processTokens(tokens) {
  return tokens
    .map(
      (line) =>
        '<span>' +
        line
          .map(
            (token) =>
              `<span class="token ${token.type}">${token.value
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;')
                .replace(/ /g, '&nbsp;')}</span>`
          )
          .join('') +
        '</span>'
    )
    .join('\n') // Wrap lines properly
}

elem.forEach((e) => {
  const langClass = Object.keys(languageMap).find((cls) => e.classList.contains(cls))
  const langPreset = languageMap[langClass] || presets.javascript // Default to JavaScript

  const tokens = new Tokenizer(langPreset).tokenize(e.getAttribute('data-code') || e.textContent)
  e.innerHTML = processTokens(tokens)
  console.log(e.innerHTML)
})

// import
AnyDom.init({
  config: {
    preflight: true,
    colorVariant: 'rgb',
    alias: {
      'font-mono': 'font-(family:{default-font-mono})'
    },
    components: {
      '.token': {
        '&.comment': 'italic text-neutral-400',
        '&.punctuation': 'text-neutral-300',
        '&.operator': 'text-red-300',
        '&.tag, &.keyword': 'text-rose-400',
        '&.string': 'text-lime-400',
        '&.global': 'text-sky-400',
        '&.pnc2': 'text-amber-400',
        '&.method': 'text-amber-400',
        '&.boolean': 'text-amber-400',
        '&.object': 'text-zinc-100'
      }
    }
  }
})

declare module 'shelljs' {
  const content: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    exec: Function
  }
  export = content
}

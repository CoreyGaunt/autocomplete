declare const completions: {
    [key: string]: () => Promise<{
        default: any;
    }>
}
export { completions as default }

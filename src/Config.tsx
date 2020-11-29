const configs: Config = {
    name: 'App name',
    description: 'App Description',
    theme: 'default',
    toolbar: {
        position: 'relative'
    }
}
interface Config {
    name: string,
    description: string,
    theme: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent'
    toolbar: {
        position: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
    }
}
export default configs
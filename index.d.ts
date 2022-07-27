export interface Option {
    filename: string;
    output?: string;
    compileAsModule?: boolean;
    electron?: boolean;
    createLoader?: boolean;
    loaderFilename?: string;
    callback?: Function
}

export default class ByteNodeFileWebpackPlugin {
    // @ts-ignore
    constructor(options: Option[]) {
    }
}

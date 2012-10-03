interface UnderscoreTemplate {
    (data? ): string;
}

interface UnderscoreStatic {
    debounce(func, wait: number, immediate?: bool): (any) => any;
    template(templateString: string, data?: any, settings?: any): UnderscoreTemplate;
    extend(destination, ...sources: { }[]);
    each(list: any[], iterator: (element, index:number, list) => void, context?);
    each(object: {}, iterator: (value, key:string, list) => void, context?);
}

declare var _: UnderscoreStatic;
/* ---------------------------------------------------------------------------------------
Backbone-js TypeScript declaration

Microsoft grants you the right to use these script files under the Apache 2.0 license. 
Microsoft reserves all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The copyright notices and MIT licenses 
below are for informational purposes only.

Portions Copyright � Microsoft Corporation
Apache 2.0 License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this 
file except in compliance with the License. You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under 
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF 
ANY KIND, either express or implied.

See the License for the specific language governing permissions and limitations 
under the License.
------------------------------------------------------------------------------------------
Provided for Informational Purposes Only
MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this 
software and associated documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights to use, copy, modify, merge, 
publish, distribute, sublicense, and/or sell copies of the Software, and to permit 
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.
--------------------------------------------------------------------------------------- */

declare module Backbone {
    export class Model {
        attributes: any;
        constructor (attr? , opts? );
        get(name: string): any;
        set(name: string, val: any): void;
        set(obj: any): void;
        save(attr? , opts? ): void;
        destroy(): void;
        bind(ev: string, f: Function, ctx?: any): void;
        id;
        isNew(): bool;
        toJSON(): any;
    }
    export interface CollectionFetchCallback {
        success?: (collection:Collection, response) => void;
        error?: (collection:Collection, response) => void;
    }
    export class Collection {
        add(models, options? ): void;
        constructor (models? , opts? );
        bind(ev: string, f: Function, ctx?: any): void;
        unbind(ev: string, f: Function, ctx?: any): void;
        collection: Model;
        length: number;
        create(attrs, opts? ): Collection;
        each(f: (elem: any) => void ): void;
        models: any[];
        fetch(opts?: CollectionFetchCallback): void;
        last(): any;
        last(n: number): any[];
        filter(f: (elem: any) => any): Collection;
        without(...values: any[]): Collection;
        get(id);
        toJSON(): any;
    }
    export class Router {
    }
    export class View {
        constructor (options? );
        $(selector: string): any;
        el: HTMLElement;
        $el: any;
        remove(): void;
        delegateEvents: any;
        make(tagName: string, attrs? , opts? ): View;
        setElement(element: HTMLElement, delegate?: bool): void;
        tagName: string;
        events: any;

        static extend: any;
    }
    export module Events {
        export function on(event: string, callback: (model: any, error: any) => any, context?): void;
        export function off(event: string, callback: (model, error) => any, context?): void;
        export function trigger(event: string, data: any): void;
    }
    export interface History {
        start(options?): bool;
    }
    export var history: History;
}
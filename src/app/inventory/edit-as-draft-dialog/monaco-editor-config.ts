import {NgxMonacoEditorConfig} from "ngx-monaco-editor";
import {of} from "rxjs";

function State() {
  this.clone = () => new State();
  this.equals = (other) => other === this;
}

class MyState implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new MyState();
  }

  equals(other: monaco.languages.IState): boolean {
    return false;
  }
}

export const clishLanguageId = 'clishLanguage';
const commands: string[] = ['hostname', 'system', 'object-group network', 'ip address-range', 'security zone-pair', 'rule', 'action', 'match protocol', 'match source-address', 'exit',];

export const monacoConfig: NgxMonacoEditorConfig = {
  defaultOptions: { scrollBeyondLastLine: false, automaticLayout: true }, // pass default options to be used
  // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
  onMonacoLoad: () => {
    monaco.languages.register({
      id: clishLanguageId
    });

    monaco.languages.setTokensProvider(clishLanguageId, {
      getInitialState: () => new MyState(),
      tokenize(line: string, state: monaco.languages.IState): monaco.languages.ILineTokens {
        console.log('tokenize: ', line);
        if (line.match(/(^#!.*$)/) !== null) {
          return {
            tokens: [{
              startIndex: 0,
              scopes: 'metatag'
            }],
            endState: new MyState()
          }
        }

        if (line.match(/(^#.*$)/) !== null) {
          return {
            tokens: [{
              startIndex: 0,
              scopes: 'comment'
            }],
            endState: new MyState()
          }
        }

        const tokens = [];
        for (let command of commands) {
          const match = line.match('^(\\s*'+command+')');
          if (match) {
            tokens.push({
                startIndex: 0,
                scopes: 'type.identifier'
            });
            tokens.push({
              startIndex: match[0].length,
              scopes: 'variable'
            });
          }
        }

        return {
          tokens: tokens,
          endState: new MyState()
        };
      }
    });

    monaco.languages.registerColorProvider(clishLanguageId, {
      provideColorPresentations: () => {
        return [
          {
            label: "color picker title text"
          }
        ];
      },

      provideDocumentColors: () => {
        return of([
          // {
          //   color: { red: 255, blue: 0, green: 0, alpha: 1},
          //   range:{
          //     startLineNumber: 1,
          //     startColumn: 0,
          //     endLineNumber: 1,
          //     endColumn: 0
          //   }
          // },
          // {
          //   color: { red: 0, blue: 255, green: 0, alpha: 1},
          //   range:{
          //     startLineNumber: 2,
          //     startColumn: 0,
          //     endLineNumber: 2,
          //     endColumn: 0
          //   }
          // },
          // {
          //   color: { red: 0, blue: 0, green: 255, alpha: 1},
          //   range:{
          //     startLineNumber: 3,
          //     startColumn: 0,
          //     endLineNumber: 3,
          //     endColumn: 0
          //   }
          // }
        ]).toPromise();
      }

    });
  }
};

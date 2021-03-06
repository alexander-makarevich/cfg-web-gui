import {NgxMonacoEditorConfig} from 'ngx-monaco-editor';
import {of} from 'rxjs';

class MyState implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new MyState();
  }

  equals(other: monaco.languages.IState): boolean {
    return false;
  }
}

/**
 * Отчего-то monaco-editor ломается если применять маркеры сразу после событий onMonacoEditorInit или
 * onDidChangeContent, задержка помогла.
 * Смотрел в примере: https://github.com/nmanumr/monaco-basic/blob/master/src/languageFeatures.ts#L42:
 * @code:
 * model.onDidChangeContent(() => {
 *   handle = setTimeout(() => this._doValidate(model.uri, modeId), 500);
 */
export const monacoEditorLag = 500;

export const clishLanguageId = 'clishLanguage';
const commands: string[] = ['hostname', 'system', 'object-group network', 'ip address-range', 'security zone-pair',
  'rule', 'action', 'match protocol', 'match source-address', 'exit', ];

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
          };
        }

        if (line.match(/(^#.*$)/) !== null) {
          return {
            tokens: [{
              startIndex: 0,
              scopes: 'comment'
            }],
            endState: new MyState()
          };
        }

        const tokens = [];
        for (const command of commands) {
          const match = line.match('^(\\s*' + command + ')');
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
          tokens,
          endState: new MyState(),
        };
      }
    });

    monaco.languages.registerHoverProvider(clishLanguageId, {
      provideHover: (model, position) => {
        if (position.lineNumber === 8 && position.column >= 3 && position.column <= 19) {
          return of(
            {
              range: new monaco.Range(8, 3, 8, 19),
              contents: [
                {value: '**ip address-range**'},
                {value: '```html\n' + 'Без понятия для чего нужна эта команда' + '\n```'},
                {value: 'Список параметров:\n* параметр 1 - неизвестен\n* параметр 2 - неизвестен\n* параметр 3 - неизвестен' + '\n```'},
              ]
            }
          ).toPromise();
        }
      }
    });


    function createDependencyProposals() {
      // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
      // here you could do a server side lookup
      return [
        {
          label: '"ip address-range"',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: 'The Lodash library exported as Node.js modules.',
          insertText: '  ip address-range',
          range: {
            startLineNumber: 8,
            endLineNumber: 8,
            startColumn: 3,
            endColumn: 19,
          }
        },
        {
          label: '"ip"',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: 'Fast, unopinionated, minimalist web framework',
          insertText: '  ip',
          range: {
            startLineNumber: 8,
            endLineNumber: 8,
            startColumn: 3,
            endColumn: 19,
          }
        },
        {
          label: '"ip address-range 192.168.26.653"',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: 'Recursively mkdir, like <code>mkdir -p</code>',
          insertText: '  ip address-range 192.168.26.653',
          range: {
            startLineNumber: 8,
            endLineNumber: 8,
            startColumn: 3,
            endColumn: 19,
          }
        }
      ];
    }

    monaco.languages.registerCompletionItemProvider(clishLanguageId, {
      provideCompletionItems: (model, position, context, token) => {
        // find out if we are completing a property in the 'dependencies' object.
        const match = (position.lineNumber === 8 && position.column >= 3 && position.column <= 19);
        const suggestions = match ? createDependencyProposals() : [];
        return {
          suggestions,
        };
      }
    });

    monaco.languages.registerColorProvider(clishLanguageId, {
      provideColorPresentations: () => {
        return [
          {
            label: 'color picker title text'
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

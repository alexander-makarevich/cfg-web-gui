import {NgxMonacoEditorConfig} from "ngx-monaco-editor";
import {of} from "rxjs";

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

    monaco.languages.registerHoverProvider(clishLanguageId, {
      provideHover: function (model, position) {
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

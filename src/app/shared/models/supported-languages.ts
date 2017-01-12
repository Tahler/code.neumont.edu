import { Language } from './language';

export const supportedLanguages: Language[] = [
  {
    apiCode: 'c',
    editorMode: 'text/x-csrc',
    name: 'C'
  },
  {
    apiCode: 'cpp',
    editorMode: 'text/x-c++src',
    name: 'C++'
  },
  {
    apiCode: 'csharp',
    editorMode: 'text/x-csharp',
    name: 'C#'
  },
  {
    apiCode: 'go',
    editorMode: 'text/x-go',
    name: 'Go'
  },
  {
    apiCode: 'java',
    editorMode: 'text/x-java',
    name: 'Java'
  },
  {
    apiCode: 'js',
    editorMode: 'text/javascript',
    name: 'JavaScript'
  },
  {
    apiCode: 'python',
    editorMode: 'text/x-python',
    name: 'Python 2'
  },
  {
    apiCode: 'python3',
    editorMode: 'text/x-python',
    name: 'Python 3'
  },
  {
    apiCode: 'rust',
    editorMode: 'text/x-rustsrc',
    name: 'Rust'
  },
  {
    apiCode: 'ts',
    editorMode: 'text/typescript',
    name: 'TypeScript'
  }
];

// A mapping between user-friendly display and the lang-id sent to the server for compilation.
export const supportedLanguagesByDisplay = {
  'C': 'c',
  'C++': 'cpp',
  'C#': 'csharp',
  'Go': 'go',
  'Java': 'java',
  'JavaScript': 'js',
  'Python 2': 'python',
  'Python 3': 'python3',
  'Rust': 'rust',
  'TypeScript': 'ts'
};

// Self-called function that produces the inverse of SupportedLanguagesByDisplay
export const supportedLanguagesByCode = (function () {
  let supportedLanguagesByCode = {};
  for (let displayName in supportedLanguagesByDisplay) {
    if (supportedLanguagesByDisplay.hasOwnProperty(displayName)) {
      supportedLanguagesByCode[supportedLanguagesByDisplay[displayName]] = displayName;
    }
  }
  return supportedLanguagesByCode;
})();

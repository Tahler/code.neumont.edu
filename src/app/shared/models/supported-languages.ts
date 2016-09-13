export interface Language {
  /**
   * The code to be sent to the Compilation API
   */
  apiCode: string;

  /**
   * The code used for Codemirror MIME styling (text/`cmCode`)
   */
  editorMode: string;

  /**
   * The name to be displayed in the language dropdown
   */
  name: string;
}

export const supportedLanguages: Language[] = [
  {
    apiCode: 'c',
    editorMode: 'x-csrc',
    name: 'C'
  },
  {
    apiCode: 'cpp',
    editorMode: 'x-c++src',
    name: 'C++'
  },
  {
    apiCode: 'csharp',
    editorMode: 'x-csharp',
    name: 'C#'
  },
  {
    apiCode: 'go',
    editorMode: 'x-go',
    name: 'Go'
  },
  {
    apiCode: 'java',
    editorMode: 'x-java',
    name: 'Java'
  },
  {
    apiCode: 'js',
    editorMode: 'javascript',
    name: 'JavaScript'
  },
  {
    apiCode: 'python',
    editorMode: 'x-python',
    name: 'Python 2'
  },
  {
    apiCode: 'python3',
    editorMode: 'x-python',
    name: 'Python 3'
  },
  {
    apiCode: 'rust',
    editorMode: 'x-rustsrc',
    name: 'Rust'
  },
  {
    apiCode: 'ts',
    editorMode: 'typescript',
    name: 'TypeScript'
  }
];

// A mapping between user-friendly display and the lang-id sent to the server for compilation.
export const SupportedLanguagesByDisplay = {
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
export const SupportedLanguagesByCode = (function () {
  let supportedLanguagesByCode = {};
  for (let displayName in SupportedLanguagesByDisplay) {
    if (SupportedLanguagesByDisplay.hasOwnProperty(displayName)) {
      supportedLanguagesByCode[SupportedLanguagesByDisplay[displayName]] = displayName;
    }
  }
  return supportedLanguagesByCode;
})();

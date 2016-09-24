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

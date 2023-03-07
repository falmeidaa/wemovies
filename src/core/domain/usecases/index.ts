export interface Usecase<Output = any, Input = any> {
  execute: (input: Input) => Promise<Output>
}

export abstract class DomainError extends Error {
  protected constructor(
    public readonly code: string,
    message: string,
  ) {
    super(message);

    Object.setPrototypeOf(this, DomainError.prototype);
    this.name = DomainError.prototype.constructor.name;
  }
}

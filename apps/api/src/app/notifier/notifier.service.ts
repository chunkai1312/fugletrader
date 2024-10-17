export abstract class NotifierService {
  abstract send(message: string): Promise<any>;
}

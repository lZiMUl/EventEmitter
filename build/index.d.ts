declare type callback = (...detail: any[]) => void;
declare class EventEmitter extends EventTarget {
    addEventListener(eventName: string, callback: callback): void;
    emit(eventName: string, ...option: any[]): void;
}
export default EventEmitter;
//# sourceMappingURL=index.d.ts.map
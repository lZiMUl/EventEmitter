class EventEmitter extends EventTarget {
    addEventListener(eventName, callback) {
        super.addEventListener(eventName, ({ detail }) => callback(...detail));
    }
    ;
    emit(eventName, ...option) {
        super.dispatchEvent(new CustomEvent(eventName, {
            detail: option
        }));
    }
    ;
}
;
export default EventEmitter;
//# sourceMappingURL=index.js.map
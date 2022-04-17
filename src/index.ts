// 定義回調函數規範.
type callback = (...detail: any[]) => void;

// 定義事件發射器, 繼承 EventTarget 瀏覽器原生類.
class EventEmitter extends EventTarget {
  // 公開方法: 添加事件監聽器(事件名, 回調函數).
  public addEventListener(eventName: string, callback: callback): void {
    // 調用 EventTarget 監聽器.
    super.addEventListener(eventName, ({ detail }: any): void => callback(...detail));
  };
  
  // 公開方法: 事件發射器.
  public emit(eventName: string, ...option: any[]): void {
      // 發射, 基於 CustomEvent 瀏覽器原生類方法.
    super.dispatchEvent(new CustomEvent(eventName, {
        detail: option
    }));
  };
};

// 導出默認模塊.
export default EventEmitter;
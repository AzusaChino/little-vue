import { mount } from "@vue/test-utils";
import Counter from "@/views/counter";

import sinon from "sinon";

describe("Counter.vue", () => {
  const change = sinon.spy();
  const wrapper = mount(Counter, {
    listeners: {
      change
    }
  });
  it("renders counter html", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("count++", () => {
    const button = wrapper.find("#plusCount");
    button.trigger("click");
    // vm => vue的应用上下文
    expect(wrapper.vm["count"]).toBe(1);
    expect(change.called).toBe(true);
    button.trigger("click");
    expect(change.callCount).toBe(2);
  });
});

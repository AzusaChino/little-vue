import { mount } from "@vue/test-utils";
import Page404 from "@/views/404";

describe("404.vue", () => {
  it("renders props.msg when passed", () => {
    const newMessage = "new message";
    const wrapper = mount(Page404, {
      propsData: { newMessage }
    });
    expect(wrapper.find("#sample").html()).toBe(newMessage);
  });
});

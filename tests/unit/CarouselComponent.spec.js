import { shallowMount } from "@vue/test-utils";
import CarouselComponent from "@/components/CarouselComponent.vue";
import { mockSlides, mockImagesData } from "../mocks/data";
let wrapper;
const mockData = {
  active: 1,
  images: mockImagesData,
};
beforeEach(() => {
  wrapper = shallowMount(CarouselComponent, {
    propsData: mockData,
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("CarouselComponent", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("Close Modal", async () => {
    const closeModalElement = wrapper.find(".close-modal");
    closeModalElement.trigger("click");
    await wrapper.vm.$nextTick();
    const spy = jest.spyOn(wrapper.vm, "closeModal");
    wrapper.vm.closeModal();
    expect(spy).toHaveBeenCalled();

    // emit the event for close
    expect(wrapper.emitted().close).toBeTruthy();
  });

  test("Previous icon disabled", async () => {
    const previousIconElement = wrapper.findAll("span").at(0);
    wrapper.setData({
      active: 1,
    });
    await wrapper.vm.$nextTick();
    expect(previousIconElement.attributes("class")).toBe("prev disabled");
  });

  test("Previous icon not disabled", async () => {
    const previousIconElement = wrapper.findAll("span").at(0);

    wrapper.setData({
      active: 3,
    });
    await wrapper.vm.$nextTick();
    expect(previousIconElement.attributes("class")).toBe("prev");
  });

  test("is Active Image", async () => {
    // false case
    wrapper.vm.active = 1;
    const result = wrapper.vm.isActiveImage(mockImagesData[0], 1);
    await wrapper.vm.$nextTick();
    expect(result).toBe(false);

    // true case
    wrapper.vm.active = 2;
    const result1 = wrapper.vm.isActiveImage(mockImagesData[0], 1);
    await wrapper.vm.$nextTick();
    expect(result1).toBe(true);
  });

  test("Next icon disabled", async () => {
    const nextIconElement = wrapper.findAll("span").at(1);
    wrapper.setData({
      active: 1,
    });
    await wrapper.vm.$nextTick();
    expect(nextIconElement.attributes("class")).toBe("next");
  });

  test("Next icon not disabled", async () => {
    const nextIconElement = wrapper.findAll("span").at(1);

    wrapper.setData({
      active: 2,
    });
    await wrapper.vm.$nextTick();
    expect(nextIconElement.attributes("class")).toBe("next disabled");
  });

  test("computed property for getSLides", () => {
    const slides = mockSlides;
    expect(wrapper.vm.getSlides).toEqual(slides);

    // length of slides
    expect(wrapper.vm.getSlides).toHaveLength(2);
  });

  test("jump index", () => {
    wrapper.vm.jump(5);
    expect(wrapper.vm.active).toBe(5);

    wrapper.vm.jump(4);
    expect(wrapper.vm.active).toBe(4);
  });

  test("slide change", () => {
    wrapper.vm.slideChange(2);
    expect(wrapper.vm.active).toBe(1);

    wrapper.vm.slideChange(-1);
    expect(wrapper.vm.active).toBe(2);
  });
});

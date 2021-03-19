import { shallowMount } from "@vue/test-utils";
import CarouselComponent from "@/components/CarouselComponent.vue";
import { mockSlides, mockImagesData } from "../mocks/data";
let wrapper;
const mockData = {
  active: 1,
  images: mockImagesData
};
beforeEach(() => {
  wrapper = shallowMount(CarouselComponent, {
    propsData: mockData
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

  test("Previous icon disabled", () => {
    const PreviousIconElement = wrapper.findAll("span").at(0);
    wrapper.setData({
      active: 1
    });
    wrapper.vm.$nextTick();
    expect(PreviousIconElement.attributes("class")).toBe("prev disabled");
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

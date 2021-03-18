import { shallowMount } from "@vue/test-utils";
// @ts-ignore
import CarouselComponent from "@/Component/CarouselComponent.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(CarouselComponent, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {}
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("CarouselComponent", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

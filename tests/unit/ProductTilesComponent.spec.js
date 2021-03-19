import { shallowMount, createLocalVue } from "@vue/test-utils";
import ProductTilesComponent from "@/components/ProductTilesComponent.vue";
import { mockProducts } from "../mocks/data";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
let wrapper;
const mockData = {
  showModal: false,
};

const actions = {
  loadProducts: jest.fn(),
};

const store = new Vuex.Store({
  state: {
    products: [],
  },
  actions,
});
beforeEach(() => {
  wrapper = shallowMount(ProductTilesComponent, {
    propsData: mockData,
    store,
    localVue,
    computed: {
      getProductSaleList: () => mockProducts,
    },
    stubs: {
      "carousel-component": true,
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("ProductTilesComponent", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("to show the modal to user when image clicked", () => {
    wrapper.vm.showModal = false;
    expect(wrapper.vm.showModal).toBe(false);
    const imageElement = wrapper.find(".product-image");
    imageElement.trigger("click");
    expect(wrapper.vm.showModal).toBe(true);
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("product-name", () => {
    const nameElement = wrapper.find(".product-name");
    expect(nameElement.text()).toEqual(mockProducts[0].name);
  });

  test("get price method", () => {
    const price = mockProducts[1].price;
    const result = wrapper.vm.getPrice(price, "regular");
    expect(result).toEqual("200");
  });
});

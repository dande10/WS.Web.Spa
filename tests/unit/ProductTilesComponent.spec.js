import { shallowMount, createLocalVue } from "@vue/test-utils";
import ProductTilesComponent from "@/components/ProductTilesComponent.vue";
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

const mockProducts = [
  {
    id: "walnut-led-desk-lamp-w4013",
    name: "Walnut LED Desk Lamp",
    links: {
      www: "https://www.westelm.com/products/walnut-led-desk-lamp-w4013/",
    },
    price: {
      regular: 159,
      selling: 159,
    },
    thumbnail: {
      size: "m",
      meta: "",
      alt: "",
      rel: "thumbnail",
      width: 363,
      href:
        "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-6-m.jpg",
      height: 363,
    },
    hero: {
      size: "m",
      meta: "",
      alt: "",
      rel: "hero",
      width: 363,
      href:
        "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-6-m.jpg",
      height: 363,
    },
    images: [
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-2-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-5-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-3-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-7-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-1-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-4-m.jpg",
        height: 363,
      },
    ],
    swatches: [],
    messages: [],
    flags: [
      {
        bopisSuppress: false,
        rank: 3,
        id: "newcore",
      },
    ],
    reviews: {
      recommendationCount: 0,
      likelihood: 0,
      reviewCount: 0,
      averageRating: 0,
      id: "walnut-led-desk-lamp-w4013",
      type: "GROUP_REVIEWS",
    },
  },
  {
    id: "walnut-led-task-floor-lamp-w4014",
    name: "Walnut LED Task Floor Lamp",
    links: {
      www: "https://www.westelm.com/products/walnut-led-task-floor-lamp-w4014/",
    },
    price: {
      regular: 199.789,
      selling: 199,
    },
    thumbnail: {
      size: "m",
      meta: "",
      alt: "",
      rel: "thumbnail",
      width: 363,
      href:
        "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-task-floor-lamp-1-m.jpg",
      height: 363,
    },
    hero: {
      size: "m",
      meta: "",
      alt: "",
      rel: "hero",
      width: 363,
      href:
        "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-task-floor-lamp-1-m.jpg",
      height: 363,
    },
    images: [
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-task-floor-lamp-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-task-floor-lamp-6-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-task-floor-lamp-4-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-task-floor-lamp-2-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-task-floor-lamp-3-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-task-floor-lamp-7-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-task-floor-lamp-5-m.jpg",
        height: 363,
      },
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href:
          "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-task-floor-lamp-8-m.jpg",
        height: 363,
      },
    ],
    swatches: [],
    messages: [],
    flags: [],
    reviews: {
      recommendationCount: 0,
      likelihood: 0,
      reviewCount: 0,
      averageRating: 0,
      id: "walnut-led-task-floor-lamp-w4014",
      type: "GROUP_REVIEWS",
    },
  },
];
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
    store.commit("setProducts", mockProducts);
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
    console.log(result);
  });
});

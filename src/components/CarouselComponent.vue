<template>
  <div class="carousel-component">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div @click="closeModal" class="close-modal">x</div>
          <div class="slider-container">
            <span
              :class="['prev', { disabled: active === 1 }]"
              @click="slideChange(-1)"
              >&#10094;</span
            >
            <div class="slides">
              <div v-for="(img, index) in images" :key="index">
                <img
                  :src="`${img.href}`"
                  style="width:100%"
                  v-show="img.href"
                  v-if="++index === active"
                />
              </div>
            </div>

            <span
              :class="['next', { disabled: active == slides }]"
              @click="slideChange(1)"
              >&#10095;</span
            >
          </div>
          <div class="dots-container">
            <span
              v-for="(dot, index) in getSlides && getSlides.length"
              :key="index"
              :class="['dots', { active: ++index === active }]"
              @click="jump(index)"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel-component",
  props: ["images"],
  data() {
    return {
      active: 1,
      slides: this.images.length
    };
  },
  computed: {
    getSlides() {
      let slides = [];
      if (this.images != null && this.images.length) {
        this.images.forEach(img => {
          return img.href ? slides.push(img.href) : null;
        });
      }
      return slides;
    }
  },
  methods: {
    closeModal: function() {
      this.$emit("close");
    },

    slideChange: function(amount) {
      let newActive;
      let self = this;
      const newIndex = self.active + amount;
      if (newIndex > this.getSlides.length) {
        newActive = 1;
      }
      if (newIndex === 0) {
        newActive = this.getSlides.length;
      }
      self.active = newActive || newIndex;
    },
    jump: function(index) {
      this.active = index;
    }
  }
};
</script>

<style scoped>
.prev,
.next {
  cursor: pointer;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  z-index: 999;
  position: absolute;
  top: 50%;
}
.next {
  right: 25%;
}
.dots-container {
  position: absolute;
  padding: 5px 0px;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: -29px;
}

.dots {
  cursor: pointer;
  height: 5px;
  width: 5px;
  margin: 0 10px;
  background-color: inherit;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}
.active {
  background-color: #ccc;
}

.prev:hover,
.next:hover {
  background-color: #000;
  color: #fff;
}

@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
@media only screen and (min-width: 1600px) {
  .modal-container {
    min-height: 800px;
  }
}

.modal-body {
  margin: 20px 0;
}
.slider-container {
  display: flex;
}
.slides {
  width: 100%;
}
.close-modal {
  position: absolute;
  right: 24%;
  margin-top: -8px;
  top: 20%0;
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: #fff;
  font-weight: bold;
  border: 2px solid #000;
  margin-right: 2px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 33%);
  border-radius: 50%;
  line-height: 1.5;
}
</style>

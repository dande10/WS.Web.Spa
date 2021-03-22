<template>
  <div class="carousel-component">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div @click="closeModal" class="close-modal">x</div>
          <div class="slider-container">
            <span
              :class="['prev', { disabled: active === 1 }]"
              @click="prevSlide"
              >&#10094;</span
            >
            <div class="slides">
              <div v-for="(img, index) in images" :key="index">
                <img
                  :src="`${img.href}`"
                  class="img-content"
                  v-show="isActiveImage(img, index)"
                />
              </div>
            </div>

            <span
              :class="['next', { disabled: active == lengthOfSlides }]"
              @click="nextSlide"
              >&#10095;</span
            >
          </div>
          <div class="dots-container">
            <span
              v-for="(dot, index) in lengthOfSlides"
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
      active: 1, // default
    };
  },
  computed: {
    getSlides() {
      let slides = [];
      if (this.images != null && this.images.length) {
        this.images.forEach((img) => {
          return img.href ? slides.push(img.href) : null;
        });
      }
      return slides; // returning all images with img.href
    },
    lengthOfSlides() {
      return this.getSlides?.length ? this.getSlides.length : 0; // Caluclating length of slides
    },
  },
  methods: {
    closeModal() {
      this.$emit("close"); // emitting the event to close
    },
    nextSlide() {
      this.slideChange(1);
    },
    prevSlide() {
      this.slideChange(-1);
    },
    slideChange(amount) {
      let newActive = this.active + amount;
      if (newActive > this.getSlides.length) {
        newActive = 1;
      }
      if (newActive <= 0) {
        newActive = this.getSlides.length;
      }
      this.active = newActive;
    },
    jump(index) {
      this.active = index;
    },
    isActiveImage(img, index) {
      return img.href && index + 1 === this.active; // index start from 0 added plus 1 if it is equal to Active then image will show.
    },
  },
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
  right: 0;
}
.dots-container {
  position: absolute;
  padding: 5px 0px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 0;
  left: 0;
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
  z-index: 9999;
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
  width: 35%;
  display: flex;
  position: relative;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

@media only screen and (min-width: 1200px) {
  .img-content {
    max-height: calc(100vh - 250px);
  }
}

.img-content {
  width: 100%;
}

.modal-body {
  margin: 20px 0;
}
.slider-container {
  display: flex;
  width: 100%;
}
.slides {
  width: 100%;
}
.close-modal {
  position: absolute;
  right: -12.5px;
  top: -12.5px;
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

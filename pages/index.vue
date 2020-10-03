<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <b-carousel-slide
      img-src="https://picsum.photos/1024/480/?image=52"
    />

    <!-- Slides with custom text -->
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54" />

    <!-- Slides with image only -->
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />

    <!-- Slides with img slot -->
    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
  </b-carousel>
</template>

<script>
export default {}
</script>

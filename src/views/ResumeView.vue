<template>
  <div class="resume">
    <vue-pdf-embed
      :source="pdfSource"
      :page="page"
      @password-requested="handlePasswordRequest"
      @rendered="handleDocumentRender"
      :disableTextLayer="true"
      :disableAnnotationLayer="true"
    />
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed";

export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      pdfSource: "https://raw.githubusercontent.com/khanshifaul/khanshifaul.github.io/main/src/assets/CV_Shifaul.pdf",
    };
  },
};
</script>

<style lang="scss" scoped>
.resume {
    background: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>

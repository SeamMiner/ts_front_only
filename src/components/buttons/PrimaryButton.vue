<template>
  <button class="primaryButton" :class="{'disabled': disabled}" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: "button"
    },
  }
}
</script>

<style scoped>
.primaryButton {
  background: #0082FF;
  padding: 16px 24px 17px;
  border: 1px solid #0171E3;
  border-radius: 6px;
  transition: all .15s ease-in-out;
  text-decoration: none;
  text-align: center;
  font-family: Gotham Pro, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  color: white;
}

.primaryButton[data-variant="secondary"] {
  background: #FFFFFF;
  border: 1px solid #E5E6EB;
  color: #444444;
}

.primaryButton:hover:not(.disabled) {
  background: #1E90FF;
}

.primaryButton[data-variant="secondary"]:hover:not(.disabled) {
  background: #F5F5F5;
}

.primaryButton:active:not(.disabled) {
  background: #0076E7;
}

.primaryButton[data-variant="secondary"]:active:not(.disabled) {
  background: #F1EFEF;
}

.primaryButton:focus:not(.disabled) {
  outline: none;
  box-shadow: 0 0 0 4px #87ABF9;
}

.primaryButton.disabled {
  background: #0082FF;
  opacity: 0.4;
  cursor: default;
}

.primaryButton.disabled:focus {
  outline: none;
}

.primaryButton[data-size="sm"] {
  border-radius: 100px;
  padding: 10px 26px 11px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .primaryButton[data-size="sm"] {
    font-size: 12px;
    line-height: 11px;
  }
}
</style>

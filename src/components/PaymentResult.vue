<template>
  <div></div>
</template>

<script>
export default {
  name: "PaymentResult",
  mounted() {
    setTimeout(() => {
      this.$parent.$data.paymentStatus = this.$route.params.status;

      this.$router.push("/payment/");
    }, 300);
  }
}
</script>

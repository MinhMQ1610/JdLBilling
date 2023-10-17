<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center">
      <v-img class="brand" height="300" src="@/assets/Brand.png"/>

      <h1 v-if="!successQR" class="text-h4 font-weight-bold mt-3">Generate QR Bank</h1>
      <h1 v-else class="text-h4 font-weight-bold mt-3">Thank you !</h1>

      <div class="py-2" />

      <v-row class="d-flex align-center justify-center">
        <v-col v-if="successQR" cols="9">
          <img :src="link" alt="TP Bank" class="border rounded me-3 w-100" />
        </v-col>
        <v-col v-if="!successQR" cols="8">
          <v-text-field label="Enter price" variant="solo" v-model="price"></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn
            v-if="!successQR"
            color="primary"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
            @click="generateQR"
          >
            <v-icon
              icon="mdi mdi-qrcode"
              size="large"
              start
            />

            Get bill
          </v-btn>
          <v-btn
            v-else
            color="primary"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
            @click="refresh"
          >
            <v-icon
              icon="mdi mdi-refresh"
              size="large"
              start
            />

            Refresh
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import QRSerive from '@/services/qrPayment.service'
  import { BANKING_INFO } from '@/constants/bank.constant'
  import { ref } from 'vue'

  let price = ref('');
  let link = ref('');
  let successQR = ref(false);

  const generateQR = () => {
    link = QRSerive.VietQR.generateQR(BANKING_INFO.BANK_TITLE, BANKING_INFO.BANK_NUMBER, price.value)
    successQR.value = true
    price.value = ''
  };

  const refresh = () => {
    price.value = ''
    successQR.value = false
    link = ''
  }
</script>


<style>
.brand {
  border-radius: 100%;
}
</style>
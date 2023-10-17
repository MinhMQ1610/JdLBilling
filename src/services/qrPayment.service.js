const QRSerive = {
  VietQR: {
    generateQR(bankName, bankNum, amount) {
      const formattedAmount = amount.replace(/,/g, '');
      const qrUrl = `https://img.vietqr.io/image/${bankName}-${bankNum}-compact2.jpg?amount=${formattedAmount}&accountName=Vo%20Ngoc%20Anh%20Duong`;

      return qrUrl;
    }
  }
};

export default QRSerive;

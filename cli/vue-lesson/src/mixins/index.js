const mixins = {
  methods: {
    capitalizeWords(sentences) {
      const words = sentences.split(' ');
      return words.map((word) => { 
          return word[0].toUpperCase() + word.substring(1); 
      }).join(' ');
    },
    async callApi() {
      const res = await fetch('https://api.steinhq.com/v1/storages/61f180428d29ba2379165adb/Sheet1');
      const data = await res.json();

      return data.map((item) => {
        if (item.isComplete === 'FALSE') {
          item.isComplete = false;
        } else {
          item.isComplete = true;
        }
        return item;
      });
    }
  }
};

export default mixins;
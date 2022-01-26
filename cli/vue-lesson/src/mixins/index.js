const mixins = {
  methods: {
    capitalizeWords(sentences) {
      const words = sentences.split(' ');
      return words.map((word) => { 
          return word[0].toUpperCase() + word.substring(1); 
      }).join(' ');
    },
    async callApi() {
      console.log(this.$store.state.count);
      const res = await this.axios.get('Sheet1');
      const { data } = res;

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
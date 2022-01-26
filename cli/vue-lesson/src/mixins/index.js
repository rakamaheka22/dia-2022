const mixins = {
  methods: {
    capitalizeWords(sentences) {
      const words = sentences.split(' ');
      return words.map((word) => { 
          return word[0].toUpperCase() + word.substring(1); 
      }).join(' ');
    },
    callApi() {
      return [
        {
          id: 1,
          task: 'Olahraga Pagi',
          isComplete: false
        },
        {
          id: 2,
          task: 'Sarapan Buah',
          isComplete: false
        },
        {
          id: 3,
          task: 'Ngoding Web Task 1',
          isComplete: false
        },
        {
          id: 4,
          task: 'Meeting dengan Tim',
          isComplete: false
        },
        {
          id: 5,
          task: 'Ngoding Web Task 2',
          isComplete: false
        },
        {
          id: 6,
          task: 'Belanja ke Mall',
          isComplete: false
        },
        {
          id: 7,
          task: 'Makan Malam di Yoshinoya',
          isComplete: false
        },
        {
          id: 8,
          task: 'Pulang Beli Martabak',
          isComplete: false
        },
      ];
    }
  }
};

export default mixins;
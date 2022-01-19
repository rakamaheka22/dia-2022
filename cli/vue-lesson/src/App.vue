<template>
  <!-- HTML -->
  <div>
    <header-component></header-component>
    <search-box></search-box>
    <h2>{{ fullName }}</h2>
    <p>{{ message }} : {{ count }} {{ messageCount }}</p>
    <span :class="[{ active: isActive }, { 'not-active': !isActive }]">Status : {{ status }}</span>
    <p>
      {{ getItem }}
    </p>
    <p :style="{ fontWeight: isActive ? 'bold' : 'normal' }">
      Check for more details <a v-bind:href="url" :title="title">Here</a>
    </p>
    <img v-if="!isActive" v-bind:src="image" :alt="`Gambar ${title}`" />
    <img v-else-if="count > 2 && isActive" src="https://placeimg.com/250/250/nature" alt="Gambar Alam" />
    <img v-else src="https://placeimg.com/250/250/animals" alt="Gambar Hewan" />
    <div>
      <button v-on:click="incrementCount">Tambah Count</button>
      <button @click="dynamicIncrementCount(countItem)">Tambah Count Bebas</button>
      <button v-show="count > 0" @click="count--">Kurang Count</button>
    </div>
    <div>
      <div v-if="lists.length < 1">
        Loading...
      </div>
      <ul v-else>
        <li v-for="(item, index) in lists" :key="index">
          {{ item.id }} {{ item.title }}
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <label for="firstName">Input Text</label><br />
      <input v-model="firstName" type="text" id="firstName" @focus="onFocusElement" @keydown="onKey($event, 'keydown')" @keyup.enter="submit" />
      <input v-model.lazy="lastName" type="text" @blur="onBlurElement" />
      <input v-model.number="count" type="text" />
    </div>
    <div>
      <label for="textarea">Textarea</label><br />
      <textarea v-model="message" id="textarea" @input="onInputElement" @keypress="onKey($event, 'keypress')"></textarea>
    </div>
    <div>
      <label for="radio">Radio {{ gender }}</label><br />
      <input v-model="gender" type="radio" id="radio" value="male" @change="onChangeElement" /> Pria
      <input v-model="gender" type="radio" id="radio" value="female" @change="onChangeElement" /> Wanita
    </div>
    <div>
      <label for="checkbox">Checkbox</label><br />
      <input v-model="checkbox" type="checkbox" id="checkbox" /> {{ checkbox }}
    </div>
    <div>
      <label for="multicheckbox">Multi Checkbox {{ multicheckbox }}</label><br />
      <input v-model="multicheckbox" type="checkbox" id="multicheckbox" value="english" /> English
      <input v-model="multicheckbox" type="checkbox" id="multicheckbox" value="indonesian" /> Indonesian
      <input v-model="multicheckbox" type="checkbox" id="multicheckbox" value="japanese" /> Japanese
      <input v-model="multicheckbox" type="checkbox" id="multicheckbox" value="russian" /> Russian
    </div>
    <div>
      <label for="selected">Select {{ selected }}</label><br />
      <select v-model="selected" id="selected" @change="onChangeElement">
        <option value="">Jenjang Pendidikan</option>
        <option value="sd">SD</option>
        <option value="smp">SMP</option>
        <option value="sma">SMA</option>
      </select>
    </div>
  </div>
</template>

<script>
// Local Component Registration
import Header from './components/Header.vue';
import SearchBox from './components/SearchBox.vue';

// JS
export default {
  name: 'App',
  components: {
    'header-component': Header,
  },
  data() {
    SearchBox
    return {
      selected: '',
      checkbox: false,
      multicheckbox: [],
      firstName: 'John',
      lastName: 'Doe',
      gender: '',
      countItem: 2,
      title: 'Vue 3',
      image: 'https://via.placeholder.com/250/',
      url: 'https://v3.vuejs.org/',
      count: 0,
      message: 'Message Count',
      messageCount: '',
      isActive: false,
      lists: [],
      item: {
        id: 0,
        title: 'Item #1',
      },
    };
  },
  computed: {
    getItem() {
      return `Id: ${this.item.id} Title: ${this.item.title}`;
    },
    status() {
      return this.isActive ? 'Yes' : 'No';
    },
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(newValue) {
        const name = newValue.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
      }
    }
  },
  watch: {
    count(newValue) {
      if (newValue > 10) {
        this.messageCount = 'Count melebihi 10 item';
      }
      if (newValue <= 10) {
        this.messageCount = '';
        this.isActive = false;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.incrementCount();
      this.fullName = 'John Cena';
      this.lists = [
        {
          id: 1,
          title: 'Bangun Tidur'
        },
        {
          id: 2,
          title: 'Nonton Kartun'
        },
        {
          id: 3,
          title: 'Mandi Pagi'
        },
        {
          id: 4,
          title: 'Berangkat Sekolah'
        },
        {
          id: 5,
          title: 'Istirahat Sekolah'
        },
        {
          id: 6,
          title: 'Ekstrakurikuler'
        },
        {
          id: 7,
          title: 'Pulang Sekolah'
        },
        {
          id: 8,
          title: 'Mandi Sore'
        },
        {
          id: 9,
          title: 'Makan Malam'
        },
        {
          id: 10,
          title: 'Mengerjakan PR'
        },
        {
          id: 11,
          title: 'Tidur'
        }
      ];
    }, 2000);
  },
  methods: {
    dynamicIncrementCount(count) {
      this.count += count;
    },
    incrementCount() {
      this.count += 1;
      if (this.count > 0) this.isActive = true;
    },
    updateMessage(message) {
      this.message = message;
    },
    showItem() {
      return `Id: ${this.item.id} Title: ${this.item.title}`;
    },
    onChangeElement(event) {
      console.log(event.target.value);
    },
    onInputElement(event) {
      console.log(event.target.value);
    },
    onFocusElement(event) {
      console.log(event);
    },
    onBlurElement(event)  {
      console.log(event);
    },
    onKey(event, type) {
      console.log(type);
      console.log(event.key);
    },
    submit(event) {
      console.log(event.target.value);
    }
  }
}
</script>

<style>
/* CSS */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: green;
}

.not-active {
  color: red;
}
</style>

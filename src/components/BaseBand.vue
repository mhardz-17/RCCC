<template>
    <div class="baseband">
        <h1>hahahahaahahaha</h1>
        <!--<select class="form-control" v-model="r4b1" id="r4b1">-->
        <!--<option class="brown" value="1">1 Brown</option>-->
        <!--<option class="red" value="2">2 RED</option>-->
        <!--<option class="orange" value="3">3 Orange</option>-->
        <!--<option class="yellow" value="4">4 Yellow</option>-->
        <!--<option class="green" value="5">5 Green</option>-->
        <!--<option class="blue" value="6">6 Blue</option>-->
        <!--<option class="purple" value="7">7 Violet</option>-->
        <!--<option class="gray" value="8">8 Gray</option>-->
        <!--<option class="white" value="9">9 White</option>-->
        <!--</select>-->

        <select class="form-control baseband-selector" v-bind:class="selectClass" v-model="value" >
            <option  v-for="data,key in color_and_values" v-bind:key="key" :value="key">{{ data.label }}</option>
        </select>
    </div>
</template>

<script>
const colorAndValue = {
  black: {value: 0, label: '0 Black'},
  brown: {value: 1, label: '1 Brown'},
  red: {value: 2, label: '2 Red'},
  orange: {value: 3, label: '3 Orange'},
  yellow: {value: 4, label: '4 Yellow'},
  green: {value: 5, label: '5 Green'},
  blue: {value: 6, label: '6 Blue'},
  purple: {value: 7, label: '7 Purple'},
  gray: {value: 8, label: '8 Gray'},
  white: {value: 9, label: '9 White'}
}

export default {
  name: 'BaseBand',
  data () {
    return {
      color_and_values: colorAndValue,
      value: 'white'
    }
  },
  computed: {
    selectClass: function () {
      let classes = {}
      let self = this
      _.forEach(colorAndValue, function (value, key) {
        classes[key] = (key == self.value)
      })

      console.log(classes)
      return classes
    }
  },
  methods: {
    changedValue: function (value) {
      this.value = value
    },
    changedLabel: function (label) {
      // receive the label of the value selected (the label shown in the select, or an empty string)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

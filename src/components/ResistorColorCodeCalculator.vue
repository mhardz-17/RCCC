<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div class="row justify-content-md-center">
            <div class="col-4" style="background-color:gray; height: 50px">
                <div class="band" :class="[r4b1]"></div>
                <div class="band" :class="[r4b2]"></div>
                <div class="band" :class="[r4b3]"></div>
                <div class="band" :class="[r4b4]"></div>
            </div>
        </div>
        <base-band name="r4b1" v-bind:value="r4b1" @update="cc"></base-band>
        <base-band name="r4b2" v-bind:value="r4b2" @update="cc"></base-band>
        <multiplier-band name="r4b3" v-bind:value="r4b3" @update="cc"></multiplier-band>
        <tolerance-band name="r4b4" v-bind:value="r4b4" @update="cc"></tolerance-band>
        <hr>
        Resistance: {{ formatResistance(resistance) }} <br>
        Min Resistance: {{ formatResistance(min_resistance) }} <br>
        Max Resistance: {{ formatResistance(max_resistance) }} <br>
    </div>
</template>

<script>
const baseValue = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    purple: 7,
    gray: 8,
    white: 9
  },
  mutilplierValue = {
    black: 'x1',
    brown: 'x10',
    red: 'x100',
    orange: 'x1k',
    yellow: 'x10k',
    green: 'x100k',
    blue: 'x1M',
    purple: 'x10M',
    gray: 'x100M',
    white: 'x1G',
    gold: 'x.1',
    silver: 'x.01'
  }, toleranceValue = {
    brown: '± 1%',
    red: '± 2%',
    gold: '± 5%',
    silver: '± 10%'
  }
export default {
  name: 'ResistorColorCodeCalculator',
  data () {
    return {
      msg: 'This app is used to calculate resistance of color coded band resistor.',
      r4b1: 'white',
      r4b2: 'blue',
      r4b3: 'silver',
      r4b4: 'gold',
      bandCount: 4,
      resistance: 0,
      min_resistance: 0,
      max_resistance: 0
    }
  },
  created () {
    this.getResistance()
  },
  computed: {
    getClassFor: function (key) {
      var a = {}
      a[key] = true
      return a
    }

  },
  methods: {
    cc: function (key, value) {
      this[key] = value
      this.getResistance()
    },
    computeResistance: function (bandColors) {
      var base = String(bandColors.b1) + String(bandColors.b2)
      if (bandColors.hasOwnProperty('b3')) {
        base + String(bandColors.b3)
      }
      var multiplier = bandColors.m
      multiplier = multiplier.replace('x', '').replace('k', '000').replace('M', '000000').replace('G', '000000000')
      this.resistance = parseFloat(base) * parseFloat(multiplier)

      var tolerance = bandColors.t
      tolerance = parseFloat(tolerance.replace('± ', '').replace('%', ''))
      if (!tolerance) {
        tolerance = 20
      }

      let plusminus_resistance = parseFloat(this.resistance * (tolerance / 100))
      this.min_resistance = this.resistance - plusminus_resistance
      this.max_resistance = this.resistance + plusminus_resistance
    },
    formatResistance: function (resistance) {
        console.log(parseFloat(resistance / 1000000000));
      if (parseInt((resistance / 1000000000)) >= 1) {
        return (resistance / 1000000000) + 'G';
      }
        if (parseInt((resistance / 1000000)) >= 1) {
            return (resistance / 1000000) + 'M';
        }

        if (parseInt((resistance / 1000)) >= 1) {
            return (resistance / 1000) + 'K';
        }

        return resistance;

    },
    getResistance: function () {
      if (this.bandCount == 4) {
        return this.computeResistance({
          b1: baseValue[this.r4b1],
          b2: baseValue[this.r4b2],
          m: mutilplierValue[this.r4b3],
          t: toleranceValue[this.r4b4]
        })
      }

      if (this.bandCount == 5) {
        return this.computeResistance({
          b1: baseValue[this.r5b1],
          b2: baseValue[this.r5b2],
          b3: baseValue[this.r5b3],
          m: mutilplierValue[this.r5b4],
          t: toleranceValue[this.r5b5]
        })
      }
    }
  }
}
</script>

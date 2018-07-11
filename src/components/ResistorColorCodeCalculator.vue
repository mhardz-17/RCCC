<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <div class="row justify-content-md-center">
            <div class="col-4" style="background-color:gray; height: 50px">
                <div class="band green"></div>
                <div class="band brown"></div>
                <div class="band orange"></div>
                <div class="band green"></div>
            </div>
        </div>
        Hahhaha <br>
        <base-band></base-band>
        <base-band></base-band>
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
        <!--<select class="form-control" v-model="r4b2" id="r4b2">-->
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
        <!--<select class="form-control" v-model="r4b3" id="r4b3">-->
            <!--<option class="black" value="x1">x1 Black</option>-->
            <!--<option class="brown" value="x10">x10 Brown</option>-->
            <!--<option class="red" value="x100">x100 Red</option>-->
            <!--<option class="orange" value="x1k">x1k Orange</option>-->
            <!--<option class="yellow" value="x10k">x10k Yellow</option>-->
            <!--<option class="green" value="x100k">x100k Green</option>-->
            <!--<option class="blue" value="x1M">x1M Blue</option>-->
            <!--<option class="purple" value="x10M">x10M Violet</option>-->
            <!--<option class="grey" value="x100M">x100M Gray</option>-->
            <!--<option class="white" value="x1G">x1G White</option>-->
            <!--<option class="gold" value="÷10">÷10 Gold</option>-->
            <!--<option class="silver" value="÷100">÷100 Silver</option>-->
        <!--</select>-->
        <!--<select class="form-control" v-model="r4b4" id="r4b4">-->
            <!--<option class="brown" value="± 1%">± 1% Brown</option>-->
            <!--<option class="red" value="± 2%">± 2% Red</option>-->
            <!--<option class="orange" value="± 3%">± 3% Orange</option>-->
            <!--<option class="yellow" value="± 4%">± 4% Yellow</option>-->
            <!--<option class="green" value="± 0.5%">± 0.5% Green</option>-->
            <!--<option class="blue" value="± 0.25%">± 0.25% Blue</option>-->
            <!--<option class="purple" value="± 0.10%">± 0.10% Violet</option>-->
            <!--<option class="grey" value="± 0.05%">± 0.05% Gray</option>-->
            <!--<option class="gold" value="± 5%">± 5% Gold</option>-->
            <!--<option class="silver" value="± 10%" selected="">± 10% Silver</option>-->
        <!--</select>-->
        <button class="btn btn-lg btn-primary">Test</button>
    </div>
</template>

<script>


export default {
  name: 'ResistorColorCodeCalculator',
  data () {
    return {
      msg: 'This app is used to calculate resistance of color coded band resistor.',
      r4b1: '9',
      r4b2: '1',
      r4b3: '1',
      r4b4: '± 2%'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .band {
        width: 15px;
        height: 50px;
        float: left;
        margin-right: 15px;
    }

    .brown {
        background-color: brown;
    }

    .red {
        background-color: red;
    }

    .orange {
        background-color: orange;
    }

    .yellow {
        background-color: yellow
    }

    .blue {
        background-color: blue;
    }

    .purple {
        background-color: purple;
    }

    .gray {
        background-color: gray;
    }

    .white {
        background-color: white;
    }

    .green {
        background-color: green;
    }
</style>
